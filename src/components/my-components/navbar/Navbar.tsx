import { useMediaScreen } from "@/hooks/shared/useMediaScreen";
import MobileNavbar from "./MobileNavbar";
import { NavLink } from "react-router-dom";
import { routeConstants } from "@/constants/route-conts";
import { Button } from "@/components/ui/button";
import { navbarConstants } from "@/constants/navbar-const";

const Navbar = () => {
   const mobileScreen = useMediaScreen({ breakpoint: "lg" });
   const { home, login, findTalent, findWork } = routeConstants;
   const { mainMenu } = navbarConstants;

   if (mobileScreen) {
      return <MobileNavbar />;
   }

   return (
      <nav className="container !max-w-screen-1xl mt-9 h-[61px] flex items-center justify-between bg-[#525AA0] text-[#FFFFFF] rounded-[15px]">
         <ul>
            <NavLink to={home}>
               <img src="/navbar/logo.svg" />
            </NavLink>
         </ul>

         <ul id="text-links" className="space-x-7 ">
            {mainMenu.slice(0, 5).map((menu, index) => {
               const defaultStyle =
                  "py-0.5 ease-linear duration-100 hover:underline hover:underline-offset-4";
               const className =
                  menu.href === findTalent || menu.href === findWork
                     ? `${defaultStyle} font-black`
                     : defaultStyle;

               return (
                  <NavLink
                     key={index}
                     to={menu.href}
                     children={menu.text}
                     className={className}
                  />
               );
            })}
         </ul>

         <ul id="button-links" className="space-x-6">
            {mainMenu.slice(5).map((menu, index) => {
               const className =
                  menu.href === login
                     ? "h-fit py-0.5 px-0.5 rounded-none ease-linear duration-100 hover:bg-transparent hover:text-[#fff] hover:border-b-2"
                     : "bg-[#fff] text-[#202229] rounded-lg hover:bg-[#FFFFFF]/90";

               return (
                  <NavLink key={index} to={menu.href}>
                     <Button
                        variant={menu.href === login ? "ghost" : "default"}
                        className={className}
                     >
                        {menu.text}
                     </Button>
                  </NavLink>
               );
            })}
         </ul>
      </nav>
   );
};

export default Navbar;
