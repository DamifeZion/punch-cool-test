import Navbar from "@/components/my-components/navbar/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import HeroForm from "@/forms/home/HeroForm";
import HowItWorked from "@/sections/home/HowItWorked";
import MarketPlace from "@/sections/home/MarketPlace";
import MultiTab from "@/sections/home/MultiTab";

const Home = () => {
   return (
      <section className="pb-10 overflow-hidden">
         <div className="container sticky inset-0 z-20">
            <Navbar />
         </div>

         {/*=== SECTION ONE ===*/}
         <section id="1">
            <div className="container max-w-3xl mt-16">
               <p className="inline-block text-center  font-bold text-6xl">
                  Finding the right fit{" "}
                  <Avatar className="inline-block w-[68px]">
                     <AvatarImage src="/home/hero-avatar.svg" />
                  </Avatar>
                  has never been easier.
               </p>

               <h4 className="mx-auto mt-5 text-center text-[22px] text-pretty lg:max-w-xl">
                  With our rigorous pre-vetting process, you'll never have to
                  worry about finding the ideal candidate ever again.
               </h4>

               <div className="mt-7">
                  <HeroForm />
               </div>
            </div>

            <div id="multi-tabs" className="container mt-10">
               <MultiTab />
            </div>

            <div className="relative -bottom-3 mt-16">
               <img
                  src="/home/hero-diagonal-lines.svg"
                  loading="lazy"
                  className="w-full"
               />
            </div>
         </section>

         {/*=== SECTION TWO ===*/}
         <section
            id="2"
            className="py-36 bg-[#EDEFFF] relative -rotate-2 skew-x-12"
         >
            <>
               <span
                  id="right-color-blend"
                  className="size-full absolute top-0 -right-1/2 -z-10 bg-inherit"
               />
               <span
                  id="left-color-blend"
                  className="size-full absolute top-0 -left-1/2 -z-10 bg-inherit"
               />
            </>

            {/* Reverse the skew and rotate on the parent for this child */}
            <div
               id="market-place-main-content"
               className="container z-10 rotate-2 -skew-x-12"
            >
               <h1 className="max-w-4xl mx-auto font-bold leading-tight text-center text-[50px]">
                  Your one-stop marketplace for finding the talent your business
                  needs.
               </h1>

               <div className="mt-[90px]">
                  <MarketPlace />
               </div>
            </div>
         </section>


         {/*=== SECTION THREE ===*/}
         <section id="3" className="py-36 bg-[#202229] relative -rotate-2 skew-x-12" >
            <>
               <span
                  id="right-color-blend"
                  className="size-full absolute top-0 -right-1/2 -z-10 bg-inherit"
               />

               <img loading="lazy" src="/home/quotes.svg" className="absolute top-0 right-5" />

               <span
                  id="left-color-blend"
                  className="size-full absolute top-0 -left-1/2 -z-10 bg-inherit"
               />

               <div
                  id="left-color-blend"
                  className="w-full h-2/3 absolute -bottom-[20%] -left-5 -z-10 bg-inherit  rotate-2 -skew-x-12"
               />               
            </>

            <div
               id="how-work-main-content"
               className="container z-10 rotate-2 -skew-x-12"
            >
               <HowItWorked />
            </div>
         </section>
      </section> 
   );
};

export default Home;
