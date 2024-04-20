import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const HowItWorked = () => {
   return (
      <div className="grid max-lg:gap-20 lg:grid-cols-2">
         <div>
            <h1 className="max-w-md max-lg:mx-auto max-lg:text-center text-[54px] leading-tight font-bold text-white lg:max-w-sm">
               How it worked for Jason{" "}
               <Avatar className="inline-block size-[55px]">
                  <AvatarImage src="/home/jason.svg" />
               </Avatar>{" "}
               at{" "}
               <img
                  loading="lazy"
                  src="/home/groove.svg"
                  className="mt-3 max-lg:mx-auto"
               />
            </h1>

            <p className="max-lg:mx-auto max-lg:text-center max-w-[460px] mt-10 text-[22px] text-[#CCCDCF]">
               Zwilt enabled us to deliver on time and they’ve been heavy
               hitters in our corner since.
            </p>

            <div
               id="btns"
               className="max-lg:justify-center mt-[44px] flex items-center gap-4 *:rounded-[20px] *:bg-white *:size-[49px]"
            >
               <Button className="hover:bg-[#F6F6F6]">
                  <img
                     loading="lazy"
                     src="/home/arrow-tertiary-1.svg"
                     className="rotate-180"
                  />
               </Button>

               <Button className="hover:bg-[#F6F6F6]">
                  <img loading="lazy" src="/home/arrow-tertiary-1.svg" />
               </Button>
            </div>
         </div>



         <div className="lg:mt-20 mx-auto">
            <div className="flex items-center justify-center gap-4 lg:grid lg:grid-cols-[98px_1fr]">
               <img
                  loading="lazy"
                  src="/home/groove-rounded.svg"
                  className="size-[98px]"
               />

               <div className="text-[#626367] font-medium">
                  <h1 className="font-semibold text-[34px] text-white">
                     Jason Makki
                  </h1>
                  <p>
                     Engineer at <span className="font-semibold">GROOVE</span>
                  </p>
                  <p>San Francisco</p>
               </div>
            </div>

            <p className="max-lg:text-center mt-14 max-w-[499px] text-[#CCCDCF] leading-loose">
               Zwilt enabled us to deliver on time and they’ve been heavy
               hitters in our corner since. Zwilt enabled us to deliver on time
               and they’ve been heavy hitters in our corner since.Zwilt enabled
               us to deliver on time and they’ve been heavy hitters.
            </p>
         </div>
      </div>
   );
};

export default HowItWorked;
