import { useMediaScreen } from "@/hooks/shared/useMediaScreen";
import MobileNavbar from "./MobileNavbar";
import { NavLink } from "react-router-dom";
import { routeConstants } from "@/constants/route-conts";

const Navbar = () => {
   const mobileScreen = useMediaScreen({ breakpoint: "lg" });
   const { home } = routeConstants;

   if (mobileScreen) {
      return <MobileNavbar />;
   }

   return (
      <nav className="container !max-w-screen-1xl mt-12 h-[61px] flex items-center justify-between bg-[#525AA0] text-[#FFFFFF] rounded-[15px]">
         <ul>
            <NavLink to={home}>
               <img src="/navbar/logo.svg" />
            </NavLink>
         </ul>

         <ul></ul>
      </nav>
   );
};

export default Navbar;
