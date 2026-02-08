import type React from "react";
import { blazeCentralConfiguration } from "../blazeCentralConfiguration";
import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/BlazeStores/authStore";

export type BlazeAuthentificationLayerPropsType<T> = {
  children?: React.ReactNode;
  middlewares?: BlazeMiddleware<T>[];
  Loading: () => React.ReactNode;
};

export type BlazeMiddleware<ResType> = (res: ResType) => ResType;

export function BlazeAuthentificationLayer<T>(
  props: BlazeAuthentificationLayerPropsType<T>
) {
  const { children, middlewares, Loading } = props;
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

function recursiveArrayFunctionExec<T>(refArr: BlazeMiddleware<T>[],arg:T,index: number){
    if(refArr.length === index ){
        return arg;
    }
    return recursiveArrayFunctionExec(refArr,refArr[index](arg),index+1)

}
