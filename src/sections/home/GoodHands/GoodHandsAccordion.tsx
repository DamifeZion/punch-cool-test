import { cn } from "@/lib/utils";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import { homeConstants } from "@/constants/home-conts";
import { useState } from "react";

const GoodHandsAccordion = () => {
   const { howItWorks } = homeConstants;
   const [active, setActive] = useState({
      value: howItWorks[1],
      img: "/home/video-white.svg",
   });

   const activeAccordion = (value: string) => {
      return active.value === value;
   };

   return (
      <Accordion
         type="single"
         collapsible
         defaultValue={active.value}
         onValueChange={(value) => {
            setActive((prev) => ({
               ...prev,
               value,
            }));
         }}
         className="grid gap-1"
      >
         <AccordionItem
            id="accodion-1"
            value={howItWorks[0]}
            className={cn("border px-5 rounded-[7px]", {
               "shadow-[0px_8px_30px_rgba(0_0_0/0.08)]": activeAccordion(
                  howItWorks[0]
               ),
            })}
         >
            <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
               <span
                  className={cn(
                     "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
                     {
                        "bg-[#8BA4FD]": activeAccordion(howItWorks[0]),
                     }
                  )}
               >
                  <img
                     loading="lazy"
                     src={
                        activeAccordion(howItWorks[0])
                           ? active.img
                           : "/home/video-black.svg"
                     }
                     className="size-4"
                  />
               </span>

               <h4>
                  <b>Step 1:</b> {howItWorks[0]}
               </h4>
            </AccordionTrigger>

            <AccordionContent className="mt-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
               voluptatibus quisquam natus accusantium! Suscipit sunt aspernatur
               praesentium quasi minus. Architecto.
            </AccordionContent>
         </AccordionItem>

         <AccordionItem
            id="accodion-2"
            value={howItWorks[1]}
            className={cn("border px-5 rounded-[7px]", {
               "shadow-xl": activeAccordion(howItWorks[1]),
            })}
         >
            <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
               <span
                  className={cn(
                     "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
                     {
                        "bg-[#8BA4FD]": activeAccordion(howItWorks[1]),
                     }
                  )}
               >
                  <img
                     loading="lazy"
                     src={
                        activeAccordion(howItWorks[1])
                           ? active.img
                           : "/home/video-black.svg"
                     }
                     className="size-4"
                  />
               </span>

               <h4>
                  <b>Step 2:</b> {howItWorks[1]}
               </h4>
            </AccordionTrigger>

            <AccordionContent className="mt-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
               tempora quam distinctio rem illum velit neque consequatur
               quisquam consectetur inventore.
            </AccordionContent>
         </AccordionItem>

         <AccordionItem
            id="accodion-3"
            value={howItWorks[2]}
            className={cn("border px-5 rounded-[7px]", {
               "shadow-xl": activeAccordion(howItWorks[2]),
            })}
         >
            <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
               <span
                  className={cn(
                     "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
                     {
                        "bg-[#8BA4FD]": activeAccordion(howItWorks[2]),
                     }
                  )}
               >
                  <img
                     loading="lazy"
                     src={
                        activeAccordion(howItWorks[2])
                           ? active.img
                           : "/home/video-black.svg"
                     }
                     className="size-4"
                  />
               </span>

               <h4>
                  <b>Step 3:</b> {howItWorks[2]}
               </h4>
            </AccordionTrigger>

            <AccordionContent className="mt-4">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Perspiciatis inventore deserunt magnam facilis saepe architecto
               tenetur facere exercitationem! Fuga, odit.
            </AccordionContent>
         </AccordionItem>

         <AccordionItem
            id="accodion-4"
            value={howItWorks[3]}
            className={cn("border px-5 rounded-[7px]", {
               "shadow-xl": activeAccordion(howItWorks[3]),
            })}
         >
            <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
               <span
                  className={cn(
                     "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
                     {
                        "bg-[#8BA4FD]": activeAccordion(howItWorks[3]),
                     }
                  )}
               >
                  <img
                     loading="lazy"
                     src={
                        activeAccordion(howItWorks[3])
                           ? active.img
                           : "/home/video-black.svg"
                     }
                     className="size-4"
                  />
               </span>

               <h4>
                  <b>Step 4:</b> {howItWorks[3]}
               </h4>
            </AccordionTrigger>

            <AccordionContent className="mt-4">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Perspiciatis inventore deserunt magnam facilis saepe architecto
               tenetur facere exercitationem! Fuga, odit.
            </AccordionContent>
         </AccordionItem>

         <AccordionItem
            id="accodion-5"
            value={howItWorks[4]}
            className={cn("border px-5 rounded-[7px]", {
               "shadow-xl": activeAccordion(howItWorks[4]),
            })}
         >
            <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
               <span
                  className={cn(
                     "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
                     {
                        "bg-[#8BA4FD]": activeAccordion(howItWorks[4]),
                     }
                  )}
               >
                  <img
                     loading="lazy"
                     src={
                        activeAccordion(howItWorks[4])
                           ? active.img
                           : "/home/video-black.svg"
                     }
                     className="size-4"
                  />
               </span>

               <h4>
                  <b>Step 5:</b> {howItWorks[4]}
               </h4>
            </AccordionTrigger>

            <AccordionContent className="mt-4">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Perspiciatis inventore deserunt magnam facilis saepe architecto
               tenetur facere exercitationem! Fuga, odit.
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   );
};

export default GoodHandsAccordion;
