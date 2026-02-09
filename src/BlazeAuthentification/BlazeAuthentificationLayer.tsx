import type React from "react";
import { useEffect } from "react";
import { useAuthStore } from "../stores/BlazeStores/authStore";
import { recursiveArrayFunctionExec } from "./utils/recursiveArrayFunctionExec";
import blazeCentralConfiguration from "../blazeCentralConfiguration";
import { useNavigate } from "react-router";

export type BlazeAuthentificationLayerPropsType<T> = {
  children?: React.ReactNode;
  protection?: boolean
  middlewares?: BlazeMiddleware[];
  Loading: () => React.ReactNode;
};

export type BlazeMiddleware = (res: unknown|null) => unknown|null;

export function BlazeAuthentificationLayer<T>(
  props: BlazeAuthentificationLayerPropsType<T>
) {
  const { protection, children, middlewares, Loading } = props;
  if(!protection){
    return children
  }
  const navigate = useNavigate();
  const {setUserInformations, userInformations} = useAuthStore(_=>_);
  useEffect(()=>{
    authenticate<T>().then((res)=>{
        if(middlewares){
            const valueAfterMiddleWares = recursiveArrayFunctionExec<T>(middlewares, res, 0);
            return valueAfterMiddleWares;
        }
        return res;
    }).then((result)=>{
      if(!result){
        navigate("/forbidden")
        return result;
      }
      return result;
    }).then(setUserInformations)
  }, [])


  return userInformations ? children : <Loading />;
}

function authenticate<T>() {
  return blazeCentralConfiguration.blazeAuthProvider.authentificationProvider.whoami(
    blazeCentralConfiguration.blazeAuthProvider.authentificationPath
  ).then(res=>res as T).catch(()=>null) ;
}

