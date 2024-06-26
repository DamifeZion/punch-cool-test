import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { homeConstants } from "@/constants/home-conts";

const MultiTab = () => {
   const {
      multiTabs: { tabs, tabOneList },
   } = homeConstants;

   return (
      <Tabs
         defaultValue={tabs[0]}
         className="max-w-[920px] mx-auto py-4 px-4 bg-[#F8F8F8] rounded-lg 500:px-14"
      >
         <TabsList className="h-fit mx-auto w-full max-w-sm grid grid-cols-2  bg-[#F2F2F2]">
            {tabs.map((data, index) => (
               <TabsTrigger
                  key={index}
                  value={data}
                  className="data-[state=active]:bg-[#C7F4C2] data-[state=active]:text:[#202229] data-[state=active]:font-semibold h-11 text-xs  400:text-sm"
               >
                  {data}
               </TabsTrigger>
            ))}
         </TabsList>

         <div className="mt-5 pb-8">
            {/*=== FIRST TAB ===*/}
            <TabsContent
               value={tabs[0]}
               className="mt-0 flex justify-between gap-4  md:grid md:grid-cols-3"
            >
               {tabOneList.reverse().map((list, index) => (
                  <ul key={index}>
                     {list.map((data, i) => {
                        const defaultStyle =
                           "pt-4 text-[#959595] first:pt-0 w-fit  max-400:text-xs";
                        const activeClassName =
                           data === "MERN Stack Developer" ||
                           data === "Explore More"
                              ? defaultStyle + " font-semibold !text-[#202229]"
                              : defaultStyle;
                        return (
                           <li key={i} className={activeClassName}>
                              {data}
                           </li>
                        );
                     })}
                  </ul>
               ))}
            </TabsContent>

            {/*=== SECOND TAB ===*/}
            <TabsContent
               value={tabs[1]}
               className="mt-0 flex justify-between gap-6  md:grid md:grid-cols-3"
            >
               {tabOneList.reverse().map((list, index) => (
                  <ul key={index}>
                     {list.map((data, i) => {
                        const defaultStyle =
                           "pt-4 text-[#959595] first:pt-0 w-fit  max-400:text-xs";
                        const activeClassName =
                           data === "MERN Stack Developer" ||
                           data === "Explore More"
                              ? defaultStyle + " font-semibold !text-[#202229]"
                              : defaultStyle;
                        return (
                           <li key={i} className={activeClassName}>
                              {data}
                           </li>
                        );
                     })}
                  </ul>
               ))}
            </TabsContent>
         </div>
      </Tabs>
   );
};

export default MultiTab;
