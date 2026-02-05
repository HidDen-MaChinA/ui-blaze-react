import { SideBar } from "../components/Layout/SideBar/SideBar"
import type { SideBarType } from "../components/Layout/SideBar/SideBarType"

export type BlazeLayoutObjectConfigurationType = {
    Sidebar: SideBarType
}

export const BlazeLayoutObjectConfiguration : BlazeLayoutObjectConfigurationType = {
    Sidebar: SideBar
}
