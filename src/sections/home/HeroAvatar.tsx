import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion, Variants } from "framer-motion";

const HeroAvatar = () => {
   const movingImageVariants: Variants = {
      hidden: { translateX: 0 },
      visible: {
         translateX: ["1%", "18%", "0%", "-7%"],
         transition: {
            times: [0.5],
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 2,
         },
      },
   };

   return (
      <div className="relative">
         <Avatar className=" -translate-x-1.5 w-16 relative top-1 400:inline-block 400:w-[68px] sm:top-0">
            <AvatarImage loading="eager" src="/home/hero-avatar.svg" />
         </Avatar>

         <motion.div
            initial="hidden"
            animate="visible"
            variants={movingImageVariants}
            className="w-full mt-1.5 absolute -z-[1] inset-0 flex items-center justify-center rounded-full "
         >
            <img
               loading="eager"
               src="/home/jason.svg"
               className="w-10 h-9 object-cover border border-blue-600 rounded-full"
            />
         </motion.div>
      </div>
   );
};

export default HeroAvatar;
