import type { TBlazeCentralConfiguration } from "./@types/TBlazeCentralConfiguration";
import Logo from "./components/Layout/Logo";
import { SideBar } from "./components/Layout/SideBar/SideBar";
import { SideBarLink } from "./components/Layout/SideBar/SideBarLink";

export const blazeCentralConfiguration : TBlazeCentralConfiguration= {
    blazeLayout: {
        Sidebar: SideBar,
        SidebarLink: SideBarLink,
        LogoComponent: Logo
    }
}