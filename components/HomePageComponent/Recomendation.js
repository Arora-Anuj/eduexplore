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
      <div
        className={` my-10 ${publicSans.className} leading-[24.5px] tracking-[-0.41px]`}
      >
        <span className="text-white text-[26px] font-semibold ">
          Hear It from
        </span>
        <span className="text-[#d63970] text-[26px] font-semibold ">
          {" "}
          the Parents:
        </span>
        <div className="text-white text-[26px] font-semibold ">
          {" "}
          Their Stories, Their Trust!
        </div>
      </div>
      <div className="w-full flex gap-2  flex-wrap items-center justify-evenly">
        <Image src={wh1} alt="wh1" width={253} height={186} />
        {/* <div className=" relative w-10/12 sm:w-[280px]">
          <Image
            src={recom}
            alt="recom"
            width={50}
            className="absolute -top-5 -right-5"
          />
        </div> */}
        <Image src={wh2} alt="wh1" width={253} height={186} />
        {/* <div className=" relative w-10/12 sm:w-[280px]">
          <Image
            src={recom}
            alt="recom"
            width={50}
            className="absolute -top-5 -right-5"
          />
        </div> */}
        <Image src={wh2} alt="wh1" width={253} height={186} />
        {/* <div className=" relative w-10/12 sm:w-[280px]">
          <Image
            src={recom}
            alt="recom"
            width={50}
            className="absolute -top-5 -right-5"
          />
        </div> */}
      </div>
      {/* <button
        className={`${poppins.className} my-10 bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg`}
      >
        REGISTER NOW
      </button> */}
      <div className="my-[25px] text-center w-[253px] h-12 px-7 py-[13px] bg-[#5259aa] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
        <div
          className={`${poppins.className} text-center text-white text-[17px] font-bold font-['Poppins'] leading-snug`}
        >
          REGISTER NOW
        </div>
      </div>
    </div>
  );
}
