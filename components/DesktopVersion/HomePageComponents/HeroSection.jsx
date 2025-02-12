import Image from "next/image";
import React from "react";
import hero from "@/public/asset/hero.png";
import msg1 from "@/public/asset/msg1.png";
import msg2 from "@/public/asset/msg2.png";
import { Inter, Poppins, Public_Sans } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});


export default function HeroSection() {
  return (
    <>
      <div className="hidden relative w-6/12 md:flex items-center justify-center">
        <Image src={hero} alt="hero" className=" w-[80%] " />
        {/* <Image
          src={msg1}
          alt="hero"
          className="absolute md:w-32 lg:w-40 top-[30%] left-5"
        />
        <Image
          src={msg2}
          alt="hero"
          className="absolute md:w-32 lg:w-40 top-[10%] right-16"
        /> */}
        {/* <button
          className={`absolute -bottom-5 px-5 py-1  text-white text-[20px] font-semibold ${poppins.className} w-[300px] bg-[#D73970] rounded-lg`}
        >
          98% Satisfaction Rate among parents
        </button> */}
      </div>
    </>
  );
}
