import { Mulish } from "next/font/google";
import localFont from "next/font/local";
import { FaCheckCircle } from "react-icons/fa";


const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mlish",
});

const caros =  localFont({
  src:"../../public/fonts/Caros.otf"
})

export default function PricingCards() {
  return (
    <div className={`${caros.className} flex flex-col sm:flex-row items-center justify-center mt-5 gap-3`}>
      <div className="bg-[#EEEFFC] w-[100%]  sm:w-[300px] md:w-[40%] md:h-[450px] rounded-xl p-5 md:p-10 ">
        <div className=" flex justify-evenly sm:flex-col">
          <div className="leftside flex flex-col w-[45%] py-5">
            <div className=" flex justify-between items-start flex-col h-[120px] ">
              <p className=" text-3xl font-bold">₹295</p>
              <p className="  text-start text-xs md:text-lg ">
                Single competition participation
              </p>
            </div>
          </div>
          <div className=" w-[1px] h-[150px] bg-[#1B1D30] opacity-20 sm:hidden"></div>
          <div className="  h-[1px] sm:w-[100%] bg-[#1B1D30] opacity-20 hidden sm:block"></div>

          <div className="rightside w-[55%] sm:w-full sm:justify-start flex items-start justify-center py-5">
            <ul className="space-y-2 text-xs md:text-base">
              <li className="flex items-center gap-2">
                {" "}
                <FaCheckCircle size={14} /> Feedback from experts
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheckCircle size={14} /> Digital Certificate
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle size={14} /> Medal for Winners
              </li>
              <li className=" flex items-center gap-2 h-12 lg:h-7">
                {/* <FaCheckCircle /> Medal for Winners  */}
              </li>
            </ul>
          </div>
        </div>

        <button className=" w-full mt-2 rounded-lg bg-[#5259AA] p-2 text-white ">
          Participate Now
        </button>
      </div>
      <div className="relative bg-[#EEEFFC] w-[100%] sm:w-[300px] md:w-[40%] md:h-[450px] rounded-xl p-5 md:p-10 ">

      <p className="absolute top-[2%] md:top-[4%] bg-[#D73970] p-1 sm:p-2 rounded-xl text-[8px]  sm:text-xs text-white" >Recommended</p>

        <div className=" flex justify-evenly sm:flex-col">
          <div className="leftside flex flex-col w-[45%] py-5">
            <div className=" flex justify-between items-start flex-col h-[120px] ">
              <p className=" text-3xl font-bold">₹500</p>
              <p className="  text-start text-xs md:text-lg ">
                Two competition participation
              </p>
            </div>
          </div>
          <div className=" w-[1px] h-[150px] bg-[#1B1D30] opacity-20 sm:hidden"></div>
          <div className="  h-[1px] sm:w-[100%] bg-[#1B1D30] opacity-20 hidden sm:block"></div>

          <div className=" rightside w-[55%] sm:w-full sm:justify-start text-start flex items-start justify-center py-5">
            <ul className="space-y-2 text-xs md:text-base w-[90%] ">
              <li className="flex items-center gap-2">
                {" "}
                <FaCheckCircle className=" w-3 " /> Feedback from experts
              </li>
              <li className="flex items-center gap-2 font-bold">
                {" "}
                <FaCheckCircle /> Physical Certificate
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle /> Medal for Winners
              </li>
              <li className=" flex items-center gap-2 text-wrap">
                <FaCheckCircle className=" w-5 md:w-auto "/>
                <p>Chance to be featured
                in our weekly showcase</p>
              </li>
              {/* <p className="flex items-center gap-2 text-wrap">
                in our weekly showcase
              </p> */}
            </ul>
          </div>
        </div>

        <button className=" w-full mt-2 rounded-lg bg-[#5259AA] p-2 text-white ">
          Participate Now
        </button>
      </div>
      {/* <div className="bg-[#EEEFFC] w-[95%] sm:w-[300px] md:w-[40%] rounded-xl p-5 md:p-10 ">
        <div className=" flex justify-evenly sm:flex-col">
          <div className="leftside flex flex-col w-[45%] py-5">
            <div className=" flex justify-between items-start flex-col h-[120px] ">
              <p className=" text-3xl font-bold">₹500</p>
              <p className="  text-start text-xs md:text-base ">
                Two competition participation
              </p>
            </div>
          </div>
          <div className=" w-[1px] h-[150px] bg-[#1B1D30] opacity-20 sm:hidden"></div>
          <div className=" w-[100%] h-[1px] bg-[#1B1D30] opacity-20 hidden sm:block"></div>

          <div className=" rightside w-[55%] sm:w-full sm:justify-start flex items-start justify-center py-5">
            <ul className="space-y-2 text-xs md:text-base">
              <li className="flex items-center gap-2">
                {" "}
                Feedback from experts
              </li>
              <li className="flex items-center gap-2"> Physical Certificate</li>
              <li className="flex items-center gap-2"> Medal for Winners</li>
              <li className="flex items-center gap-2"> Chance to be featured in our weekly showcase</li>
            </ul>
          </div>
        </div>

        <button className=" w-full mt-2 rounded-lg bg-[#5259AA] p-2 text-white ">
          Participate Now
        </button>
      </div> */}
    </div>

    // <div className=" flex-col bg-white">
    //   <div className=" flex justify-between flex-col">
    //     <div>₹295</div>
    //     <div>Single competition participation</div>
    //   </div>
    //   <div>
    //     <ul className="space-y-2">
    //       <li className="flex items-center gap-2"> Feedback from experts</li>
    //       <li className="flex items-center gap-2"> Digital Certificate</li>
    //       <li className="flex items-center gap-2"> Medal for Winners</li>
    //     </ul>
    //   </div>
    //   <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
    //     Participate Now
    //   </button>
    // </div>
    // <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-900 text-white">
    //   {/* Single Competition Card */}
    //   <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full md:w-1/3">
    //     <h2 className="text-3xl font-bold">₹295</h2>
    //     <p className="text-lg text-gray-400 mt-2">Single competition participation</p>
    //     <hr className="my-4 border-gray-700" />
    //     <ul className="space-y-2">
    //       <li className="flex items-center gap-2">
    //         ✅ Feedback from experts
    //       </li>
    //       <li className="flex items-center gap-2">
    //         ✅ Digital Certificate
    //       </li>
    //       <li className="flex items-center gap-2">
    //         ✅ Medal for Winners
    //       </li>
    //     </ul>
    //     <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
    //       Participate Now
    //     </button>
    //   </div>

    //   {/* Two Competition Card */}
    //   <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full md:w-1/3 relative border border-purple-500">
    //     <span className="absolute top-[-10px] left-4 bg-pink-500 text-white px-3 py-1 text-sm rounded-full">
    //       Recommended
    //     </span>
    //     <h2 className="text-3xl font-bold">₹500 <span className="text-gray-400 line-through text-xl">₹600</span></h2>
    //     <p className="text-lg text-gray-400 mt-2">Two competition participation</p>
    //     <hr className="my-4 border-gray-700" />
    //     <ul className="space-y-2">
    //       <li className="flex items-center gap-2">
    //         ✅ Feedback from experts
    //       </li>
    //       <li className="flex items-center gap-2 font-semibold">
    //         ✅ Physical Certificate
    //       </li>
    //       <li className="flex items-center gap-2">
    //         ✅ Medal for Winners
    //       </li>
    //       <li className="flex items-center gap-2">
    //         ✅ Chance to be featured in our weekly showcase
    //       </li>
    //     </ul>
    //     <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
    //       Participate Now
    //     </button>
    //   </div>
    // </div>
  );
}
