import type { BlazeMiddleware } from "../BlazeAuthentification/BlazeAuthentificationLayer";

export const fakeUserAuthMiddleware : BlazeMiddleware<{something: string}> = (res)=>{
    return {
        something: "hello fake middleware"
    }
}