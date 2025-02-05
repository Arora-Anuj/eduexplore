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

export default function page() {
  return (
    <div className=" min-w-full bg-[#1B1D30] min-h-[100vh]">
      <div className="">
        <div className=" flex items-center justify-center py-[10px]">
          <Image src={star} height={60} alt="star" />
          <Image src={starkid} height={20} alt="starkid" />
        </div>
        <div className=" mx-auto text-center font-bold px-2">
          <div className=" font-bold  ">
            <span className="text-white text-[28px] font-bold font-['Publica Sans'] leading-9">
              Your{" "}
            </span>
            <span className="text-[#d63970] text-[28px] font-bold font-['Publica Sans'] leading-9">
              Child’s Talent{" "}
            </span>
            <span className="text-white text-[33px] font-bold font-['Publica Sans'] leading-9">
              Deserves the Spotlight!
            </span>
          </div>

          <div className="mt-5 ">
            <span className="text-white text-[20px] font-light font-['Caros'] leading-[18px]">
              Join India's Most Trusted Platform to discover and showcase young
              talents through Competitions{" "}
            </span>
            <span className="text-white text-[20px]  font-['Caros'] leading-[18px] font-semibold">
              guided by Experts
            </span>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
         <CompetitionRegistration />
       <TalentPage />

          <Recomendation />
           <CompetationDisplay />
         <HowToRegister />
           <PerksOfJoining />
          <WhyJoin />
         {/* <Challenges/> */}
          <Faq/>
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

