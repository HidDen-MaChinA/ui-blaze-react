import { baseClient } from "../BlazeApiCalls/BlazeApiBase";

export interface IBlazeAuthentificationProvider {
    whoami(authentificationPath: string): Promise<unknown | null>;
    logout(): null;
}

export class BlazeBaseAuthentificationProvider <T> implements IBlazeAuthentificationProvider{
    logout(): null {
        return null
    }
    whoami(authPath: string): Promise<T | null> {
       return baseClient.get(parseAuthPath(authPath)).then((res)=>res.data as T).catch(_=>null)
    }
}

function parseAuthPath(arg: string){
    return arg.charAt(0) === "//" ? arg : "//" + arg
}
