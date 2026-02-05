import type { Component } from "react";
import { LandingPage } from "../pages/LandingPage";
import NotFound from "../not_found";
import { BlazeLayout, type BlazeLayoutType } from "../BlazeLayout/BlazeLayout";

export type PageComponent = ()=>React.ReactNode;

export type BlazeRouteType = {
    path: string
    ComponentPage:PageComponent
    Layout?: BlazeLayoutType
}

export const BlazeObjectRoutes : BlazeRouteType[] = [
    {
        path: "/",
        ComponentPage: LandingPage,
        Layout: BlazeLayout
    },
    {
        path: "*",
        ComponentPage: NotFound
    }    
]

