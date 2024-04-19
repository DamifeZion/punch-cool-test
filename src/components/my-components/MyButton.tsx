import { MyButtonProps } from "@/types";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const MyButton = ({
   text,
   textClassname,
   imgClassName,
   btnClassName,
   ...props
}: MyButtonProps) => {
   return (
      <Button
         className={cn(
            "group px-4 size-[49.5px] flex items-center rounded-[30px] relative hover:w-[164px] hover:justify-end  transition-all ease-linear duration-300",
            btnClassName
         )}
         {...props}
      >
         <img
            loading="lazy"
            src="/home/arrow-secondary.svg"
            className={cn("size-[16px]", imgClassName)}
         />

         <p
            className={cn(
               "ml-3 text-sm text-[#202229] transition-all ease-linear duration-300 absolute left-full group-hover:left-5 group-hover:ml-0 group-hover:-translate-x-0 group-hover:text-white",
               textClassname
            )}
         >
            {text}
         </p>
      </Button>
   );
};

export default MyButton;
