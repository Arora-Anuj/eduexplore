import React from "react";
import { Inter, Poppins, Public_Sans } from "next/font/google";
import localFont from "next/font/local";

const publicaSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-publica",
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
const caros =  localFont({
  src:"../../public/fonts/Caros.otf"
})

export default function WhyJoin() {
  return (
    <>
      <div className=" flex flex-col min-w-full items-center justify-center my-10">
        <div className={`${publicaSans.className} mt-10 text-center px-3 `}>
          <p className="text-white text-[26px] md:text-[30px] font-semibold  leading-[30px]">
            StarKid is perfect for {" "}
          </p>
          <p className="text-[#d63970] text-[26px] md:text-[30px] font-semibold  leading-[30px]">
           those who want to:
          </p>
        </div>

        <div className={ ` ${caros.className} flex flex-col items-center justify-center gap-y-2 font-medium text-black my-10`}>
          <div className=" text-center flex items-center justify-center  w-[95vw] md:w-[60vw]  gap-2">

            <div className=" bg-[#00AFAA] px-2 py-1 rounded-lg flex-auto ">
              Showcase Talent
            </div>
            <div className=" bg-[#D73970] px-2 py-1 rounded-lg flex-auto">
              Get Feedback
            </div>
            <div className=" bg-[#FFC56F] px-2 py-1 rounded-lg flex-auto">
              {" "}
              Learn
            </div>
            <div className=" hidden md:flex items-center justify-center bg-[#FFC56F] px-2 py-1 rounded-lg flex-auto">
              Build Confidence
            </div>
            <div className="hidden md:flex items-center justify-center bg-[#00AFAA] px-2 py-1 rounded-lg flex-auto">
              {" "}
              Reward
            </div>
          </div>

          <div className="text-center flex items-center justify-center w-[95vw] md:hidden gap-2 ">
            <div className="  bg-[#FFC56F] px-2 py-1 rounded-lg flex-auto">
              Build Confidence
            </div>
            <div className="  bg-[#00AFAA] px-2 py-1 rounded-lg flex-auto">
              {" "}
              Reward
            </div>
            <div className=" bg-[#D73970] px-2 py-1 rounded-lg flex-auto">
              Challenges
            </div>
          </div>

          <div className=" text-center flex items-center justify-center w-[95vw] md:w-[60vw]  gap-2">
            <div className=" bg-[#D73970] px-2 py-1 rounded-lg flex-auto ">
              {" "}
              Grow
            </div>
            <div className=" bg-[#FFC56F] px-2 py-1 rounded-lg flex-auto ">
              Gain Regognition
            </div>
            <div className=" bg-[#00AFAA] px-2 py-1 rounded-lg flex-auto ">
              New Skills
            </div>
            <div className=" hidden md:flex items-center justify-center bg-[#D73970] px-2 py-1 rounded-lg flex-auto">
              Challenge Themselves
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
