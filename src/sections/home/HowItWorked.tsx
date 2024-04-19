import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
               <img loading="lazy" src="/public/home/groove.svg" className="mt-3" />
            </h1>

            <p className="max-w-[460px] mt-10 text-[22px] text-[#CCCDCF]">
               Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.
            </p>

            <div id="btns">
               
            </div>
         </div>
      </div>
   );
};

export default HowItWorked;
