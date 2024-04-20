import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SpinnerNumberBlockProps } from "@/types";
import GoodHandsAccordion from "./GoodHandsAccordion";

const SpinnerNumberBlock = ({
   className,
   spanClassName,
   iClassName,
   number,
   ...props
}: SpinnerNumberBlockProps) => {
   return (
      <div
         className={cn(
            "h-full bg-[#8BA4FD] rounded-t-[7px] flex items-center justify-center",
            className
         )}
         {...props}
      >
         <span
            className={cn(
               "size-8 inline-flex items-center justify-center border-[3px] rounded-full border-white border-r-transparent rotate-[-40deg] text-white italic relative",
               spanClassName
            )}
         >
            <i className={cn("rotate-[40deg]", iClassName)}>{number}</i>
         </span>
      </div>
   );
};

const GoodHands = () => {
   return (
      <div>
         <h1 className="max-lg:text-center max-lg:text-4xl max-w-[570px] text-pretty leading-[1.2] font-bold text-[#202229] lg:leading-snug lg:text-[54px]">
            How we ensure you’re in good hands.
         </h1>

         <div className="max-lg:gap-14 grid lg:grid-cols-2">
            <div id="good-hands-accordion" className="mt-7 text-[#202229]">
               <p className="max-w-[600px] my-7 text-lg text-center text-[#1E1515] lg:text-start lg:text-[22px]">
                  With our comprehensive screening process, we hand-pick highly
                  skilled candidates so you can onboard them in a matter of
                  days.
               </p>

               <GoodHandsAccordion />
            </div>

            <div
               id="image"
               className="max-w-[541px] w-full ml-auto flex flex-col"
            >
               <Avatar className="size-[234px]  relative lg:place-self-end lg:-bottom-8">
                  <AvatarImage src="/home/good-hands-woman-smile.png" />
               </Avatar>

               <div>
                  <div className="h-[64.6px] grid grid-cols-[61px_1fr] gap-3 items-center">
                     <SpinnerNumberBlock number={1} />

                     <p>Tell us something about yourself</p>
                  </div>

                  <div className="h-[64.6px] grid grid-cols-[61px_1fr] gap-3 items-center">
                     <SpinnerNumberBlock
                        number={2}
                        className="rounded-t-none"
                        spanClassName="opacity-60"
                     />

                     <p className="opacity-60">
                        Give a short brief about your experience
                     </p>
                  </div>

                  <div className="h-[64.6px] grid grid-cols-[61px_1fr] gap-3 items-center">
                     <SpinnerNumberBlock
                        number={3}
                        className="rounded-t-none"
                        spanClassName="opacity-60"
                     />

                     <p className="opacity-60">
                        Explain about good <br /> customer experience
                     </p>
                  </div>

                  <div className="h-[64.6px] grid grid-cols-[61px_1fr] gap-3 items-center">
                     <SpinnerNumberBlock
                        number={4}
                        className="rounded-t-none"
                        spanClassName="opacity-60"
                     />

                     <p className="opacity-60">
                        How to manage SOP of <br /> customers care?
                     </p>
                  </div>

                  <div className="h-[64.6px] grid grid-cols-[61px_1fr] gap-3 items-center">
                     <SpinnerNumberBlock
                        number={5}
                        className="rounded-t-none rounded-b-[7px]"
                        spanClassName="opacity-60"
                     />

                     <p className="opacity-60">
                        Tell us something about yourself
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GoodHands;
