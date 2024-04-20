import { IconType } from "react-icons";
import { ButtonProps } from "./components/ui/button";
import { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export interface NavbarSliceProps {
   showMobileMenu: boolean;
}

type Breakpoint = "xsm" | "sm" | "md" | "lg";
type QueryType = "min-width" | "max-width";

export interface UseMediaScreenProps {
   breakpoint: Breakpoint;
   queryType?: QueryType;
   customWidth?: string;
}

export interface LoadingIconProps extends IconType {
   className?: string;
}

export interface MyButtonProps extends ButtonProps {
   imgClassName?: string;
   text: string;
   textClassname?: string;
   btnClassName?: string;
}

export interface AccordionTriggerProps
   extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
   showIcon?: boolean;
}

export interface SpinnerNumberBlockProps
   extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
   spanClassName?: string;
   iClassName?: string;
   number: number;
}

export interface SliderListProps
   extends Omit<HTMLAttributes<HTMLLIElement>, "children"> {
   text: string;
   bulletClassName?: string;
}
