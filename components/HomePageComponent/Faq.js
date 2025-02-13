"use client";

import { useState } from "react";
import up from "@/public/asset/up.png";
import down from "@/public/asset/down.png";
import Image from "next/image";
import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});
const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

const faqs = [
  { question: "What happens after I register?" },
  { question: "Can I get a refund if my child decides not to participate?" },
  { question: "How will I know if my payment is secure?" },
  { question: "Are there any special offers for multiple contest entries?" },
];

const description =
  "Unfortunately, we do not offer refunds once the registration process is completed. However, if you face any issues, feel free to reach out to us, and we’ll try our best to assist you.";

export default function Faq({ pricing, success }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`w-full ${
        !pricing ? "md:bg-[#EEEFFC]" : "md:bg-[#1B1D30]"
      }  flex items-center justify-center flex-col text-black`}
    >
      <h2
        className={`${
          publicaSans.className
        } text-[24px] font-medium mb-6  mt-10 w-[90%] md:w-[80%] leading-[25px] tracking-[-0.41px] ${
          pricing ? "md:text-[#EEEFFC]" : "md:text-[#1B1D30]"
        } ${success ? "text-[#1B1D30]" : "text-[#EEEFFC]"} `}
      >
        Frequently asked questions <span className="text-[#D73970]">(FAQ)</span>
      </h2>
      <div className=" w-full items-center justify-center flex flex-col gap-3 mb-10 md:mb-24">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={` ${caros.className} bg-[#CBCDE6] p-4 rounded-lg w-[90%] md:w-[80%]`}
          >
            <div className="w-full flex justify-between items-start gap-2 text-sm sm:text-lg font-semibold">
              <p
                onClick={() => toggleFAQ(index)}
                className=" text-[13px] lg:text-xl font-semibold cursor-pointer"
              >
                {faq.question}
              </p>
              {openIndex === index ? (
                <Image
                  src={up}
                  alt="up"
                  width={20}
                  onClick={() => toggleFAQ(index)}
                />
              ) : (
                <Image
                  src={down}
                  alt="down"
                  width={20}
                  onClick={() => toggleFAQ(index)}
                />
              )}
              {/* </button> */}
            </div>
            {openIndex === index && (
              <p className="mt-2 font-normal text-xs lg:text-xl -tracking-[2%] leading-normal ">
                {description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
