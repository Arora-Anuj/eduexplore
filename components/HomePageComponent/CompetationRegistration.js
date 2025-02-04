import React from "react";
import group from "@/public/asset/group.png";
import Image from "next/image";

export default function CompetitionRegistration() {
  return (
    <div className=" relative mt-20 p-3">
      <button className="absolute left-0 -top-10 sm:-left-12 sm:-top-6 w-[150px] bg-[#D73970] rounded-xl py-1 px-3 text-white font-bold">
        Over 10,000+ registrations
      </button>
      <div className="flex flex-col items-center justify-center">
        <Image src={group} alt="groupimage" height={280} width={280} />
        <p className="text-white font-medium mt-6 text-xl">
          Last few spots left!
        </p>

        <button className="mt-4 bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg">
          REGISTER NOW
        </button>
        <p className="text-white text-xl mt-5 text-center">
          Participate in any competition for just ₹259!
        </p>
        <button className="absolute top-40 right-0  sm:-right-10 w-[150px] bg-[#D73970] rounded-xl py-1 px-3 text-white font-bold">
          Rated 4.4 / 5
        </button>
        <button className="absolute bottom-[42%] text-white text-[22px] font-semibold font-['Poppins'] w-[250px] bg-[#D73970]  rounded-2xl">
          98% Satisfaction Rate among parents
        </button>
      </div>
    </div>
  );
}
