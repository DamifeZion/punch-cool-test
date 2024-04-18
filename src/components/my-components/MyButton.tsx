import { MyButtonProps } from "@/types";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const MyButton = ({ className, ...props}: MyButtonProps) => {
   return (
      <Button
         className={cn("px-0 py-0 h-fit gap-4 relative bg-transparent hover:bg-transparent border text-[22px] text-[#202229] rounded-[30px] group/button ", className)}
         {...props}
      >
   
         <span className="size-[74px] flex items-center justify-center rounded-[30px] bg-[#202229] ">
            <img
               loading="lazy"
               src="/public/home/back-icon-blue.svg"
               className="fill-transparent"
            />
         </span>

         <p className="transition-all ease-linear duration-100 font-medium group-hover/button:-translate-x-0 ">Explore More</p>
      </Button>
   );
};

export default MyButton;
