import React from "react";
import whatsapp from "@/public/asset/whatsapp.png";
import joingroup1 from "@/public/asset/joingroup1.png";
import joingroup2 from "@/public/asset/joingroup2.png";
import joingroup3 from "@/public/asset/joingroup3.png";
import joingroup4 from "@/public/asset/joingroup4.png";
import Image from "next/image";

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
export default function JoinGroup() {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-[20px] bg-[#EEEFFC] w-full pb-[64px]">
      <Image src={whatsapp} alt="whatsapp" className=" w-[80px] h-[80px]" />
      <div className=" w-8/12 mt-[11px] leading-normal">
        <p
          className={`${publicaSans.className}text-[#1b1d30] text-[26px] font-semibold leading-[24.5px] tracking-[-0.408px]`}
        >
          Join Our
          <span
            className={`${publicaSans.className}text-[#d63970] text-[26px] font-semibold leading-[24.5px] tracking-[-0.408px]`}
          >
            Exclusive WhatsApp Group!
          </span>
        </p>
      </div>
      <div className=" flex flex-col gap-[11px] items-center justify-center">
        <div className=" mt-[36px] flex flex-row gap-[13px] items-center justify-center px-[28px] ">
          <Image
            src={joingroup1}
            alt="joingroup1"
            className=" w-[146px] h-[152px]"
          />
          <Image
            src={joingroup2}
            alt="joingroup1"
            className=" w-[146px] h-[152px]"
          />
        </div>
        <div className=" flex flex-row gap-[13px] items-center justify-center px-[28px] ">
          <Image
            src={joingroup3}
            alt="joingroup1"
            className=" w-[146px] h-[152px]"
          />
          <Image
            src={joingroup4}
            alt="joingroup1"
            className=" w-[146px] h-[152px]"
          />
        </div>
      </div>
      <p
        className={`${caros.className}tracking-[-0.408px] w-full text-start px-[28px] mt-[27px] text-[#1b1d30] text-[15px] font-semibold leading-[18px]`}
      >
        Click here to join now:
      </p>
    </div>
  );
}
