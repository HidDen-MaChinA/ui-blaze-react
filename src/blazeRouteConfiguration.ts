import { BlazeLayout } from "./BlazeLayout/BlazeLayout";
import NotFound from "./not_found";
import { LandingPage } from "./pages/LandingPage";
import FormsPage from "./pages/FormsPage";
import { LoginPage } from "./pages/LoginPage";
import createObjectRoutes from "./BlazeRouter/utils/createObjectRoutes";
import { ForbiddenPage } from "./forbidden_page";
import { fakeUserAuthMiddleware } from "./middlewares/fakeUserAuthMiddleware";
import { Valentine } from "./pages/Valentine";

const BlazeObjectRoutes = createObjectRoutes([
    // {
    //     path: "/",
    //     ComponentPage: LandingPage,
    //     Layout: BlazeLayout
    // },
    // {
    //     path: "/forms",
    //     ComponentPage: FormsPage,
    //     Layout: BlazeLayout,
    //     protection: true,
    //     middlewares: []
    // },
    // {
    //     path: "/valentine",
    //     ComponentPage: Valentine
    // },
    // {
    //     path: "/login",
    //     ComponentPage: LoginPage,
    // },
    {
        path: "*",
        ComponentPage: Valentine
    },
    // {
    //     path: "/forbidden",
    //     ComponentPage: ForbiddenPage
    // }
])

export default BlazeObjectRoutes