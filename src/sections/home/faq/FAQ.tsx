import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
   return (
      <Accordion type="single" collapsible className="w-full">
         <AccordionItem value="general">
            <AccordionTrigger className="relative py-0 border border-[#D6D6D6] *:w-full *:py-7 *:text-lg *:500:py-9 *:500:text-[22px]">
               <p className="w-full max-w-[163px] absolute border-r border-inherit max-md:hidden">
                  General
               </p>

               <p className="border" >
                  I want to work part-time, is that possible
               </p>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-5 text-md border border-t-0 border-[#D6D6D6] lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
               exercitationem.
            </AccordionContent>
         </AccordionItem>


         <AccordionItem value="average-projects">
            <AccordionTrigger className="relative py-0 border border-[#D6D6D6] *:w-full *:py-7 *:text-lg *:500:py-9 *:500:text-[22px]">
               <p className="border" >
                  How long are the average projects?
               </p>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-5 text-md border border-t-0 border-[#D6D6D6] lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
               exercitationem.
            </AccordionContent>
         </AccordionItem>


         <AccordionItem value="payment-works">
            <AccordionTrigger className="w-full relative py-0 border border-[#D6D6D6] bg-[#E8E8E8] *:w-full *:py-7 *:text-lg *:500:py-9 *:500:text-[22px]">
               <p>
                  How does the payment works?
               </p>

               <img src="/home/arrow-right-yellow.svg" className="absolute top-0 right-0 h-5" />
            </AccordionTrigger>

            <AccordionContent className="px-6 py-5 text-md border border-t-0 border-[#D6D6D6] lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
               exercitationem.
            </AccordionContent>
         </AccordionItem>



         <AccordionItem value="earn-1">
            <AccordionTrigger className="relative py-0 border border-[#D6D6D6] *:w-full *:py-7 *:text-lg *:500:py-9 *:500:text-[22px]">
               <p className="border" >
                  How much can I earn?
               </p>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-5 text-md border border-t-0 border-[#D6D6D6] lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
               exercitationem.
            </AccordionContent>
         </AccordionItem>

         

         <AccordionItem value="general-joining-process">
            <AccordionTrigger className="relative py-0 border border-[#D6D6D6] *:w-full *:py-7 *:text-lg *:500:py-9 *:500:text-[22px]">
               <p className="w-full max-w-[163px] absolute border-r border-inherit bg-[#E8E8E8] max-md:hidden">
                  General
               </p>

               <p className="left-[163px] w-full max-w-[250px] absolute border-r border-inherit max-xl:hidden">
                  Joining Process
               </p>

               <p className="border" >
                  I want to work part-time, is that possible
               </p>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-5 text-md border border-t-0 border-[#D6D6D6] lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
               exercitationem.
            </AccordionContent>
         </AccordionItem>



         <AccordionItem value="average-project-1">
            <AccordionTrigger className="relative py-0 border border-[#D6D6D6] *:w-full *:py-7 *:text-lg *:500:py-9 *:500:text-[22px]">
               <p className="border" >
                  How long are the average projects?
               </p>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-5 text-md border border-t-0 border-[#D6D6D6] lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
               exercitationem.
            </AccordionContent>
         </AccordionItem>



         <AccordionItem value="average-project-2">
            <AccordionTrigger className="relative py-0 border border-[#D6D6D6] *:w-full *:py-7 *:text-lg *:500:py-9 *:500:text-[22px]">
               <p className="border" >
                  How long are the average projects?
               </p>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-5 text-md border border-t-0 border-[#D6D6D6] lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
               exercitationem.
            </AccordionContent>
         </AccordionItem>



         <AccordionItem value="earn-2">
            <AccordionTrigger className="relative py-0 border border-[#D6D6D6] *:w-full *:py-7 *:text-lg *:500:py-9 *:500:text-[22px]">
               <p className="border" >
                  How much can I earn?
               </p>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-5 text-md border border-t-0 border-[#D6D6D6] lg:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
               exercitationem.
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   );
};

export default FAQ;
