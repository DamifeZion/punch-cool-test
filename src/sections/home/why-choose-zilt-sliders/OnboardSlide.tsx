import { CarouselItem } from "@/components/ui/carousel";
import SliderList from "./SliderList";
import MyButton from "@/components/my-components/MyButton";
import { homeConstants } from "@/constants/home-conts";

const OnboardSlide = () => {
   const {
      whyChooseZilt: {
         slider: {
            slideList: { slide1 },
         },
      },
   } = homeConstants;

   return (
      <CarouselItem className="basis-[98%] sm:basis-auto md:basis-[98%]">
         <div className="max-md:px-6 max-lg:py-10 h-full flex flex-col-reverse gap-6  bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0_0_0/0.06)] backdrop-blur-[6.3px] md:grid md:grid-cols-2">
            <div
               id="slide-text-1"
               className="flex flex-col justify-center md:pl-10"
            >
               <h1 className="max-w-[464px] leading-tight  font-semibold text-4xl lg:text-[54px] lg:leading-[1.2]">
                  Onboard without the risk.
               </h1>

               <ul className="mt-6 max-w-[591px] 600:mt-9">
                  {slide1.map((data, index) => (
                     <SliderList key={index} text={data} />
                  ))}
               </ul>

               <MyButton
                  text="Learn More"
                  btnClassName="mt-6 600:mt-9 600:px-5 600:size-[74px] 600:rounded-[30px] 600:hover:w-[250px]"
                  imgClassName="600:size-6"
                  textClassname="600:ml-3 600:text-[22px]"
               />
            </div>

            <div className="w-full h-full flex items-center justify-center">
               <img
                  loading="lazy"
                  src="/home/why-chhose-zilt-slide-1.png"
                  className="w-[95%] sm:w-[450px] md:w-full lg:max-w-[95%]"
               />
            </div>
         </div>
      </CarouselItem>
   );
};

export default OnboardSlide;
