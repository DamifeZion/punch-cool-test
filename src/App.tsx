import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/page/Home";

function App() {
   return (
      <section suppressHydrationWarning>
         <Router>
            <Routes>
               <Route index element={<Home />} />
            </Routes>
         </Router>
      </section>
   );
}

export default App;
