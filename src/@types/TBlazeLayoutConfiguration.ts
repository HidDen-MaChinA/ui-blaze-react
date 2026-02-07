import type React from "react"
import type { SideBarLinkType } from "../components/Layout/SideBar/SideBarLinkType"
import type { SideBarType } from "../components/Layout/SideBar/SideBarType"

export type TBlazeLayoutObjectConfiguration = {
    Sidebar?: SideBarType
    SidebarLink?: SideBarLinkType
    LogoComponent?: ()=>React.ReactNode
}
