import { Button } from "@/components/ui/button";
import Navbar from "@/components/my-components/navbar/Navbar";

const Home = () => {
   return (
      <section suppressHydrationWarning>
         <Navbar />

         <Button>Home</Button>
      </section>
   );
};

export default Home;
