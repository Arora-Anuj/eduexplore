import Image from "next/image";
import React from "react";
import reg1 from "@/public/asset/reg1.png";
import reg2 from "@/public/asset/reg2.png";
import reg3 from "@/public/asset/reg3.png";
import arrow from "@/public/asset/arrow.png";
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
export default function HowToRegister() {
  return (
    <div className=" min-w-full flex items-center justify-center p-3">
      <div className=" my-10">
        <p
          className={`${publicSans.className} text-[#d63970] text-center text-[26px] font-medium leading-normal`}
        >
          How to Register
          <span className="text-white text-[26px] font-medium  leading-normal">
            {" "}
            in Just 3 Simple Steps?
          </span>
        </p>
        <div className="flex mt-10 items-center justify-center">
          <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
            <Image src={reg1} alt="reg1" className=" w-full" height={"auto"} />
            {/* <p className=" font-semibold">Click on 'Register Now'</p> */}
          </div>
          <Image
            src={arrow}
            alt="arrow"
            className=" w-[10%] sm:w-[50px] "
            height={"auto"}
          />

          <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
            <Image src={reg2} alt="reg1" className=" w-full" height={"auto"} />
            {/* <p className=" font-semibold">Choose Your Competition</p> */}
          </div>
          <Image
            src={arrow}
            alt="arrow"
            className=" w-[10%] sm:w-[50px] "
            height={"auto"}
          />

          <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
            <Image src={reg3} alt="reg1" className=" w-full" height={"auto"} />
          </div>
        </div>
        <div
          className={` ${poppins.className} flex mt-3  items-center justify-center text-white`}
        >
          <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
            <p className=" font-semibold">Click on 'Register Now'</p>
          </div>
          <div className=" w-[10%] sm:w-[50px] " />
          <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
            <p className=" font-semibold">Choose Your Competition</p>
          </div>
          <div className=" w-[10%] sm:w-[50px] " />

          <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
            <p className=" font-semibold">Make the Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
