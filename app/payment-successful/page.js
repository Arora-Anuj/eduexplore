import Faq from "@/components/HomePageComponent/Faq";
import JoinGroup from "@/components/PaymentSuccessfullComponent/JoinGroup";
import StepsToJoin from "@/components/PaymentSuccessfullComponent/StepsToJoin";
import Successfull from "@/components/PaymentSuccessfullComponent/Successfull";
import React from "react";

export default function page() {
  return (
    <>
      <div className=" bg-[#1B1D30] w-screen min-h-screen">
        <Successfull />
        <JoinGroup />
        <StepsToJoin />
        <Faq />
      </div>
    </>
  );
}
