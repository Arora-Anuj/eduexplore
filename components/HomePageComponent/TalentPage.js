"use client";
import Image from "next/image";
import talent1 from "@/public/asset/talent1.png";
import talent2 from "@/public/asset/talent2.png";
import talent3 from "@/public/asset/talent3.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../app/globals.css";

import { Pagination } from "swiper/modules";
import { Public_Sans } from "next/font/google";
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-publica",
});
export default function TalentPage() {
  return (
    <div className=" bg-[#EEEFFC] w-full mt-10 p-3 md:hidden">
      <div className={`text-center my-10 ${publicSans.className}`}>
        <span className="text-[#1b1d30] text-[26px] font-bold font-['Publica Sans'] leading-normal">
          Turning{" "}
        </span>
        <span className="text-[#d63970] text-[26px] font-bold font-['Publica Sans'] leading-normal">
          Talents into Opportunities!
        </span>
      </div>
      <div className=" w-full mx-auto h-auto md:w-[500px] md:h-[500px] mb-10">

      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full sm:w-[350px] rounded-lg">
            <Image src={talent3} className="w-full" alt="talent" />
            <div className=" w-full overflow-clip leading-5 bg-[#00AFAA] rounded-b-lg p-4 text-center">
              <span className="text-white  font-medium font-['Caros']">
                Aryan’s public speaking experience with us gave him the
              </span>{" "}
              <span className="text-white  font-semibold font-['Caros']"></span>
              <span className="text-[#1b1d30]  font-semibold font-['Caros']">
                confidence to participate in a national-level
              </span>{" "}
              <span className="text-white  font-medium font-['Caros']">
                debate competition
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full sm:w-[350px] rounded-lg">
            <Image src={talent2} className="w-full" height={300} alt="talent" />
            <div className="w-full leading-5 bg-[#D73970] rounded-b-lg p-4 text-center">
              <span className="text-white  font-medium font-['Caros']">
                The competitions have improved kid's focus and discipline ,
                helping them{" "}
              </span>
              <span className="text-[#1b1d30]  font-semibold font-['Caros']">
                Perform better in school exams
              </span>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full sm:w-[350px] rounded-lg">
            <Image src={talent1} className="w-full" height={300} alt="talent" />
            <div className="w-full leading-5 bg-[#FFC56F] rounded-b-lg p-4 text-center">
              <span className="text-white  font-medium font-['Caros']">
                StarKid's creative contests boosted Ananya's confidence and led
                her to become
              </span>{" "}
              <span className="text-[#1b1d30]  font-semibold font-['Caros']">
                the Head of her school's Creative Club
              </span>{" "}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

      {/* <div className="mt-10 flex items-center justify-center gap-20 flex-wrap  mb-10">
        <div className=" w-10/12 sm:w-[350px] rounded-lg">
          <Image src={talent3} className="w-full" alt="talent" />
          <div className=" w-full overflow-clip leading-5 bg-[#00AFAA] rounded-b-lg p-4 text-center">
            <span className="text-white  font-medium font-['Caros']">
              Aryan’s public speaking experience with us gave him the
            </span>{" "}
            <span className="text-white  font-semibold font-['Caros']"></span>
            <span className="text-[#1b1d30]  font-semibold font-['Caros']">
              confidence to participate in a national-level
            </span>{" "}
            <span className="text-white  font-medium font-['Caros']">
              debate competition
            </span>
          </div>
        </div>

        <div className="w-10/12 sm:w-[350px] rounded-lg">
          <Image src={talent2} className="w-full" height={300} alt="talent" />
          <div className="w-full leading-5 bg-[#D73970] rounded-b-lg p-4 text-center">
            <span className="text-white  font-medium font-['Caros']">
              The competitions have improved kid's focus and discipline ,
              helping them{" "}
            </span>
            <span className="text-[#1b1d30]  font-semibold font-['Caros']">
              Perform better in school exams
            </span>{" "}
          </div>
        </div>

        <div className="w-10/12 sm:w-[350px] rounded-lg">
          <Image src={talent1} className="w-full" height={300} alt="talent" />
          <div className="w-full leading-5 bg-[#FFC56F] rounded-b-lg p-4 text-center">
            <span className="text-white  font-medium font-['Caros']">
              StarKid's creative contests boosted Ananya's confidence and led
              her to become
            </span>{" "}
            <span className="text-[#1b1d30]  font-semibold font-['Caros']">
              the Head of her school's Creative Club
            </span>{" "}
          </div>
        </div>
      </div> */}
    </div>
  );
}
