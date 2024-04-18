import Navbar from "@/components/my-components/navbar/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
   return (
      <section>
         <Navbar />

         <div className="container max-w-3xl mt-16">
            <p className="inline-block items-center text-center  font-bold text-6xl">
               Finding the right fit {" "}
              
               <Avatar className="inline-block lg:size-[68px]">
                  <AvatarImage src="/home/hero-avatar.svg" />
               </Avatar>
               
               has never been easier.
            </p>
            
            <h4 className="mx-auto mt-5 text-center text-[22px] text-pretty lg:max-w-xl">
               With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.
            </h4>

            <div id="text-input" className="mx-auto mt-7 h-[74px] grid grid-cols-[1fr_74px] lg:max-w-xl">
               <Input className="h-full rounded-r-none border-2 border-r-transparent focus-visible:border-ring focus-visible:ring-transparent" />
               <Button size="icon" className="relative right-1.5 size-full bg-[#FFBE2E] hover:bg-[#FFBE2E]/90">
                  <img 
                     loading="lazy" 
                     src="/home/hero-form-icon.svg"
                     className="size-6"
                  />
               </Button>
            </div>
         </div>
      </section>
   );
};

export default Home;
