import type React from "react";
import { blazeCentralConfiguration } from "../blazeCentralConfiguration";
import { useEffect, useState } from "react";

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
  const [authState, setAuthState] = useState<T|null>(null);
  useEffect(()=>{
    authenticate<T>().then((res)=>{
        if(middlewares){
            const valueAfterMiddleWares = recursiveArrayFunctionExec<T>(middlewares, res, 0);
            setAuthState(valueAfterMiddleWares);
        }
    })
  }, [])


  return authState ? children : <Loading />;
}

async function authenticate<T>() {
  return await blazeCentralConfiguration.blazeAuthProvider.authentificationProvider.whoami(
    blazeCentralConfiguration.blazeAuthProvider.authentificationPath
  ) as T;
}

function recursiveArrayFunctionExec<T>(refArr: BlazeMiddleware<T>[],arg:T,index: number){
    if(refArr.length === index ){
        return arg;
    }
    return recursiveArrayFunctionExec(refArr,refArr[index](arg),index+1)

}
