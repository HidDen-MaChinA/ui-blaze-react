import { type BlazeLayoutType } from "../BlazeLayout/BlazeLayout";

export type PageComponent = ()=>React.ReactNode;

export type TBlazeRouteType = {
    path: string
    ComponentPage:PageComponent
    Layout?: BlazeLayoutType
}

