import React from "react";

export default function Stats() {
  return (
    <div className=" bg-[#5259AA] text-center text-white flex flex-col gap-y-20 md:flex-row items-center justify-evenly w-screen py-10 md:py-14">
      <div className=" w-full md:w-4/12 flex flex-col gap-1 md:gap-2 md:text-lg items-center justify-center">
        <p className=" text-3xl font-bold md:text-4xl">98%</p>
        <p className="" >Satisfaction Rate among Parents</p>
      </div>
      <div className=" w-full md:w-4/12 flex flex-col gap-1 md:gap-2 md:text-lg items-center justify-center">
         <p className=" text-3xl font-bold md:text-4xl">10,000 + </p>
        <p>Registrations</p>
      </div>
      <div className=" w-full md:w-4/12 flex flex-col gap-1 md:gap-2 md:text-lg items-center justify-center">
         <p className=" text-3xl font-bold md:text-4xl">4.5/5</p>
        <p>Rating on Google</p>
      </div>
    </div>
  );
}
