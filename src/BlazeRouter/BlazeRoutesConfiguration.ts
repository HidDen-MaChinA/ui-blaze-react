import type { Component } from "react";
import { LandingPage } from "../pages/LandingPage";
import NotFound from "../not_found";

export type PageComponent = ()=>React.ReactNode;

export type BlazeRouteType = {
    path: string
    ComponentPage:PageComponent
    Layout?: Component
}

export const BlazeObjectRoutes : BlazeRouteType[] = [
    {
        path: "/",
        ComponentPage: LandingPage
    },
    {
        path: "*",
        ComponentPage: NotFound
    }    
]

