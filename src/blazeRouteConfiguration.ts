import { BlazeLayout } from "./BlazeLayout/BlazeLayout";
import NotFound from "./not_found";
import { LandingPage } from "./pages/LandingPage";
import FormsPage from "./pages/FormsPage";
import { LoginPage } from "./pages/LoginPage";
import createObjectRoutes from "./BlazeRouter/utils/createObjectRoutes";

const BlazeObjectRoutes = createObjectRoutes([
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
])

export default BlazeObjectRoutes