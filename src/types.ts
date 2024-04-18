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
