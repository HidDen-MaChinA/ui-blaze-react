import { BlazeLayout } from "./BlazeLayout/BlazeLayout";
import type { TBlazeRouteType } from "./@types/TBlazeRoutesConfiguration";
import NotFound from "./not_found";
import { LandingPage } from "./pages/LandingPage";
import FormsPage from "./pages/FormsPage";
import { LoginPage } from "./pages/LoginPage";


export const BlazeObjectRoutes : TBlazeRouteType[] = [
    {
        path: "/",
        ComponentPage: LandingPage,
        Layout: BlazeLayout
    },
    {
        path: "/forms",
        ComponentPage: FormsPage,
        Layout: BlazeLayout
    },
    {
        path: "/login",
        ComponentPage: LoginPage,
    },
    {
        path: "*",
        ComponentPage: NotFound
    }
]