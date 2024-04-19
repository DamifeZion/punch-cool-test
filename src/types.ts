import { IconType } from "react-icons";
import { ButtonProps } from "./components/ui/button";

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
