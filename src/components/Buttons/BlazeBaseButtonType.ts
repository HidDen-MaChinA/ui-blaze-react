import type { ButtonHTMLAttributes } from "react";
import type React from "react";

export type BlazeBaseButton = (
  props: React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { variant?: boolean, icon?: string }
) => React.ReactNode;
