import { routeConstants } from "./route-conts";

const { about, articles, contact, findTalent, findWork, login, join } =
   routeConstants;

export const navbarConstants = {
   mainMenu: [
      {
         href: findWork,
         text: "Find Work",
      },
      {
         href: findTalent,
         text: "Find Talent",
      },
      {
         href: articles,
         text: "Articles",
      },
      {
         href: about,
         text: "About Us",
      },
      {
         href: contact,
         text: "Contact Us",
      },
      {
         href: login,
         text: "Log In",
      },
      {
         href: join,
         text: "Join Now",
      },
   ],
};
