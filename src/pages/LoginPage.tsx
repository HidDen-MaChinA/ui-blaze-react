import type { BlazeBaseButtonType } from "../BlazeButtons/BlazeBaseButtonType";
import { BlazeBaseButton} from "../BlazeButtons/BlazeButtons/BlazeBaseButton";
import { BlazeBaseDynamicForm } from "../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../BlazeForm/DynamiqueInputBase";
import { AppButton } from "../components/Button";
import Logo from "../components/Layout/Logo";
import H4 from "../components/Typography/H4";

export function LoginPage(){
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="shadow-xl border bg-white border-red-200 rounded-2xl px-3 py-5 w-[350px]">
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
                            Component: AppButton,
                            variant:true,
                            text: "Login"
                        }
                    }
                />
            </div>
        </div>
    )
}

