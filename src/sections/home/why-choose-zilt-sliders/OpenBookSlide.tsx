import { CarouselItem } from "@/components/ui/carousel";
import SliderList from "./SliderList";
import MyButton from "@/components/my-components/MyButton";
import { homeConstants } from "@/constants/home-conts";
import { useMediaScreen } from "@/hooks/shared/useMediaScreen";

const OpenBookSlide = () => {
   const {
      whyChooseZilt: {
         slider: {
            slideList: { slide2 },
         },
      },
   } = homeConstants;
   const xsSmallScreen = useMediaScreen({
      customBreakpoint: "380px",
      queryType: "max-width",
   });

   return (
      <CarouselItem className="basis-[98%] sm:basis-auto md:basis-[98%] flex items-center justify-center">
         <div className="max-md:px-6 max-lg:py-10 h-full flex flex-col-reverse gap-6  bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0_0_0/0.06)] backdrop-blur-[6.3px] md:grid md:grid-cols-2">
            <div
               id="slide-text-1"
               className="flex flex-col justify-center md:pl-10"
            >
               <h1 className="max-w-xs leading-tight  font-semibold text-4xl lg:text-[54px] lg:leading-[1.2]">
                  An open book.
               </h1>

               <ul className="mt-6 max-w-[591px] 600:mt-9">
                  {slide2.map((data, index) => (
                     <SliderList
                        key={index}
                        text={data}
                        bulletClassName="bg-[#FFBE2E]"
                     />
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
                  src={
                     xsSmallScreen
                        ? "/home/why-chhose-zilt-slide-2-mobile.png"
                        : "/home/why-chhose-zilt-slide-2.png"
                  }
                  className="h-full sm:h-auto md:w-10/12 lg:h-auto lg:max-w-[500px]"
               />
            </div>
         </div>
      </CarouselItem>
   );
};

export default OpenBookSlide;
