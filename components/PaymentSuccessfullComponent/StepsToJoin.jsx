import Image from "next/image";
import React from "react";
import join1 from "@/public/asset/step1.png";
import join2 from "@/public/asset/step2.png";
import join3 from "@/public/asset/step3.png";
import join4 from "@/public/asset/step4.png";

import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});
const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

export default function StepsToJoin() {
  return (
    <div className=" bg-[#1b1d30] pt-[44px] flex flex-col items-center justify-center pb-[90px]">
      <h1 className={`${publicaSans.className} text-center w-10/12 text-[#d63970] text-[26px] font-semibold leading-[28.5px] tracking-[-0.408px]`}>
        Step-by-Step Guide
        <span className={`${publicaSans.className} text-[#eeeffc] text-[26px] font-semibold `}>
          {" "}
          to Participate in StarKid Competitions!
        </span>
      </h1>
      <div className=" flex flex-col justify-center items-center gap-[30px] mt-[44px]">
        <p className={`${caros.className} w-[80%] text-start text-[#eeeffc] text-base font-medium font-['Caros'] leading-tight`}>
          {" "}
          Follow these easy steps:
        </p>
        <Image src={join1} alt="join1" className=" w-[80%] " />
        <Image src={join2} alt="join1" className=" w-[80%] " />
        <Image src={join3} alt="join1" className=" w-[80%] " />
        <Image src={join4} alt="join1" className=" w-[80%] " />
      </div>
    </div>
  );
}
