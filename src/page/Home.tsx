import Navbar from "@/components/my-components/navbar/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
   return (
      <section>
         <Navbar />

         <div className="container max-w-2xl mt-16">
            <h1 className="inline-block font-semibold text-6xl">
               Finding the right fit {" "}
               <figure>
                  <Avatar className="lg:size-[68px]">
                     <AvatarImage src="/home/hero-avatar.svg" />
                  </Avatar>
               </figure>
               
               has never been easier.
            </h1>
            
            <h4 className="mt-5 text-center text-[22px] text-pretty lg:max-w-[95%]">
               With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.
            </h4>

            <div id="text-input">

            </div>
         </div>
      </section>
   );
};

export default Home;
