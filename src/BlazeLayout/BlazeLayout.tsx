import type React from "react";
import type { PageComponent } from "../@types/TBlazeRoutesConfiguration"
import type { SideBarType } from "../components/Layout/SideBar/SideBarType";

export type BlazeLayoutPropsType = {
    Component: PageComponent
    Sidebar: SideBarType
}
export type BlazeLayoutType = (props: BlazeLayoutPropsType)=>React.ReactNode

export const BlazeLayout : BlazeLayoutType = (props) => {
    const {Component, Sidebar} = props;
    return (
        <div className="flex flex-row h-[100vh] w-full">
            <>
                <Sidebar />
            </>
            <div className="flex-1">
                <Component />
            </div>
        </div>
    )
}