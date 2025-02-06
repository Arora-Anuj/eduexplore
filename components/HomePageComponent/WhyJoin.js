import React from "react";

export default function WhyJoin() {
  return (
    <>
      <div className=" flex flex-col min-w-full items-center justify-center my-10">
        <div className="mt-10 text-center px-3 md:px-0">
          <span className="text-white text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
            StarKid is perfect for those{" "}
          </span>
          <span className="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
            who want to:
          </span>
        </div> 

        <div className=" flex flex-col items-center justify-center gap-y-2 font-medium text-black my-10">

          <div className=" text-center flex items-center justify-center  w-[95vw]  gap-2">
            <div className=" bg-[#00AFAA] px-2 py-1 rounded-lg flex-auto ">
              Showcase Talent
            </div>
            <div className=" bg-[#D73970] px-2 py-1 rounded-lg flex-auto">
              Get Feedback
            </div>
            <div className=" bg-[#FFC56F] px-2 py-1 rounded-lg flex-auto">
              {" "}
              Learn
            </div>
          </div>

          <div className="text-center flex items-center justify-center w-[95vw]  gap-2 ">
            <div className=" bg-[#FFC56F] px-2 py-1 rounded-lg flex-auto">
              Build Confidence
            </div>
            <div className=" bg-[#00AFAA] px-2 py-1 rounded-lg flex-auto">
              {" "}
              Reward
            </div>
            <div className=" bg-[#D73970] px-2 py-1 rounded-lg flex-auto">
              Challenges
            </div>
          </div>

          <div className=" text-center flex items-center justify-center w-[95vw]  gap-2">
            <div className=" bg-[#D73970] px-2 py-1 rounded-lg flex-auto ">
              {" "}
              Grow
            </div>
            <div className=" bg-[#FFC56F] px-2 py-1 rounded-lg flex-auto ">
              Gain Regognition
            </div>
            <div className=" bg-[#00AFAA] px-2 py-1 rounded-lg flex-auto ">
              New Skills
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
