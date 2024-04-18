import Navbar from "@/components/my-components/navbar/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import HeroForm from "@/forms/home/HeroForm";

const Home = () => {
   return (
      <section>
         <Navbar />

         <div className="container max-w-3xl mt-16">
            <p className="inline-block text-center  font-bold text-6xl">
               Finding the right fit{" "}
               <Avatar className="inline-block lg:size-[68px]">
                  <AvatarImage src="/home/hero-avatar.svg" />
               </Avatar>
               has never been easier.
            </p>

            <h4 className="mx-auto mt-5 text-center text-[22px] text-pretty lg:max-w-xl">
               With our rigorous pre-vetting process, you'll never have to worry
               about finding the ideal candidate ever again.
            </h4>

            <div className="mt-7">
               <HeroForm />
            </div>
         </div>
      </section>
   );
};

export default Home;
