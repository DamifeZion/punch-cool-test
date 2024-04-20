import { Carousel, CarouselContent } from "@/components/ui/carousel";
import OnboardSlide from "./OnboardSlide";
import OpenBookSlide from "./OpenBookSlide";
import LoopSlide from "./LoopSlide";

const WhyChooseZiltSlider = () => {
   return (
      <Carousel className="max-w-[1440px] mx-auto px-0">
         <CarouselContent className="ml-1 mr-6 py-10 h-fit lg:h-[652px]">
            <OnboardSlide />
            <OpenBookSlide />
            <LoopSlide />
         </CarouselContent>
      </Carousel>
   );
};

export default WhyChooseZiltSlider;
