import MyButton from "@/components/my-components/MyButton";

const JourneyTwo = () => {
   return (
      <div className="w-full mx-auto bg-[#fff7e1] overflow-hidden -skew-x-[3deg] -rotate-2 relative right-1 md:h-[345px]">
         <div className="h-full px-6 skew-x-[3deg] rotate-2 grid md:grid-cols-2 md:pr-9">
            <div
               id="journey-one-image-texts"
               className="py-10 grid grid-cols-[51px_1fr] gap-5 md:py-14 lg:py-20"
            >
               <img loading="lazy" src="/home/journey-2.svg" className="" />

               <div className="space-y-5">
                  <h1 className="max-w-[330px] text-[34px] leading-tight font-semibold">
                     Evaluate to your heart’s content.
                  </h1>
                  <p className="max-w-[320px]">
                     Assess the candidate through work history, transparent
                     tests and video interviews.
                  </p>
                  <MyButton text="Browse More" />
               </div>
            </div>

            <div
               id="journey-one-image-group"
               className="max-md:hidden flex justify-end relative max-lg:-top-[20px] lg:-top-[22px]"
            >
               <img
                  loading="eager"
                  src="/home/journey-2-images.png"
                  className="max-lg:h-[110%] relative -right-5"
               />
            </div>
         </div>
      </div>
   );
};

export default JourneyTwo;
