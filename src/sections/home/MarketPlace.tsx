import MyButton from "@/components/my-components/MyButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeConstants } from "@/constants/home-conts";
const MarketPlace = () => {
   const { itDevelopment, design } = homeConstants.marketPlace;

   return (
      <div className="flex flex-col gap-7">
         <div className="flex flex-col justify-betwee box-border lg:grid lg:grid-cols-2">
            <div id="text-cont" className="py-6 max-w-[350px] max-lg:mx-auto">
               <h1 className="text-2xl font-medium text-center lg:text-start">
                  Find Dev and IT professionals to scale your business.
               </h1>

               <div className="pt-5 flex justify-between items-center space-x-2 md:grid md:grid-cols-2 *:flex *:items-center *:gap-2 *:text-sm md:text:md">
                  <span>
                     <img loading="lazy" src="/home/medal.svg" />
                     <p>989 Skills</p>
                  </span>

                  <span>
                     <img loading="lazy" src="/home/grid.svg" />
                     <p>45 Sub-Categories</p>
                  </span>
               </div>
            </div>

            {/*  */}
            <Card
               id="card"
               className="max-w-[740px] w-full py-[18px] px-4 rounded-sm shadow-none sm:mx-auto lg:px-7"
            >
               <CardHeader className="px-0 py-0">
                  <CardTitle className="font-medium text-sm md:text-md">
                     IT & Development
                  </CardTitle>                  
               </CardHeader>

               <div className="overflow-x-auto pr-0">
                  <CardContent className="pt-2 px-0 pb-0 flex gap-4">
                     {itDevelopment.map((data, index) => (
                        <div
                           key={index}
                           className="w-fit space-y-2 flex flex-col items-center"
                        >
                           <span className="size-20 flex items-center justify-center bg-[#F6F6F6] rounded-full">
                              <img
                                 loading="lazy"
                                 src={data.image}
                                 className="size-10"
                              />
                           </span>

                           <p className="font-semibold text-center">
                              {data.text}
                           </p>
                        </div>
                     ))}

                     <div className="w-fit text-center space-y-2">
                        <span className="size-20 flex items-center justify-center bg-[#F6F6F6] rounded-lg">
                           <img
                              loading="lazy"
                              src="/home/arrow-primary.svg"
                              className="size-7"
                           />
                        </span>
                     </div>
                  </CardContent>
               </div>
            </Card>
         </div>




         {/*=== Section TWO ===*/}
         <div className="flex flex-col justify-between box-border  lg:grid lg:grid-cols-2">
            <div id="text-cont" className="py-6 lg:max-w-[350px] max-lg:mx-auto">
               <h1 className="max-w-[350px] mx-auto text-2xl font-medium text-center lg:text-start">
                  Explore Creative individuals with a keen eye for detail.
               </h1>

               <div className="pt-5 flex justify-between items-center gap-6 space-x-2 lg:grid lg:grid-cols-2 *:flex *:items-center *:gap-2 *:text-sm md:text:md">
                  <span>
                     <img loading="lazy" src="/home/medal.svg" />
                     <p>989 Skills</p>
                  </span>

                  <span>
                     <img loading="lazy" src="/home/grid.svg" />
                     <p>45 Sub-Categories</p>
                  </span>

                  <span className="!ml-0 lg:mt-2">
                     <img loading="lazy" src="/home/badge.svg" />
                     <p>1011 Profiles</p>
                  </span>
               </div>
            </div>

            {/*  */}
            <Card
               id="card"
               className="max-w-[740px] w-full py-[18px] px-4 rounded-sm shadow-none sm:mx-auto lg:px-7"
            >
               <CardHeader className="px-0 py-0">
                  <CardTitle className="font-medium text-sm lg:text-md">
                     Design & Creative
                  </CardTitle>
               </CardHeader>

               <div className="overflow-x-auto">
               <CardContent className="pt-2 px-0 pb-0 flex gap-4">
                     <div className="w-fit text-center space-y-2">
                        <span className="size-20 flex items-center justify-center bg-[#F6F6F6] rounded-lg">
                           <img
                              loading="lazy"
                              src="/home/arrow-primary.svg"
                              className="size-7 rotate-180"
                           />
                        </span>
                     </div>

                     {design.map((data, index) => (
                        <div
                           key={index}
                           className="w-fit space-y-2 flex flex-col items-center"
                        >
                           <span className="size-20 flex items-center justify-center bg-[#F6F6F6] rounded-full">
                              <img
                                 loading="lazy"
                                 src={data.image}
                                 className="size-10"
                              />
                           </span>

                           <p className="font-semibold text-center">
                              {data.text}
                           </p>
                        </div>
                     ))}
                  </CardContent>
               </div>
            </Card>
         </div>

         {/*=== OTHERS ===*/}
         <div className="max-lg:max-w-[750px] w-full place-self-center flex flex-wrap-reverse gap-8 items-center justify-between lg:grid lg:grid-cols-2">
            <div
               id="text-cont"
               className="max-w-[250px] w-full flex items-center gap-3 text-[22px]"
            >
               <MyButton
                  text="Explore More"
                  btnClassName="px-5 size-[74px] rounded-[30px] hover:w-[250px]"
                  imgClassName="size-6"
                  textClassname="ml-3 text-[22px]"
               />
            </div>


            
            <div
               id="card"
               className="items-start rounded-sm shadow-none lg:max-w-[750px] lg:w-full"
            >
               <p className="font-medium text-[22px]">
                  <button>
                     <strong className="cursor-pointer hover:underline hover:underline-offset-4">
                        {" "}
                        30 more
                     </strong>
                  </button>{" "}
                  <span className="font-normal">to explore</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default MarketPlace;
