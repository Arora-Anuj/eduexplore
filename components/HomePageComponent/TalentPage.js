"use client";
import Image from "next/image";
import talent1 from "@/public/asset/talent1.png";
import talent2 from "@/public/asset/talent2.png";
import talent3 from "@/public/asset/talent3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../app/globals.css";

import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});

const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

export default function TalentPage() {
  return (
    <div className=" bg-[#EEEFFC] w-full mt-[36px]  md:hidden">
      <div className="text-center my-[26px]">
        <span className={`text-[#1b1d30] text-[26px] font-medium  leading-[24.5px] ${publicaSans.className}`}>
          Turning{" "}
        </span>
        <span className={`text-[#d63970] text-[26px] font-medium  leading-[24.5px] ${publicaSans.className}`}>
          Talents into Opportunities!
        </span>
      </div>

      <div
        className={`${caros.className} w-full mx-auto h-auto md:w-[500px] md:h-[500px] mb-10`}
      >
        <Swiper
          slidesPerView={1.4}
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
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
