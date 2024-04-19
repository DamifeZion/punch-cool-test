import MyButton from "@/components/my-components/MyButton";

const JourneyTwo = () => {
   return (
      <div className="w-full h-[345px] mx-auto bg-[#fff7e1] overflow-hidden -skew-x-[3deg] -rotate-2 relative right-1">
         <div className="h-full pl-6 pr-9 skew-x-[3deg] rotate-2 grid grid-cols-2">
            <div id="journey-one-image-texts" className="grid grid-cols-[51px_1fr] gap-5 py-20">
               <img loading="lazy" src="/home/journey-2.svg" className="" />
               
               <div className="space-y-5">
                  <h1 className="max-w-[330px] text-[34px] leading-tight font-semibold">
                     Evaluate to your heart’s content.
                  </h1>
                  <p className="max-w-[320px]">Assess the candidate through work history, transparent tests and video interviews.</p>
                  <MyButton text="Browse More" />
               </div>
            </div>


            <div id="journey-one-image-group" className="flex justify-end relative -top-[22px]">
              <img loading="lazy" src="/home/journey-2-images.png" className="" />
            </div>
         </div>
      </div>
   );
};

export default JourneyTwo;
