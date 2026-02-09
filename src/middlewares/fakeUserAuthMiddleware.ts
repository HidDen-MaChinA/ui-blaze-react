import type { BlazeMiddleware } from "../BlazeAuthentification/BlazeAuthentificationLayer";

export const fakeUserAuthMiddleware : BlazeMiddleware = (res)=>{
    return {
        something: "hello fake middleware"
    }
}