import type { ButtonHTMLAttributes } from "react";
import type React from "react";

export type BaseButton = (props: React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {variant?: boolean})=>React.ReactNode