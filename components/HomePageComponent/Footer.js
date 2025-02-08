import React from "react";
import starkid from "@/public/asset/star2.png";
import starLogo from "@/public/asset/logo2.png";
import brand from "@/public/asset/brand.png";
import inst from "@/public/asset/inst.png";
import Image from "next/image";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

export default function Footer() {
  return (
    // <div className=" bg-[#EEEFFC] min-w-full">
    //   <div className=" p-3 my-10">
    //     <div className=" flex items-center gap-1 ">
    //       <Image src={starLogo} height={40} alt="star" />
    //       <Image src={starkid} height={18} width={78} alt="starkid" />
    //     </div>
    //     <div className=" flex items-center gap-3 mt-10">
    //       <Image src={inst} height={30} alt="starkid" />
    //       <Image src={link} height={30} alt="star" />
    //     </div>
    //     <div className=" flex gap-10  mt-5">
    //       <div className=" flex flex-col gap-5 font-semibold text-lg sm:text-2xl text-black w-4/12">
    //         <p className=" uppercase font-medium  text-[#6D6D6D]">
    //           Company
    //         </p>
    //         <p className=" ">About Us</p>
    //         <p className=" ">Privacy Policy</p>
    //         <p className=" ">Refund and Cancellation Policy</p>
    //         <p className=" ">Shipping and Delivery</p>
    //         <p className=" ">Terms and Conditions</p>
    //       </div>
    //       <div className="flex text-lg sm:text-2xl flex-col gap-5 font-semibold text-black ">
    //         <p className="font-medium uppercase  text-[#6D6D6D] ">
    //           Products
    //         </p>
    //         <p className=" ">StarKid App</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative bg-[#EEEFFC] md:bg-[#1B1D30] md:text-white flex flex-col md:flex-row w-screen items-center justify-center md:justify-evenly md:items-start text-[#1B1D30] mt-20 md:mt-0 md:py-0 py-20">
      <div className="-top-[8%] md:-top-[12%] left-[calc(50%-62px)] absolute z-50 bg-[#EEEFFC] md:bg-[#1B1D30] p-3 rounded-full">
        <Image src={brand} alt="brand" className="w-[100px]" />
      </div>
      <div className=" flex flex-col md:flex-row-reverse  md:justify-evenly md:w-8/12">

        <div className=" flex flex-col items-center justify-start md:pt-32 gap-3 md:w-6/12 md:mt-0">

          <p> StarKid: Where Talent Shines Bright! ✨</p>
          <p className="mt-2 text-sm">Let’s Get Social!</p>

          <div className=" flex gap-3">
            <BiLogoTwitter size={20} />
            <BiLogoFacebook size={20} />
            <BiLogoInstagram size={20} />
            
          </div>
        </div>

        <div className=" md:h-[412px] md:w-[1px] w-screen h-[1px] mt-5 md:mt-0 bg-black md:bg-white"></div>

        <div className="mt-10  flex items-center flex-col justify-center text-center md:text-start  font-semibold md:w-6/12 md:pb-20">
          {/* <h3 className="text-md font-semibold uppercase text-[#6D6D6D] md:text-start">
            Company
          </h3> */}
          {/* <ul className="text-md font-semibold uppercase text-[#6D6D6D] "> */}
          {/* </ul> */}

          <ul className="mt-3 space-y-3 text-sm md:text-lg">
            <li className="text-2xl font-semibold uppercase mb-5 text-[#6D6D6D] ">
              <span>Company</span>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund & Cancellation Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className=" md:h-[412px] md:w-[1px] w-screen h-[1px] mt-5 md:mt-0 bg-black md:bg-white"></div>

      <div className="mt-5 flex flex-col items-center justify-center font-semibold md:w-4/12 md:pb-20">
        <ul className="mt-3 space-y-2 text-sm md:text-lg md:py-5 md:flex md:flex-col md:items-start text-center md:w-5/12">
          <li className="text-2xl font-semibold uppercase mb-5 text-[#6D6D6D] ">
            <span>Products</span>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Starkid App
            </a>
          </li>
        </ul>
      </div>
    </div>

    // <footer className="bg-gray-100 text-gray-800 py-8 text-center">
    //   <div className="max-w-4xl mx-auto px-4">
    //     <h2 className="text-lg font-semibold">
    //       StarKid: Where Talent Shines Bright! ✨
    //     </h2>
    //     <p className="mt-2 text-sm">Let’s Get Social!</p>

    //     {/* Social Media Icons */}
    //     <div className="flex justify-center gap-4 mt-3">
    //     <Image src={inst} height={30} alt="starkid" />
    //     <Image src={inst} height={30} alt="starkid" />
    //     <Image src={inst} height={30} alt="starkid" />
    //       {/* <a href="#" className="text-gray-700 hover:text-gray-900">
    //         <FaTwitter size={20} />
    //       </a> */}
    //       {/* <a href="#" className="text-gray-700 hover:text-gray-900">
    //         <FaFacebookF size={20} />
    //       </a> */}
    //       {/* <a href="#" className="text-gray-700 hover:text-gray-900">
    //         <FaInstagram size={20} />
    //       </a> */}
    //     </div>

    //     {/* Company Section */}
    //     <div className="mt-8">
    //       <h3 className="text-md font-semibold uppercase text-[#6D6D6D]">Company</h3>
    //       <ul className="mt-3 space-y-2 text-sm">
    //         <li><a href="#" className="hover:underline">About Us</a></li>
    //         <li><a href="#" className="hover:underline">Contact Us</a></li>
    //         <li><a href="#" className="hover:underline">Privacy Policy</a></li>
    //         <li><a href="#" className="hover:underline">Refund & Cancellation Policy</a></li>
    //         <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
    //         <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
    //       </ul>
    //     </div>

    //     {/* Products Section */}
    //     <div className="mt-8">
    //       <h3 className="text-md font-semibold uppercase text-[#6D6D6D]">Products</h3>
    //       <ul className="mt-3 space-y-2 text-sm">
    //         <li><a href="#" className="hover:underline">Starkid App</a></li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
    //   );
    // }
  );
}
