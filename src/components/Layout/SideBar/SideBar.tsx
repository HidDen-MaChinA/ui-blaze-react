import type React from "react"
import Logo from "../Logo"
import H1 from "../../Typography/H1"

type SideBarPropsType = {
    children?: React.ReactNode
}

export function SideBar(props: SideBarPropsType){
    return (
        <div className="flex flex-row h-[100vh] w-full">
            <div className="w-[150px] border-r-gray-200 border-r border-r-2 shadow-xl">
                <div className="w-full flex-col items-center flex justify-center">
                    <Logo />
                    <span className="text-2xl text-red-700 text-strong" style={{fontFamily: "master-of-custom"}}>Blaze UI</span>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}