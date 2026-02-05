import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { blazeCentralConfiguration } from "../blazeLayoutConfiguration.ts";
import { BlazeObjectRoutes } from "../blazeRouteConfiguration.ts";
import type { TBlazeRouteType } from "../@types/TBlazeRoutesConfiguration.ts";

const SideBar = blazeCentralConfiguration.blazeLayout.Sidebar;

function mapObjectRouteToReactRouterRoute(arg: TBlazeRouteType) {
  if (arg.Layout) {
    return (
      <Route
        path={arg.path}
        element={<arg.Layout Component={arg.ComponentPage} Sidebar={SideBar} />}
      />
    );
  }
  return <Route path={arg.path} Component={arg.ComponentPage} />;
}

const blazeRoutes = createRoutesFromElements(
  BlazeObjectRoutes.map(mapObjectRouteToReactRouterRoute)
);
export const BlazeBrowserRouter = createBrowserRouter(blazeRoutes);
