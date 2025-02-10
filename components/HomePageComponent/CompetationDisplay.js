import Image from "next/image";
import React from "react";
import comp from "@/public/asset/comp.png";
import comp1 from "@/public/asset/comp1.png";
import comp2 from "@/public/asset/comp2.png";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-publica",
});
export default function CompetationDisplay() {
  return (
    <div className=" bg-[#EEEFFC] xs:min-w-full md:min-w-[55%] md:h-[700px]">
      <div className={`text-center pt-20 md:mt-5 md:pt-0 mb-10 ${publicSans.className}`}>
        <div className="relative text-black text-[26px] font-bold font-['Publica Sans'] leading-normal">
          Explore Our Exciting{" "}
          <Image
            src={comp1}
            
            alt="comp"
            className=" md:hidden w-16 absolute -top-16 left-0 sm:left-[20%] "
          />
          <Image
            src={comp2}
            alt="comp"
            className="w-16 md:hidden  absolute -top-16 right-0 sm:right-[20%]"
          />
        </div>
        <div className="text-[#d63970] text-[26px] font-bold font-['Publica Sans'] leading-normal">
          Live Competitions
        </div>
      </div>

      <div className="w-srceen sm:w-full  flex items-center justify-center pb-10">
        <Image src={comp} alt="comp" className=" w-11/12 sm:w-[auto] sm:h-[500px]"  />
      </div>
    </div>
  );
}
