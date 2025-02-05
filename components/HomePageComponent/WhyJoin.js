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

        <div className=" flex flex-wrap items-center justify-center gap-2 p-1 font-medium text-black my-10">
          <div className=" bg-[#00AFAA] px-2 py-1 rounded-lg">
            {" "}
            Showcase Talent
          </div>
          <div className=" bg-[#D73970] px-2 py-1 rounded-lg">
            {" "}
            Get Feedback
          </div>
          <div className=" bg-[#FFC56F] px-2 py-1 rounded-lg"> Learn</div>
          <div className=" bg-[#FFC56F] px-2 py-1 rounded-lg">
            {" "}
            Build Confidence
          </div>
          <div className=" bg-[#00AFAA] px-2 py-1 rounded-lg"> Reward</div>
          <div className=" bg-[#D73970] px-2 py-1 rounded-lg"> Challenges</div>
          <div className=" bg-[#D73970] px-2 py-1 rounded-lg"> Grow</div>
          <div className=" bg-[#FFC56F] px-2 py-1 rounded-lg">
            {" "}
            Gain Regognition
          </div>
          <div className=" bg-[#00AFAA] px-2 py-1 rounded-lg"> New Skills</div>
        </div>
      </div>
    </>
  );
}
