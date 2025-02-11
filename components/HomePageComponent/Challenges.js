"use client";

import Image from "next/image";
import talent1 from "@/public/asset/talent1.png";
import winner from "@/public/asset/winner.png";
import trophy from "@/public/asset/trophy.png";
import Link from "next/link";
import localFont from "next/font/local";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});

const challenges = [
  {
    title: "Color Carnival",
    description:
      "Celebrating creativity and imagination through colorful masterpieces.",
    category: "Drawing",
    winner: "Riya",
    // image: "/color-carnival.jpg",
    image: talent1,
    bgColor: "bg-yellow-400",
  },
  {
    title: "Dancing Star",
    description:
      "Theme Options:\n1. Bollywood Beats\n2. Retro Vibes\n3. Seasons in Dance",
    category: "Dancing",
    winner: "Riya",
    // image: "/dancing-star.jpg",
    image: talent1,
    bgColor: "bg-green-400",
  },
  {
    title: "Singing Star",
    description: "A singing competition where young voices shine!",
    category: "Drawing",
    winner: "Charvi",
    // image: "/singing-star.jpg",
    image: talent1,
    bgColor: "bg-pink-400",
  },
];

export default function Challenges() {
  return (
    <>
      <div className=" pt-[21px] bg-[#EEEFFC] w-full flex flex-col items-center justify-center md:hidden">
        <div className="  text-center w-11/12">
          <span className={`text-[#1b1d30] text-[26px] font-medium leading-[25px] ${publicaSans.className}`}>
            Take a look at the
          </span>
          <span className={`text-[#d63970] text-[26px] font-medium leading-[25px] ${publicaSans.className}`}>
            {" "}
            Most Exciting Challenges
          </span>
          <span className={`text-[#1b1d30] text-[26px] font-medium leading-[25px] ${publicaSans.className}`}>
            {" "}
            and Previous Competition Winners
          </span>
        </div>
        <Image src={winner} alt="winner" className=" w-auto h-[450px] mt-[20px]" />
        <Link
          href={"/pricing"}
          className={` my-[30px] bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg`}
        >
          REGISTER NOW
        </Link>
      </div>
    </>
  );
}
