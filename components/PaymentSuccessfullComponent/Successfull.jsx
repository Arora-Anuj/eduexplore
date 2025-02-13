import React from "react";
import whatsapp from "@/public/asset/whatsapp.png";
import check from "@/public/asset/check.png";
import Image from "next/image";

export default function Successfull() {
  return (
    <div className=" flex flex-col w-full items-center justify-center mb-[62px]">
      <Image
        src={check}
        alt="check"
        className=" w-[100px] h-[100px] mt-[89px] "
      />
      <h1 className="mt-[30px] text-white text-3xl font-medium  leading-[33px]">
        Payment Successful
      </h1>
      <h3 className=" mt-[6px] text-white text-[17px] font-light leading-[18px]">
        Successfully paid ₹500
      </h3>

      <div className=" w-[90%] mt-[60px] ">
        <p className="text-start text-white text-base font-normal font-['Caros'] leading-[18px]">
          Payment Details
        </p>
        <div className="rounded-[10px] bg-[#cbcde6] flex justify-between items-center py-[21px] px-[14px] mt-[11px]">
          <div className=" flex flex-col gap-y-[11px] text-start">
            <p className="text-[#1b1d30]/70 text-sm font-normal font-['Caros'] leading-[18px]">
              Transaction ID
            </p>
            <p className="text-[#1b1d30]/70 text-sm font-normal font-['Caros'] leading-[18px]">
              Date
            </p>
            <p className="text-[#1b1d30]/70 text-sm font-normal font-['Caros'] leading-[18px]">
              Transaction Type
            </p>
          </div>
          <div className=" flex flex-col gap-y-[11px] text-end">
            <p className="text-[#1b1d30]/70 text-sm font-semibold font-['Caros'] leading-[18px]">
              4231 2598 3214
            </p>
            <p className="text-[#1b1d30]/70 text-sm font-semibold font-['Caros'] leading-[18px]">
              10 February 2025
            </p>
            <p className="text-[#1b1d30]/70 text-sm font-semibold font-['Caros'] leading-[18px]">
              Credit Card
            </p>
          </div>
        </div>
      </div>

      {/* <div className=" w-full bg-[#5259aa] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" /> */}
      <div className="  w-[90%] flex justify-between items-center py-[10px] px-[15px] mt-[10px] bg-[#5259aa] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <h3 className="text-[#eeeffc] text-base font-semibold font-['Caros'] leading-[18px]">
          Total
        </h3>
        <h3 className="text-white text-[17px] font-semibold font-['Caros'] leading-[18px]">
          ₹500
        </h3>
      </div>
    </div>
  );
}
