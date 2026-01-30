import type React from "react"
import type { SideBarLinkType } from "./SideBarLinkType"
import type { BaseButton } from "../../Buttons/BaseButtonType"
import type { Component } from "react"

type SideBarPropsType = {
    SideBarLinkComponent?: SideBarLinkType
    ButtonComponent?: BaseButton
    LogoComponent?: Component
    children?: React.ReactNode
}

export type SideBarType = (props: SideBarPropsType)=>React.ReactNode