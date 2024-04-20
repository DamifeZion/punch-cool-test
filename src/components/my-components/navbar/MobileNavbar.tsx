import { CgMenuLeft } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { navbarConstants } from "@/constants/navbar-const";
import { routeConstants } from "@/constants/route-conts";
import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNavbar = () => {
   const { home, login } = routeConstants;
   const { mainMenu } = navbarConstants;

   return (
      <nav className="container !max-w-screen-1xl mt-4 h-[61px] flex items-center justify-between bg-[#525AA0] text-[#FFFFFF] rounded-[15px]">
         <NavLink to={home}>
            <img src="/navbar/logo.svg" />
         </NavLink>

         <Sheet>
            <SheetTrigger asChild>
               <Button
                  size="icon"
                  className="bg-white text-[#202229] hover:bg-white/90 hover:text-[#202229]"
               >
                  <CgMenuLeft className="size-6" />
               </Button>
            </SheetTrigger>

            <SheetContent side="left" className="pb-0 flex flex-col">
               <NavLink to={home}>
                  <img src="/navbar/logo-black.svg" loading="eager" />
               </NavLink>

               <div className="mt-4 pb-6 flex flex-col flex-grow overflow-y-auto">
                  <ul id="text-links" className="space-y-4  text-xl">
                     {mainMenu.slice(0, 5).map((menu, index) => {
                        const defaultStyle =
                           "py-0.5 block ease-linear duration-100 font-medium hover:underline hover:underline-offset-4";

                        return (
                           <NavLink
                              key={index}
                              to={menu.href}
                              children={menu.text}
                              className={defaultStyle}
                           />
                        );
                     })}
                  </ul>

                  <ul
                     id="button-links"
                     className="pt-6 mt-auto flex flex-col gap-6"
                  >
                     {mainMenu.slice(5).map((menu, index) => {
                        const className =
                           menu.href === login
                              ? "h-fit w-full block ease-linear duration-100 rounded-lg border-2 text-xl hover:bg-transparent"
                              : "w-full py-6 bg-[#202229] text-[#fff] text-xl rounded-lg hover:bg-[#202229]/90";

                        return (
                           <NavLink key={index} to={menu.href}>
                              <Button
                                 variant={
                                    menu.href === login ? "ghost" : "default"
                                 }
                                 className={className}
                              >
                                 {menu.text}
                              </Button>
                           </NavLink>
                        );
                     })}
                  </ul>
               </div>
            </SheetContent>
         </Sheet>
      </nav>
   );
};

export default MobileNavbar;
