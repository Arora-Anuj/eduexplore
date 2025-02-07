import React from "react";
import group from "@/public/asset/group.png";
import msg1 from "@/public/asset/msg1.png";
import msg2 from "@/public/asset/msg2.png";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function CompetitionRegistration() {
  return (
    <div className=" relative mt-20 p-3 md:hidden">
      <Image
        src={msg1}
        width={140}
        alt="msg1"
        className="absolute left-0 -top-4 sm:-left-10 sm:-top-6"
      />
      <div className="flex flex-col items-center justify-center">
        <Image src={group} alt="groupimage" height={280} width={280} />
        <div className=" flex items-center justify-center flex-col ">
          <p
            className={`text-white font-medium mt-8 text-xl ${inter.className}`}
          >
            Last few spots left!
          </p>

          <button
            className={`${poppins.className} mt-4 bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg`}
          >
            REGISTER NOW
          </button>
          <p className="text-white text-lg mt-10 text-center">
            Participate in any competition for just ₹259!
          </p>
        </div>
        <Image
          src={msg2}
          width={120}
          alt="msg2"
          className="absolute top-44 right-5  sm:-right-10 "
        />
        <button
          className={`absolute bottom-[42%] text-white text-[22px] font-semibold ${poppins.className} w-[250px] bg-[#D73970] rounded-lg`}
        >
          98% Satisfaction Rate among parents
        </button>
      </div>
    </div>
  );
}
