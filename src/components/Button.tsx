import type { BlazeBaseButtonType } from "../BlazeButtons/BlazeBaseButtonType";
import { BlazeBaseButton } from "../BlazeButtons/BlazeButtons/BlazeBaseButton";

export const AppButton : BlazeBaseButtonType = (props)=>{
    return (
      <BlazeBaseButton
        {...{
          ...props,
          className: `${
            props.variant
              ? "w-full bg-white border border-red-700 text-red-700 active:bg-red-700 active:text-white"
              : "w-full bg-red-700 border border-red-700 text-white active:bg-white active:text-red-700"
          }`,
        }}
      />
    );
}