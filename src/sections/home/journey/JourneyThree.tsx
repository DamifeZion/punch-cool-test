import MyButton from "@/components/my-components/MyButton";

const JourneyThree = () => {
   return (
      <div className="w-full h-[345px] mx-auto bg-[#F3F3F3] overflow-hidden -skew-x-[3deg] -rotate-2 relative right-1">
         <div className="h-full pl-6 pr-9 skew-x-[3deg] rotate-2 grid grid-cols-2">
            <div id="journey-one-image-texts" className="grid grid-cols-[51px_1fr] gap-5 py-20">
               <img loading="lazy" src="/public/home/journey-3.svg" className="" />
               
               <div className="space-y-5">
                  <h1 className="max-w-[276px] text-[34px] leading-tight font-semibold">
                     Start building your team
                  </h1>
                  <p className="max-w-[320px]">Assess the candidate through work history, transparent tests and video interviews.</p>
                  <MyButton text="Join Now" />
               </div>
            </div>


            <div id="journey-one-image-group" className="flex justify-end relative -top-[22px]">
              <img loading="lazy" src="/home/journey-3-images.png" className="" />
            </div>
         </div>
      </div>
   );
};

export default JourneyThree;
