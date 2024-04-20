import MyButton from "@/components/my-components/MyButton";

const JourneyOne = () => {
   return (
      <div className="w-full mx-auto bg-[#EDEFFF] overflow-hidden -skew-x-[3deg] -rotate-2 md:h-[345px]">
         <div className="h-full pl-6 pr-9 skew-x-[3deg] rotate-2 grid md:grid-cols-2">
            <div id="journey-one-image-texts" className="py-10 grid grid-cols-[51px_1fr] gap-5 md:py-14 lg:py-20">
               <img loading="eager" src="/home/journey-1.svg" className="" />
               
               <div className="space-y-5">
                  <h1 className="max-w-[445px] text-[34px] leading-tight font-semibold">
                     Find your next star performer.
                  </h1>
                  <p className="max-w-[320px]">Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>
                  <MyButton text="Join Now" />
               </div>
            </div>


            <div id="journey-one-image-group" className="max-md:hidden flex justify-end gap-6">
               <div id="1">
                  <div className="w-[220px] h-[240px] bg-white rounded-b-[20px]  relative -top-7 ">
                     <div className="w-full h-[141px] rounded-bl-[20px] bg-[#FFDACE]">
                        <img loading="eager" src="/home/journey-1-ruby.svg" className="h-full" />
                     </div>

                     <div className="px-6 mt-2">
                        <h3 className="text-lg font-medium">Ruby Developer</h3>
                        <p className="mt-4 text-xs">
                           Redwood City, California 7 years experience
                        </p>
                     </div>
                  </div>

                  <div className="w-[220px] h-[141px] bg-[#D8D2FF] rounded-[20px]  relative ">
                     <img loading="eager" src="/home/journey-1-indian.svg" className="h-full" />
                  </div>
               </div>


               <div id="2" className="relative -top-20 flex flex-col gap-6 max-lg:hidden">
                  <div className="w-[220px] h-[240px] bg-white rounded-b-[20px]">
                     <div className="w-full h-[141px] border bg-[#C8EFC4] relative">
                        <img src="/home/journey-1-system-ops.svg" className="absolute bottom-0"/>
                     </div>

                     <div className="px-6 mt-2">
                        <h3 className="text-lg font-medium">Ruby Developer</h3>
                        <p className="mt-4 text-xs">
                           Redwood City, California 7 years experience
                        </p>
                     </div>
                  </div>

                  <div className="w-[220px] h-[148px] bg-[#fddd8b] rounded-[20px]">
                     <img loading="eager" src="/home/journey-1-american.svg" className="h-full" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JourneyOne;
