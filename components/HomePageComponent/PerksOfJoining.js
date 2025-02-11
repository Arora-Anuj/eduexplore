import React from "react";
import join1 from "@/public/asset/join1.png";
import join2 from "@/public/asset/join2.png";
import join3 from "@/public/asset/join3.png";
import certficate from "@/public/asset/certficate.png";
import Image from "next/image";
import localFont from "next/font/local";
import { Inter, Poppins, Public_Sans } from "next/font/google";

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

export default function PerksOfJoining({ pricing }) {
  return (
    <div
      className={`bg-[#EEEFFC] w-full ${pricing ? "hidden md:block" : null}`}
    >
      <div className=" flex flex-col items-center justify-center mt-10">
        <div
          className={`${publicaSans.className} leading-[24px] tracking-[-0.41px]`}
        >
          <span className="text-[#1b1d30] text-[26px] font-medium font-['Publica Sans'] leading-normal">
            Perks of Joining{" "}
          </span>
          <span className="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-normal">
            StarKid:
          </span>
        </div>
        <div
          className={` ${caros.className} my-5 flex flex-wrap items-center justify-evenly w-full gap-y-7`}
        >
          <div className=" bg-[#1B1D30] w-7/12 sm:w-[200px] sm:h-[250px] items-center justify-center flex flex-col gap-2 p-4 rounded-2xl text-center">
            <Image alt="perks of joining" src={join3} />
            <p className=" text-white font-bold">Medals for Winner</p>
          </div>
          <div className=" bg-[#1B1D30] w-7/12 sm:w-[200px] sm:h-[250px] items-center justify-center flex flex-col gap-2 p-4 rounded-2xl text-center">
            <Image alt="perks of joining" src={certficate} />
            <p className=" text-white font-bold">Certificate for All</p>
          </div>
          <div className=" bg-[#1B1D30] w-7/12 sm:w-[200px] sm:h-[250px] items-center justify-center flex flex-col gap-2 p-4 rounded-2xl text-center">
            <Image alt="perks of joining" src={join2} />
            <p className=" text-white font-bold">Featured in Weekly showcase</p>
          </div>
          <div className=" bg-[#1B1D30] w-7/12 sm:w-[200px] sm:h-[250px] items-center justify-center flex flex-col gap-2 p-4 rounded-2xl text-center">
            <Image alt="perks of joining" src={join1} />
            <p className=" text-white font-bold">Experts Feedback</p>
          </div>
        </div>
        <button
          className={` ${poppins.className} mb-10 bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg`}
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}
