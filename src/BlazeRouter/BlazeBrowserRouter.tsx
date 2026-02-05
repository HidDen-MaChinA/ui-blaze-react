import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { BlazeObjectRoutes, type BlazeRouteType } from "./BlazeRoutesConfiguration.ts";


function mapObjectRouteToReactRouterRoute (arg: BlazeRouteType){
  return <Route path={arg.path} Component={arg.ComponentPage} />
}

const blazeRoutes = createRoutesFromElements(BlazeObjectRoutes.map(mapObjectRouteToReactRouterRoute));
export const BlazeBrowserRouter = createBrowserRouter(blazeRoutes);
