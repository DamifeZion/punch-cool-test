import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="bg-[#0C0C0C]">
         <ul className="container py-20">
            <ul className="flex flex-col-reverse max-sm:text-center max-lg:gap-10 max-sm:gap-16 sm:grid sm:grid-cols-3">
               <li className="space-y-5 text-[#CCCDCF] text-md max-sm:mx-auto max-w-[320px] 600:max-w-[300px] md:max-w-[290px]">
                  <img src="/navbar/logo.svg" className="max-sm:mx-auto" />
                  <p>
                     We take complex hiring processes - and simplify them.
                     Connecting you to the world’s highly qualified talent pool.
                  </p>
               </li>

               <li className="col-span-2 max-w-[779px] text-white !leading-[1.2] font-bold  text-4xl sm:text-center md:text-start lg:text-[54px]">
                  Connecting the right people to the right businesses.
               </li>
            </ul>

            <ul
               className="grid  gap-5 mt-[50px] grid-cols-2 max-500:gap-14 500:grid-cols-3 lg:grid-cols-6 
            [&>li]:uppercase [&>li>h3]:mb-4 [&>li>h3]:text-[#6C6D71] [&>li>h3]:text-sm [&>li>a]:text-white [&>li>a]:capitalize [&>li>a]:leading-loose [&>li>a]:block"
            >
               <li id="links-and-redirects" className="col-span-2">
                  <h3 className="">LINKS AND REDIRECTS</h3>

                  <div className="flex items-center gap-3 *:px-8 *:py-5 *:rounded-full *:bg-[#292B34] *:text-[#EDEFFF]">
                     <Button className="hover:bg-[#292B34]/90">Hire now</Button>

                     <Button className="hover:bg-[#292B34]/90">
                        Apply now
                     </Button>
                  </div>
               </li>

               <li id="platform">
                  <h3 className="">PLATFORM</h3>

                  <Link to="" className="relative w-fit mb-0.5">
                     Find Work
                     <span className="w-[120%] h-px absolute bottom-0 left-0 bg-gradient-to-r from-white/80 " />
                  </Link>
                  <Link to="">Find Talent</Link>
                  <Link to="">Articles</Link>
                  <Link to="">About Us</Link>
               </li>

               <li id="categories">
                  <h3 className="">Categories</h3>

                  <Link to="">Data Science</Link>
                  <Link to="">It & Networking</Link>
                  <Link to="">Web & Mobile</Link>
               </li>

               <li id="contact">
                  <h3 className="">Help</h3>

                  <Link to="">Contact Us</Link>
               </li>

               <li id="platform">
                  <h3 className="">Get In Touch @</h3>

                  <Link to="">Instagram</Link>
                  <Link to="">LinkedIn</Link>
                  <Link to="">Twitter</Link>
               </li>
            </ul>
         </ul>

         <ul id="copyright" className="relative">
            <span className="absolute h-0.5 w-full top-0 bg-gradient-to-r from-[#6C6D71]/60 to-[#0c0c0c] from-30% to-1% " />

            <div className="container max-lg:items-center py-3 flex justify-between flex-wrap gap-4 text-center text-sm *:max-[470px]:w-full">
               <p className="text-white">All rights reserved by Zwilt</p>

               <div className="max-[470px]:justify-between flex gap-5 lg:gap-7 *:underline *:text-[#6C6D71]">
                  <Link to="">Privacy Policy</Link>
                  <Link to="">Terms and Conditions</Link>
               </div>
            </div>
         </ul>
      </footer>
   );
};

export default Footer;
