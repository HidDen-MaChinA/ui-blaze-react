import type { TBlazeCentralConfiguration } from "./@types/TBlazeCentralConfiguration";
import { BlazeBaseAuthentificationProvider } from "./BlazeAuthentification/BlazeAuthentificationProvider";
import Logo from "./components/Layout/Logo";
import { SideBar } from "./components/Layout/SideBar/SideBar";
import { SideBarLink } from "./components/Layout/SideBar/SideBarLink";

const blazeCentralConfiguration : TBlazeCentralConfiguration= {
    blazeLayout: {
        Sidebar: SideBar,
        SidebarLink: SideBarLink,
        LogoComponent: Logo
    },
    // T type argument is the return type of whoami function that give type to all the middleware argument
    blazeAuthProvider: {
        authentificationPath: "/api/auth/whoami",
        authentificationProvider: new BlazeBaseAuthentificationProvider<unknown>
    }
}

export default blazeCentralConfiguration;