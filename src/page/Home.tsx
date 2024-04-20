import Navbar from "@/components/my-components/navbar/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import HeroForm from "@/forms/home/HeroForm";
import GoodHands from "@/sections/home/GoodHands/GoodHands";
import HowItWorked from "@/sections/home/HowItWorked";
import MarketPlace from "@/sections/home/MarketPlace";
import MultiTab from "@/sections/home/MultiTab";
import JourneyOne from "@/sections/home/journey/JourneyOne";
import JourneyThree from "@/sections/home/journey/JourneyThree";
import JourneyTwo from "@/sections/home/journey/JourneyTwo";

const Home = () => {
   return (
      <section className="pb-10 overflow-hidden">
         <div className="container sticky inset-0 z-20">
            <Navbar />
         </div>

         {/*=== SECTION ONE ===*/}
         <section id="1">
            <div className="container max-w-3xl mt-10 400:mt-14">
               <p className="text-4xl text-balanced text-center font-bold 400:text-5xl 500:text-6xl">
                  Finding the right fit{" "}
                  <Avatar className="hidden  w-16 relative top-1 400:inline-block 400:w-[68px] sm:top-0">
                     <AvatarImage loading="eager" src="/home/hero-avatar.svg" />
                  </Avatar>
                  has never been easier.
               </p>

               <h4 className="max-w-xl mx-auto mt-5 text-center text-md 400:text-lg 500:text-[22px] sm:text-pretty ">
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

            <div id="gradient" className="relative -bottom-3 mt-16">
               <img
                  src="/home/hero-diagonal-lines.svg"
                  loading="lazy"
                  className="w-full object-cover max-sm:h-[100px] max-lg:h-[120px]"
               />
            </div>
         </section>

         {/*=== SECTION TWO ===*/}
         <section
            id="2"
            className="py-20 bg-[#EDEFFF] relative -rotate-2 skew-x-12 sm:py-36"
         >
            <>
               <span
                  id="right-color-blend"
                  className="size-full absolute top-0 -right-2/3 -z-10 bg-inherit"
               />
               <span
                  id="left-color-blend"
                  className="size-full absolute top-0 -left-2/3 -z-10 bg-inherit"
               />
            </>

            {/* Reverse the skew and rotate on the parent for this child */}
            <div
               id="market-place-main-content"
               className="container z-10 rotate-2 -skew-x-12"
            >
               <h1 className="max-w-4xl mx-auto font-bold text-center text-balance text-[45px] leading-tight md:text-[50px]">
                  Your one-stop marketplace for finding the talent your business
                  needs.
               </h1>

               <div className="mt-10 md:mt-24">
                  <MarketPlace />
               </div>
            </div>
         </section>

         {/*=== SECTION THREE ===*/}
         <section
            id="3"
            className="py-36 bg-[#202229] relative -rotate-2 skew-x-12"
         >
            <>
               <span
                  id="right-color-blend"
                  className="size-full absolute top-0 -right-1/2 -z-10 bg-inherit"
               />

               <img
                  loading="lazy"
                  src="/home/quotes.svg"
                  className="absolute top-0 w-[200px] -right-28 lg:right-5 lg:w-auto"
               />

               <span
                  id="left-color-blend"
                  className="size-full absolute top-0 -left-2/3 -z-10 bg-inherit"
               />

               <div
                  id="right-color-blend"
                  className="w-1/2 h-1/2 absolute -bottom-24 right-0 -z-10 bg-inherit "
               />
            </>

            <div
               id="how-work-main-content"
               className="container z-10 rotate-2 -skew-x-12"
            >
               <HowItWorked />
            </div>
         </section>

         {/*=== SECTION FOUR ===*/}
         <section id="4" className="py-32 relative bg-white">
            <>
               <div
                  id="left-color-blend"
                  className="w-full h-1/2 absolute -top-6 right-0 -z-10 bg-[#202229]"
               />

               <img
                  loading="lazy"
                  src="/home/good-hands-top-line.svg"
                  className="mt-7 w-full absolute top-0 left-0 "
               />
            </>

            <div className="container mt-16 lg:mt-36">
               <GoodHands />
            </div>
         </section>

         {/*=== SECTION FIVE ===*/}
         <section id="4" className="py-32 relative bg-white">
            <h1 className="text-center text-5xl text-pretty font-bold lg:text-[54px]">
               Start your journey today.
            </h1>

            <div id="journeys" className="mt-16 flex flex-col ">
               <div className="container space-y-8">
                  <JourneyOne />
                  <JourneyTwo />
                  <JourneyThree />
               </div>
            </div>
         </section>


         <section>

         </section>
      </section>
   );
};

export default Home;
