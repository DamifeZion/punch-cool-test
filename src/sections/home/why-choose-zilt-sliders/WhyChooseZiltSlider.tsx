import {
   Carousel,
   CarouselApi,
   CarouselContent,
} from "@/components/ui/carousel";
import OnboardSlide from "./OnboardSlide";
import OpenBookSlide from "./OpenBookSlide";
import LoopSlide from "./LoopSlide";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const CarouselComponent = () => {
   const [api, setApi] = useState<CarouselApi>();
   const [currentSlide, setCurrentSlide] = useState(0);
   const [count, setCount] = useState<number>(0);
   const [translatePercentage, setTranslatePercentage] = useState(0);

   useEffect(() => {
      if (!api) {
         return;
      }

      const totalSlideItem = api.slideNodes();
      setCount(totalSlideItem.length);

      api.on("select", () => {
         setCurrentSlide(api.selectedScrollSnap() + 1);
      });
   }, [api]);

   useEffect(() => {
      if (currentSlide === 1) {
         return setTranslatePercentage(0);
      }

      setTranslatePercentage(((currentSlide - 1) / (count - 1)) * 200);
   }, [count, currentSlide]);

   return (
      <Carousel
         setApi={setApi}
         opts={{
            watchSlides(emblaApi, mutations) {
               console.log(emblaApi, mutations);
            },
         }}
         plugins={[Autoplay({ delay: 5000 })]}
         className="max-w-[1440px] mx-auto px-0 relative"
      >
         <CarouselContent className="ml-1 mr-6 py-10 h-fit lg:h-[652px]">
            <OnboardSlide />
            <OpenBookSlide />
            <LoopSlide />
         </CarouselContent>

         <div
            id="custom-scroll-bar-track"
            className="mx-6 my-10 flex items-center max-w-[630px] rounded-[25px] bg-[#E1E3F8] overflow-hidden shadow-md sm:mx-auto"
         >
            <button
               id="custom-scroll-bar"
               disabled={true}
               style={{
                  width: `calc(100% / 3)`,
                  transform: `translateX(${translatePercentage}%)`,
               }}
               className="h-2.5 rounded-[inherit] bg-[#202229] ease-linear duration-100 hover:cursor-not-allowed "
            />
         </div>
      </Carousel>
   );
};

export default CarouselComponent;
