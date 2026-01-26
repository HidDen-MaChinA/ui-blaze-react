import type React from "react";

export function SideBarLink(props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>){
    return(
        <div className="w-full">
            <a {...{...props, className: `${props.className||""} block p-3 text-md w-full h-full`}} />
        </div>
    )
}