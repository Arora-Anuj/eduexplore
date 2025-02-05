import { Outfit ,Inter } from "next/font/google";
import "./globals.css";



const outfit = Outfit({ subsets: ["latin"], 
  weight:['100','200','300','400','500','600','700','800'],
  variable:'--font-outfit',
});

export const metadata = {
  title: "StarKid",
  description: "StarKid is connecting schools across India and helping their students to find and showcase their unique talent.",
  other:{
    // 'theme-color':'#0d1117',
    'theme-color':'#f5f6f9',
    // 'og:url':'https://www.eduexplore.in',
    'og:url':'https://eduexplore.in/mytalent',
    'og:image':'https://i.ibb.co/PD7YPG2/Group-1000008179.png',
    'twitter:image':'https://i.ibb.co/PD7YPG2/Group-1000008179.png',
    'twitter:card':'summary_large_image',
    'og:type':'website',
    

  }

  
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}
