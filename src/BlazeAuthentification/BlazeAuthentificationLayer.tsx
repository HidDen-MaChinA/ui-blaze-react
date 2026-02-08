import type React from "react";
import { useEffect } from "react";
import { useAuthStore } from "../stores/BlazeStores/authStore";
import { recursiveArrayFunctionExec } from "./utils/recursiveArrayFunctionExec";
import blazeCentralConfiguration from "../blazeCentralConfiguration";

export type BlazeAuthentificationLayerPropsType<T> = {
  children?: React.ReactNode;
  protection?: boolean
  middlewares?: BlazeMiddleware<T>[];
  Loading: () => React.ReactNode;
};

export type BlazeMiddleware<ResType> = (res: ResType) => ResType;

export function BlazeAuthentificationLayer<T>(
  props: BlazeAuthentificationLayerPropsType<T>
) {
  const { protection, children, middlewares, Loading } = props;
  if(!protection){
    return children
  }
  const {setUserInformations, userInformations} = useAuthStore(_=>_);
  useEffect(()=>{
    authenticate<T>().then((res)=>{
        if(res){
            if(middlewares){
                const valueAfterMiddleWares = recursiveArrayFunctionExec<T>(middlewares, res, 0);
                setUserInformations(valueAfterMiddleWares);
            }
            setUserInformations(res);
        }
    })
  }, [])


  return userInformations ? children : <Loading />;
}

function authenticate<T>() {
  return blazeCentralConfiguration.blazeAuthProvider.authentificationProvider.whoami(
    blazeCentralConfiguration.blazeAuthProvider.authentificationPath
  ).then(res=>res as T).catch(()=>null) ;
}

