import { Carousel, CarouselContent } from "@/components/ui/carousel";
import OnboardSlide from "./OnboardSlide";
import OpenBookSlide from "./OpenBookSlide";
import LoopSlide from "./LoopSlide";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

const CarouselComponent = () => {
   const carouselRef = useRef<HTMLDivElement>(null);
   const [numOfCarouselItems, setNumOfCarouselItems] = useState<
      number | undefined
   >(0);

   useEffect(() => {
      const itemCount = carouselRef.current?.childNodes.length;
      setNumOfCarouselItems(itemCount);
   }, [numOfCarouselItems]);

   return (
      <Carousel
         opts={{
            watchSlides(emblaApi, mutations) {
               console.log(emblaApi, mutations);
            },
         }}
         plugins={[Autoplay({ delay: 5000 })]}
         className="max-w-[1440px] mx-auto px-0 relative"
      >
         <CarouselContent
            ref={carouselRef}
            className="ml-1 mr-6 py-10 h-fit lg:h-[652px]"
         >
            <OnboardSlide />
            <OpenBookSlide />
            <LoopSlide />
         </CarouselContent>

         <div className="mx-6 my-10 flex items-center max-w-[630px] rounded-[25px] bg-[#E1E3F8] overflow-hidden shadow-md sm:mx-auto">
            <button
               style={{ width: `calc(100% / ${numOfCarouselItems})` }}
               className="h-2.5 rounded-[inherit] bg-[#202229] translate-x-[0%]"
            />
         </div>
      </Carousel>
   );
};

export default CarouselComponent;
