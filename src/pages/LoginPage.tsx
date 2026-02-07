import type { BlazeBaseButton } from "../BlazeButtons/BlazeBaseButtonType";
import { BlazeButton } from "../BlazeButtons/BlazeButtons/BlazeButton";
import { BlazeBaseDynamicForm } from "../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../BlazeForm/DynamiqueInputBase";
import Logo from "../components/Layout/Logo";
import H4 from "../components/Typography/H4";

export function LoginPage(){
    return (
        <div className="w-full h-[100vh] bg-red-800 flex justify-center items-center">
            <div className="shadow-xl border bg-white border-gray-100 rounded-2xl px-3 py-5 w-[350px]">
                <div className="flex flex-col items-center">
                    <Logo />
                      <span
                        className="text-2xl text-red-700 text-strong"
                        style={{ fontFamily: "master-of-custom" }}
                      >
                        Blaze UI
                      </span>
                </div>
                <BlazeBaseDynamicForm
                    formStructure={[
                        {
                            label: "email",
                            type: DynamiqueInputType._text
                        },
                        {
                            label: "password",
                            type: DynamiqueInputType._password
                        }
                    ]} 
                    customButton={
                        {
                            Component: Button,
                            text: "Login"
                        }
                    }
                />
            </div>
        </div>
    )
}

const Button : BlazeBaseButton = (props)=>{
    return(
        <button {...{...props}} className="px-2 bg-white border border-red-500 text-red-500 rounded-xl py-1 w-full" />
    )
}
