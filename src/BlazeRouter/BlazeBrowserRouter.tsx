import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { BlazeObjectRoutes, type BlazeRouteType } from "./BlazeRoutesConfiguration.ts";
import { blazeCentralConfiguration } from "../blazeCentralConfiguration.ts";

const SideBar = blazeCentralConfiguration.blazeLayout.Sidebar;

function mapObjectRouteToReactRouterRoute (arg: BlazeRouteType){
  if(arg.Layout){
    return <Route path={arg.path} element={
      <arg.Layout Component={arg.ComponentPage} Sidebar={SideBar} />
    } />
  }
  return <Route path={arg.path} Component={arg.ComponentPage} />
}

const blazeRoutes = createRoutesFromElements(BlazeObjectRoutes.map(mapObjectRouteToReactRouterRoute));
export const BlazeBrowserRouter = createBrowserRouter(blazeRoutes);
