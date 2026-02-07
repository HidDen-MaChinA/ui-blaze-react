import type React from "react"
import type { SideBarLinkType } from "./SideBarLinkType"
import type { Component } from "react"

type SideBarPropsType = {
    SideBarLinkComponent?: SideBarLinkType
    LogoComponent?: ()=>React.ReactNode
}

export type SideBarType = (props: SideBarPropsType)=>React.ReactNode