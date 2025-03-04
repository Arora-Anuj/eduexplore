// "use client";

// import { useState } from "react";
// import up from "@/public/asset/up.png";
// import down from "@/public/asset/down.png";
// import Image from "next/image";
// import localFont from "next/font/local";
// import { Public_Sans } from "next/font/google";

// const publicaSans = localFont({
//   src: "../../public/fonts/PublicaSans.otf",
// });
// const caros = localFont({
//   src: "../../public/fonts/Caros.otf",
// });

// const faqs = [
//   { question: "What happens after I register?" },
//   { question: "Can I get a refund if my child decides not to participate?" },
//   { question: "How will I know if my payment is secure?" },
//   { question: "Are there any special offers for multiple contest entries?" },
// ];

// const description =
//   "Unfortunately, we do not offer refunds once the registration process is completed. However, if you face any issues, feel free to reach out to us, and we’ll try our best to assist you.";

// export default function Faq({ pricing, success }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div
//       className={`w-full ${
//         !pricing ? "md:bg-[#EEEFFC]" : "md:bg-[#1B1D30]"
//       }  flex items-center justify-center flex-col text-black`}
//     >
//       <h2
//         className={`${
//           publicaSans.className
//         } text-[24px] lg:text-[57px] lg:text-center  font-semibold mb-6  mt-10 lg:my-[61px] w-[90%] md:w-[80%] leading-[25px] tracking-[-0.41px] ${
//           pricing ? "md:text-[#EEEFFC]" : "md:text-[#1B1D30]"
//         } ${success ? "text-[#1B1D30]" : "text-[#EEEFFC]"} `}
//       >
//         Frequently asked questions <span className="text-[#D73970]">(FAQ)</span>
//       </h2>
//       <div className=" w-full items-center justify-center flex flex-col gap-3 mb-10 md:mb-24">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={` ${caros.className} bg-[#CBCDE6] p-4 lg:py-[21px] lg:px-[39px] rounded-lg w-[90%] md:w-[80%]`}
//           >
//             <div className="w-full flex justify-between items-start gap-2 text-sm sm:text-lg font-semibold">
//               <p
//                 onClick={() => toggleFAQ(index)}
//                 className=" text-[13px] lg:text-2xl font-semibold cursor-pointer"
//               >
//                 {faq.question}
//               </p>
//               {openIndex === index ? (
//                 <Image
//                   src={up}
//                   alt="up"
//                   className=" w-[20px] h-[20px] lg:h-[32px] lg:w-[32px] "
//                   onClick={() => toggleFAQ(index)}
//                 />
//               ) : (
//                 <Image
//                   src={down}
//                   alt="down"
//                   className=" w-[20px] h-[20px] lg:h-[32px] lg:w-[32px] "
//                   onClick={() => toggleFAQ(index)}
//                 />
//               )}
//               {/* </button> */}
//             </div>
//             {openIndex === index && (
//               <p className="mt-2 font-normal text-xs lg:text-2xl -tracking-[2%] leading-normal ">
//                 {description}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

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
  {
    question: "Is it an online competition?",
    answer:
      "Yes, it is an online competition, and children from all over India participate on our platform.",
  },
  {
    question: "How to Participate?",
    answer:
      "You'll need to submit a recorded video/photo online through our form, which will be shared with you after registration.",
  },
  {
    question: "What is the last date to register?",
    answer:
      "We take limited entries, so register quickly. After registration, you can submit the video/photo till 31st March.",
  },
  {
    question: "How to Register?",
    answer:
      "Click on Register Now, Choose Your Competitions, and Complete the Payment.",
  },
  {
    question: "Is there any fee?",
    answer:
      "Yes, we have minimal fees required for us to bring Expert Judges, share feedback and distribute medals.",
  },
  {
    question: "What happens after I register?",
    answer:
      "You will receive the Participation Link where you have to submit the video by 31st March.",
  },
  {
    question: "Do I get a participation certificate?",
    answer:
      "Yes, everyone gets an e-participation certificate. Winners get physical certificates and medals.",
  },
  {
    question: "Where is your office?",
    answer: "We are based out of Mumbai.",
  },
];

export default function Faq({ pricing, success }) {
  const [openIndex, setOpenIndex] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
        } text-[24px] lg:text-[57px] lg:text-center  font-semibold mb-6  mt-10 lg:my-[61px] w-[90%] md:w-[80%] leading-[25px] tracking-[-0.41px] ${
          pricing ? "md:text-[#EEEFFC]" : "md:text-[#1B1D30]"
        } ${success ? "text-[#1B1D30]" : "text-[#EEEFFC]"} `}
      >
        Frequently asked questions <span className="text-[#D73970]">(FAQ)</span>
      </h2>
      <div className=" w-full items-center justify-center flex flex-col gap-3 mb-10 md:mb-24">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={` ${caros.className} bg-[#CBCDE6] p-4 lg:py-[21px] lg:px-[39px] rounded-lg w-[90%] md:w-[80%]`}
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between cursor-pointer items-start gap-2 text-sm sm:text-lg font-semibold"
            >
              <p className=" text-[13px] lg:text-2xl font-semibold">
                {faq.question}
              </p>
              {openIndex.includes(index) ? (
                <Image
                  src={up}
                  alt="up"
                  className=" w-[20px] h-[20px] lg:h-[32px] lg:w-[32px] "
                  onClick={() => toggleFAQ(index)}
                />
              ) : (
                <Image
                  src={down}
                  alt="down"
                  className=" w-[20px] h-[20px] lg:h-[32px] lg:w-[32px] "
                  onClick={() => toggleFAQ(index)}
                />
              )}
            </div>
            {openIndex.includes(index) && (
              <p className="mt-2 font-normal text-xs lg:text-2xl -tracking-[2%] leading-normal ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
