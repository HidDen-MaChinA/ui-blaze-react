import Logo from "../Logo"
import { SideBarLink } from "./SideBarLink"
import type { SideBarType } from "./SideBarType"


export const SideBar : SideBarType = (props) => {
    return (
        <div className="flex flex-row h-[100vh] w-full">
            <div className="w-[150px] border-r-gray-200 boorder-r border-r-2 shadow-xl">
                <div className="flex flex-col h-full justify-between">
                    <div className="w-full h-[150px] overflow-hidden">
                        <div className="w-full h-full bg-red-700">
                            <div className="h-[145px] rounded-br-[50px] rounded-bl-[10px] bg-orange-600">
                                <div className="w-full py-3 bg-white rounded-bl-[20px] rounded-br-[75px] flex-col items-center flex justify-center">
                                    <Logo />
                                    <span className="text-2xl text-red-700 text-strong" style={{fontFamily: "master-of-custom"}}>Blaze UI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className="bg-red-700 flex-1">
                            <SideBarLink className="text-white">Analytics</SideBarLink>
                        </div>
                    </div>
                    <div>
                        profile
                    </div>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

