import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/page/Home";
import Navbar from "./components/my-components/navbar/Navbar";

function App() {
   return (
      <section suppressHydrationWarning>
         <Router>
            <div className="px-6 backdrop-blur-lg sticky inset-0 pt-0.5 z-20">
               <Navbar />
            </div>

            <Routes>
               <Route index element={<Home />} />
            </Routes>
         </Router>
      </section>
   );
}

export default App;
