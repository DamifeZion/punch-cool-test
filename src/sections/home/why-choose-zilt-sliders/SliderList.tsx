import { cn } from "@/lib/utils";
import { SliderListProps } from "@/types";

const SliderList = ({ bulletClassName, text, ...props }: SliderListProps) => {
   return (
      <li
         className={cn("grid grid-cols-[14px_1fr] items-start gap-3  text-md 600:text-lg lg:text-[22px]")}
         {...props}
      >
         <div className="h-full pt-[14px]">
            <div
               className={cn(
                  "w-3.5 h-[4.5px] rounded-[21px] bg-[#50589F]",
                  bulletClassName
               )}
            />
         </div>

         {text}
      </li>
   );
};

export default SliderList;
