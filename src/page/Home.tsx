import HeroForm from "@/forms/home/HeroForm";
import GoodHands from "@/sections/home/good-hands/GoodHands";
import HowItWorked from "@/sections/home/HowItWorked";
import MarketPlace from "@/sections/home/MarketPlace";
import MultiTab from "@/sections/home/MultiTab";
import JourneyOne from "@/sections/home/journey/JourneyOne";
import JourneyThree from "@/sections/home/journey/JourneyThree";
import JourneyTwo from "@/sections/home/journey/JourneyTwo";
import WhyChooseZiltSlider from "@/sections/home/why-choose-zilt-sliders/WhyChooseZiltSlider";
import FAQ from "@/sections/home/faq/FAQ";
import MyButton from "@/components/my-components/MyButton";
import Footer from "@/components/my-components/footer.tsx/Footer";
import HeroAvatar from "@/sections/home/HeroAvatar";

const Home = () => {
   return (
      <section>
         {/*=== SECTION ONE ===*/}
         <section id="1" className="relative pb-5 overflow-hidden lg:pb-10">
            <div className="container max-w-3xl mt-10 400:mt-14">
               <p className="text-4xl text-balanced text-center font-bold 400:text-5xl 500:text-6xl">
                  Finding the right fit{" "}
                  <span className="inline-block">
                     <HeroAvatar />
                  </span>
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

            <div
               id="gradient"
               className="relative bottom-0 mt-16 -rotate-[0.5deg]"
            >
               <img
                  src="/home/hero-diagonal-lines.svg"
                  loading="lazy"
                  className="w-full object-cover max-sm:h-[100px] max-lg:h-[120px]"
               />
            </div>

            <span id="right-separator" className="!border-r-[#EDEFFF]" />
         </section>

         {/*=== SECTION TWO ===*/}
         <section
            id="2"
            className="py-20 bg-[#EDEFFF] relative overflow-hidden sm:py-36"
         >
            <div id="market-place-main-content" className="container">
               <h1 className="max-w-4xl mx-auto font-bold text-center text-balance text-[45px] leading-tight md:text-[54px]">
                  Your one-stop marketplace for finding the talent your business
                  needs.
               </h1>

               <div className="mt-10 md:mt-24">
                  <MarketPlace />
               </div>

               <span id="right-separator" className="!border-r-[#202229]" />
            </div>
         </section>

         {/*=== SECTION THREE ===*/}
         <section id="3" className="py-36 bg-[#202229] relative ">
            <img
               loading="eager"
               src="/home/quotes.svg"
               className="absolute  w-[150px] right-1 -top-[3vw] -rotate-[3deg] md:w-[200px] 400:-top-[3.6vw] sm:-top-[4vw] md:-top-[3.8vw] lg:-top-[3.9vw] lg:right-5 lg:w-auto lg:-rotate-[2.5deg]"
            />

            <div id="how-work-main-content" className="container ">
               <HowItWorked />
            </div>
         </section>

         {/*=== SECTION FOUR ===*/}
         <section id="4" className="py-32 relative bg-white">
            <>
               {/* <div
                  id="left-color-blend"
                  className="w-full h-1/2 absolute -top-6 right-0 -z-10 bg-[#202229]"
               /> */}

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
         <section id="5" className="pb-16 relative bg-white lg:py-32">
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

         {/*=== SECTION SIX ===*/}
         <section
            id="6"
            className="py-8 relative bg-gradient-to-b from-white via-[#EDEFFF] via-100% overflow-hidden  lg:py-32"
         >
            <span
               id="left-bottom-color-blend"
               className="size-full bg-[#EDEFFF] absolute -bottom-24 left-0 -z-[1]"
            />

            <WhyChooseZiltSlider />

            <span id="right-separator" className="!border-r-[#F3F3F3]" />
         </section>

         {/*=== SECTION SEVEN ===*/}
         <section
            id="7"
            className="py-20 relative bg-[#F3F3F3] overflow-hidden sm:py-36 "
         >
            <h2 className="container text-4xl text-pretty text-center font-bold !leading-[1.4] 400:text-5xl lg:text-[54px]">
               Frequently asked questions
            </h2>

            <div className="my-16 pl-0.5">
               <FAQ />
            </div>

            <span id="right-separator" />
         </section>

         {/*=== SECTION NINE ===*/}
         <section
            id="8"
            className="relative text- bg-[#0C0C0C] py-6 px-5 overflow-hidden lg:p-10"
         >
            <div className="relative px-6 py-12 -skew-x-[2.5deg] -rotate-[2.8deg] bg-[#525AA0] lg:p-4 lg:h-[480px]">
               <div className="skew-x-[2.5deg] rotate-[2.5deg] h-full flex flex-col items-center justify-center gap-10">
                  <h1 className="max-w-[683px] text-center text-4xl text-white font-bold !leading-[1.3] 600:text-5xl md:text-[54px]">
                     Need a job done, and done well? Get started
                  </h1>

                  <MyButton
                     className="rotate-90 rounded-full size-[49px] md:size-[73px]"
                     imgClassName="md:size-6"
                     text=""
                  />
               </div>
            </div>
         </section>

         {/*=== SECTION TEN ===*/}
         <section id="10">
            <Footer />
         </section>
      </section>
   );
};

export default Home;
