import type { BaseButton } from "../BaseButtonType";


export const BlazeButton : BaseButton = (props) => {
  return (
    <button
      {...{
        ...props,
        className: `${props.className}
        ${!(props.variant) ? "hover:brightness-110 active:bg-white active:text-red-700 bg-red-700 text-white " : "hover:brightness-130 border active:bg-red-700 active:text-white border-red-700  bg-white text-red-700 "}
        duration-[200ms] cursor-pointer px-3 py-1 rounded-xl shadow-lg
        `,
      }}
    />
  );
};
