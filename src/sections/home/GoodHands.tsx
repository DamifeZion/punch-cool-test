import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import { homeConstants } from "@/constants/home-conts";
import { useState } from "react";

const GoodHands = () => {
   const { howItWorks } = homeConstants;
   const [activeValue, setActiveValue] = useState(howItWorks[1]);

   return (
      <div className="grid grid-cols-2">
         <div>
            <div id="heading-&-intro">
               <h1 className="max-w-[570px] text-[54px] font-bold text-[#202229] leading-snug">
                  How we ensure you’re in good hands.
               </h1>

               <p className="max-w-[646px] mt-7 text-[22px] text-[#1E1515]">
                  With our comprehensive screening process, we hand-pick highly
                  skilled candidates so you can onboard them in a matter of
                  days.
               </p>
            </div>

            <div id="good-hands-accordion" className="mt-7 text-[#202229]">
               <Accordion
                  type="single"
                  collapsible
                  defaultValue={activeValue}
                  onValueChange={(value) => setActiveValue(value)}
                  className="grid gap-1"
               >
                  <AccordionItem
                     value={howItWorks[0]}
                     className="border px-5 rounded-[7px] shadow-sm"
                  >
                     <AccordionTrigger className="h-20 flex items-center justify-start gap-5">
                        <span className="size-[57px] flex items-center justify-center bg-[#ECECEC] rounded-full">
                           <img
                              loading="lazy"
                              src="/home/video-black.svg"
                              className="size-4"
                           />
                        </span>

                        <h4>
                           <b>Step 1:</b> {howItWorks[0]}
                        </h4>
                     </AccordionTrigger>

                     <AccordionContent className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex voluptatibus quisquam natus accusantium! Suscipit
                        sunt aspernatur praesentium quasi minus. Architecto.
                     </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                     value={howItWorks[1]}
                     className="border px-5 rounded-[7px] shadow-sm"
                  >
                     <AccordionTrigger className="h-20 flex items-center justify-start gap-5">
                        <span className="size-[57px] flex items-center justify-center bg-[#8BA4FD] rounded-full">
                           <img
                              loading="lazy"
                              src="/home/video-white.svg"
                              className="size-4"
                           />
                        </span>

                        <h4>
                           <b>Step 2:</b> {howItWorks[1]}
                        </h4>
                     </AccordionTrigger>

                     <AccordionContent className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat tempora quam distinctio rem illum velit neque
                        consequatur quisquam consectetur inventore.
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </div>
         </div>
      </div>
   );
};

export default GoodHands;
