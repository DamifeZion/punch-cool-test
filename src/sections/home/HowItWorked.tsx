import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const HowItWorked = () => {
   return (
      <div className="grid grid-cols-2">
         <div>
            <h1 className="max-w-sm text-[54px] leading-tight font-bold text-white">
               How it worked for Jason{" "}
               <Avatar className="inline-block size-[55px]">
                  <AvatarImage src="/home/jason.svg" />
               </Avatar>{" "}
               at{" "}
               <img
                  loading="lazy"
                  src="/public/home/groove.svg"
                  className="mt-3"
               />
            </h1>

            <p className="max-w-[460px] mt-10 text-[22px] text-[#CCCDCF]">
               Zwilt enabled us to deliver on time and they’ve been heavy
               hitters in our corner since.
            </p>

            <div
               id="btns"
               className="mt-[44px] flex items-center gap-4 *:rounded-[20px] *:bg-white *:size-[49px]"
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

         <div className="mt-20">
            <div className="grid grid-cols-[98px_1fr] gap-4">
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

            <p className="mt-14 max-w-[499px] text-[#CCCDCF] leading-loose">
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
