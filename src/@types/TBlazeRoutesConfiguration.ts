import type { BlazeMiddleware } from "../BlazeAuthentification/BlazeAuthentificationLayer";
import { type BlazeLayoutType } from "../BlazeLayout/BlazeLayout";

export type PageComponent = ()=>React.ReactNode;

export type TBlazeRouteType<T> = {
    path: string
    ComponentPage:PageComponent
    Layout?: BlazeLayoutType
    protection?: boolean
    // Type argument is the type used for
    middlewares?: BlazeMiddleware<T>[]
}

