import Image from "next/image";
import React from "react";
import star from "@/public/asset/star-logo.png";
import starkid from "@/public/asset/starkid.png";
import CompetitionRegistration from "@/components/HomePageComponent/CompetationRegistration";
import TalentPage from "@/components/HomePageComponent/TalentPage";
import Recomendation from "@/components/HomePageComponent/Recomendation";
import CompetationDisplay from "@/components/HomePageComponent/CompetationDisplay";
import HowToRegister from "@/components/HomePageComponent/HowToRegister";
import PerksOfJoining from "@/components/HomePageComponent/PerksOfJoining";
import WhyJoin from "@/components/HomePageComponent/WhyJoin";
import Faq from "@/components/HomePageComponent/Faq";
import Footer from "@/components/HomePageComponent/Footer";
import { Poppins, Public_Sans } from "next/font/google";
import HeroSection from "@/components/DesktopVersion/HomePageComponents/HeroSection";
import Talent from "@/components/DesktopVersion/HomePageComponents/Talent";

const publicaSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-publica",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const inter = {
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
};

export default function page() {
  return (
    <div className=" min-w-full bg-[#1B1D30] min-h-[100vh]">
      <div className="">
        <div className=" flex items-center justify-center md:justify-start py-[10px] md:ml-5">
          <Image src={star} height={50} alt="star" />
          <Image src={starkid} height={20} alt="starkid" />
        </div>

        <div className=" flex flex-col md:flex-row md:mb-16">
          <div className=" md:w-5/12 mx-auto text-center flex flex-col justify-evenly font-bold px-2">
            <div className={`${publicaSans.className} font-medium `}>
              <span className="text-white text-[33px] font-bold leading-9">
                Your{" "}
              </span>
              <span className="text-[#d63970] text-[33px] font-bold leading-9">
                Child’s Talent{" "}
              </span>
              <div className="text-white text-[30px] font-bold leading-9">
                Deserves the Spotlight!
              </div>
            </div>

            <p className="mt-5 px-2">
              <span className="text-white text-lg  font-light font-['Caros'] leading-[18px]">
                Join India's Most Trusted Platform to discover and showcase
                young talents through Competitions{" "}
              </span>
              <span className="text-white   font-['Caros'] leading-[18px] font-semibold">
                guided by Experts
              </span>
            </p>

            <div className="hidden md:block">
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
          </div>
          <HeroSection />
        </div>

        <div className=" flex flex-col items-center justify-center">
          <CompetitionRegistration />

          <TalentPage />
          {/* desktop page */}
          <Talent />
          {/*  */}
          <Recomendation />

          <div className=" md:bg-[#EEEFFC] w-screen felx-col md:flex md:flex-row-reverse items-center justify-around">
            <CompetationDisplay />

            <HowToRegister />
          </div>
          <div className=" flex flex-col md:flex-col-reverse md:p-0">
            <PerksOfJoining />
            <WhyJoin />
          </div>
          {/* <Challenges/> */}
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
}
// "use client"
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import "../globals.css"

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function page() {
//   return (
//     <div className=' w-screen h-screen'>
//       <Swiper
//         slidesPerView={'auto'}
//         centeredSlides={true}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         // modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );

// }
