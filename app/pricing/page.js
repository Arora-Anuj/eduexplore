import Talent from "@/components/DesktopVersion/HomePageComponents/Talent";
import Faq from "@/components/HomePageComponent/Faq";
import Footer from "@/components/HomePageComponent/Footer";
import PerksOfJoining from "@/components/HomePageComponent/PerksOfJoining";
import Recomendation from "@/components/HomePageComponent/Recomendation";
import TalentPage from "@/components/HomePageComponent/TalentPage";
import Pricing from "@/components/PricingPageComponent/Pricing";
import Stats from "@/components/PricingPageComponent/Stats";
import star from "@/public/asset/star-logo.png";
import starkid from "@/public/asset/starkid.png";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className=" bg-[#EEEFFC] min-w-full">
      <div className=" bg-[#1B1D30]">
        <div className=" flex items-center justify-end sm:justify-start p-5">
          {/* <div className=" flex pr-3"> */}
            <Image src={star} height={40} alt="star" />
            <Image src={starkid} height={20} alt="starkid" />
          {/* </div> */}
        </div>
        <Pricing />
      </div>
      <div>
        <Stats />
      </div>
      <div className=" bg-[#EEEFFC]">
        <Talent />
        <TalentPage />
      </div>
      <div className=" bg-[#1B1D30] pt-5">
        <Recomendation />
      </div>
      <div className=" bg-blue-500">
        <PerksOfJoining />
      </div>
      <div className=" bg-[#1B1D30] pb-10 md:pb-20">
        <Faq />
      </div>
      <div className=" bg-blue-500 -mt-20">
        <Footer />
      </div>
    </div>
  );
}
