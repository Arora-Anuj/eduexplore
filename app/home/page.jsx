import Image from "next/image";
import React from "react";
import star from "@/public/asset/star-logo.png";
import starkid from "@/public/asset/starkid.png";
// import CompetitionRegistration from "@/components/CompetationRegistration";
// import TalentPage from "@/components/TalentPage";
// import Recomendation from "@/components/Recomendation";
// import CompetationDisplay from "@/components/CompetationDisplay";
// import HowToRegister from "@/components/HowToRegister";
// import PerksOfJoining from "@/components/PerksOfJoining";
// import WhyJoin from "@/components/WhyJoin";
// import Footer from "@/components/Footer";
// import Faq from "@/components/Faq";
import Challenges from "@/components/Challenges";
export default function page() {
  return (
    <div className=" min-w-full bg-[#1B1D30] min-h-[100vh]">
      <div className="">
        <div className=" flex items-center justify-center py-[27px]">
          <Image src={star} height={60} alt="star" />
          <Image src={starkid} height={13} alt="starkid" />
        </div>
        <div className=" mx-auto text-center font-bold p-3">
          <div className=" font-bold space-y-10 ">
            <span className="text-white text-[33px] font-bold font-['Publica Sans'] leading-9">
              Your{" "}
            </span>
            <span className="text-[#d63970] text-[33px] font-bold font-['Publica Sans'] leading-9">
              Child’s Talent{" "}
            </span>
            <span className="text-white text-[33px] font-bold font-['Publica Sans'] leading-9">
              Deserves the Spotlight!
            </span>
          </div>

          <div className="mt-10 ">
            <span className="text-white text-[20px] font-light font-['Caros'] leading-[18px]">
              Join India's Most Trusted Platform to discover and showcase young
              talents through Competitions{" "}
            </span>
            <span className="text-white text-[20px]  font-['Caros'] leading-[18px] font-semibold">
              guided by Experts
            </span>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          {/* <CompetitionRegistration />
        <TalentPage />

          <Recomendation />
            <CompetationDisplay />
         <HowToRegister />
           <PerksOfJoining />
          <WhyJoin />
         <Challenges/>
          <Faq/>
          <Footer />  */}
        </div>
      </div>
    </div>
  );
}