import React from "react";
import recom from "@/public/asset/recom.png";
import wh1 from "@/public/asset/wh1.png";
import wh2 from "@/public/asset/wh2.png";
import Image from "next/image";
import { Poppins, Public_Sans } from "next/font/google";
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-publica",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
export default function Recomendation() {
  return (
    <div className=" text-center">
      <div className={` my-10 ${publicSans.className}`}>
        <span className="text-white text-[26px] font-medium font-['Publica Sans'] leading-normal">
          Hear It from
        </span>
        <span className="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-normal">
          {" "}
          the Parents:
        </span>
        <div className="text-white text-[26px] font-medium font-['Publica Sans'] leading-normal">
          {" "}
          Their Stories, Their Trust!
        </div>
      </div>
      <div className=" min-w-full flex gap-10  flex-wrap items-center justify-evenly">
        <div className=" relative w-10/12 sm:w-[350px]">
          <Image src={wh1} alt="wh1" className=" w-full" />
          <Image
            src={recom}
            alt="recom"
            width={50}
            className="absolute -top-5 -right-5"
          />
        </div>
         <div className=" relative w-10/12 sm:w-[350px]">
          <Image src={wh2} alt="wh1" className=" w-full" />
          <Image
            src={recom}
            alt="recom"
            width={50}
            className="absolute -top-5 -right-5"
          />
        </div>
         <div className=" relative w-10/12 sm:w-[350px]">
          <Image src={wh2} alt="wh1" className=" w-full" />
          <Image
            src={recom}
            alt="recom"
            width={50}
            className="absolute -top-5 -right-5"
          />
        </div>
      </div>
      <button className={`${poppins.className} my-10 bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg`}>
        REGISTER NOW
      </button>
    </div>
  );
}
