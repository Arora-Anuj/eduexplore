"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../app/globals.css"
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});
const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});
export default function SwipeRecomendation() {
  return (
    <div className=' bg-white text-black'>

    <Swiper
    slidesPerView={1.6}
    centeredSlides={"true"}
    spaceBetween={20}
    pagination={{
      clickable: true,
    }}
    loop={true} // Enable infinite loop
    autoplay={{
      delay: 2000, // 2 seconds delay
      disableOnInteraction: false, // Keep autoplay even after user interaction
    }}
    modules={[Autoplay]}
    className="mySwiper"
  >
      <SwiperSlide className=' w-[30%] bg-blue-400'>1</SwiperSlide>
      <SwiperSlide className=' w-[30%] bg-blue-400'>2</SwiperSlide>
      <SwiperSlide className=' w-[30%] bg-blue-400'>3</SwiperSlide>
  </Swiper>
    </div>
  )
}

{/* <SwiperSlide>
<div className="w-[260px] h-[280px]  rounded-[10px]">
  <Image
    src={talent3}
    className="w-full"
    height={170}
    alt="talent"
  />
  <div className=" w-full overflow-clip text-xs leading-normal bg-[#00AFAA] rounded-b-[20px]  text-center">
    <p className={`py-[15px] px-[20px] ${caros.className}`}>
      <span className={`text-white   font-medium ${caros.className}`}>
        Aryan’s public speaking experience with us gave him the
      </span>{" "}
      <span className={`text-[#1b1d30]  font-semibold ${caros.className}`}>
        confidence to participate in a national-level
      </span>{" "}
      <span className={`text-white  font-medium ${caros.className}`}>
        debate competition
      </span>
    </p>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="w-[260px] h-[280px]  rounded-[10px]">
  <Image
    src={talent2}
    className="w-full"
    height={170}
    alt="talent"
  />
  <div className=" w-full overflow-clip text-xs leading-normal bg-[#d63970] rounded-b-[20px] py-[15px] px-[20px] text-center">
    <span className={`text-white  font-medium ${caros.className}`}>
      The competitions have improved kid's focus and discipline ,
      helping them{" "}
    </span>
    <span className={`text-[#1b1d30]  font-semibold ${caros.className}`}>
      Perform better in school exams
    </span>{" "}
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="w-[260px] h-[280px]  rounded-[10px]">
  <Image
    src={talent1}
    className="w-full"
    height={170}
    alt="talent"
  />
  <div className=" w-full overflow-clip text-xs leading-normal bg-[#ffc56f] rounded-b-[20px]  text-center">
    <p className="py-[15px] px-[20px]">
      <span className={`text-white  font-medium ${caros.className}`}>
        StarKid's creative contests boosted Ananya's confidence and
        led her to become
      </span>{" "}
      <span className={`text-[#1b1d30]  font-semibold ${caros.className} `}>
        the Head of her school's Creative Club
      </span>{" "}
    </p>
  </div>
</div>
</SwiperSlide> */}