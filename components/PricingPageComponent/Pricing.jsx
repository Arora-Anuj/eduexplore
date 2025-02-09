import React from "react";
import PricingCards from "./PricingCards";
import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";

const publicaSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-publica",
});

const caros =  localFont({
  src:"../../public/fonts/Caros.otf"
})

export default function Pricing() {
  return (
    <div >
      <div className=" text-center px-3 mt-5 pb-10">
        <p className={`${publicaSans.className} text-white text-3xl font-semibold`}>
          Flexible Choices,
          <span className=" text-[#D73970] "> Unlimited Opportunities!</span>
        </p>
        <p className={`${caros.className} text-sm  text-white mt-2 sm:text-base`} >
          Pick the best way to shine! Choose one or dual competition for
          recognition, rewards, and growth.
        </p>
        <PricingCards/>
      </div>
    </div>
  );
}
