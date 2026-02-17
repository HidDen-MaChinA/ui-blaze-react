import type { TBlazeCentralConfiguration } from "./@types/TBlazeCentralConfiguration";
import { BlazeBaseAuthentificationProvider } from "./BlazeAuthentification/BlazeAuthentificationProvider";
import Logo from "./components/Layout/Logo";
import { SideBar } from "./components/Layout/SideBar/SideBar";
import { SideBarLink } from "./components/Layout/SideBar/SideBarLink";
import { TableBody } from "./components/Table/TableBody";
import { TableHead } from "./components/Table/TableHead";

const blazeCentralConfiguration : TBlazeCentralConfiguration= {
    blazeLayout: {
        Sidebar: SideBar,
        SidebarLink: SideBarLink,
        LogoComponent: Logo,
        sideBarLinksObjects: [
            {label: "Forms", path: "/forms"},
            {label: "Customers", path: "/customers"},
            {label: "Tables", path: "/tables"},
        ]
    },
    // T type argument is the return type of whoami function that give type to all the middleware argument
    blazeAuthProvider: {
        authentificationPath: "/api/auth/whoami",
        authentificationProvider: new BlazeBaseAuthentificationProvider<unknown>
    },
    blazeTables: {
        TBody: TableBody,
        Thead: TableHead,
    }

}

export default blazeCentralConfiguration;