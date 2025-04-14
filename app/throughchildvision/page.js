
import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import about1 from '../../public/about1.svg'
import about2 from '../../public/about2.svg'
function page() {
  return (<>
  <Navbar/>

  <section >
    <div>

    
    <div className='font-semibold text-[24px] sm:text-[40px]
     text-center  mt-16 sm:leading-[52px] mx-6 sm:mx-0'>
      <h1> An end-to-end learning and talent</h1>
      <h1> management for new age schools</h1>
    </div>
    <div className='text-base sm:text-xl text-center 
    text-[#475467] mt-6 font-medium
    mx-6 sm:mx-8 lg:mx-0 '>
     <p> My Talent is connecting schools  
      <span className='relative'>

      <span className=''>
       {" "} across India {" "} 
        </span> 
        <Image
        className='absolute top-[18px] left-[-4px] w-full'
        src="/greenLine.svg"
        alt="greenline"
        width={100}
        height={100}
        />
      </span>
      
    {" "}  and helping</p>
     <p>


      <span className=''>
   their students to find and
      </span> 
      <span className='relative '>
      
     {" "}  showcase their unique talent.
     <Image
        className='absolute top-[16px] left-0 w-full'
        src="/greenLine.svg"
        alt="greenline"
        width={100}
        height={100}
        />
      </span>
      </p>
    </div>
    </div>



<div className='grid sm:grid-cols-2 grid-cols-1
 mt-[140px] mx-6 sm:mx-8 lg:mx-[140px] lg:gap-16 xl:gap-12'>
    <div className='xl:mt-24' > 
    <h1 className='font-semibold text-[24px] pb-6 sm:pb-0 sm:text-[40px] '>
    About MyTalent
      </h1> 
      <p className='text-[#475467] text-[16px] sm:text-xl pb-8 sm:pb-0'>
      My Talent is an innovative platform that empowers schools to discover, nurture, and showcase the unique talents of their students. By providing engaging competitions and personalized feedback, we help schools celebrate achievements and foster growth. Our platform creates a vibrant community where every student's talent can shine, enhancing their educational journey and boosting school pride.

      </p>
    </div>
    <div className='w-full h-full '>
      <Image
      src={about1}
      alt="about1"
      />
    </div>

    </div> 




    <div className='bg-[#F1ECFD] mx-4  md:mx-28 xl:mx-64 h-full py-20 
     mt-20  rounded-3xl'>
          <h1 className='text-[24px] sm:text-[40px]
           font-semibold text-center pb-4 sm:pb-0'>
            <span className='relative'>

            <span className=''>Our Mission </span>
            
            <Image
            className='absolute top-[-70%] right-[-12%] w-[34px] sm:w-[50px]'
            src="/textWithStars.svg"
            alt="stars"
            width={50}
            height={100}
            />
            </span>
            
          </h1>
          <p className='text-[#475467] text-[16px] sm:text-xl px-4 text-justify sm:px-16 sm:text-center'>
          “Our mission is to empower young minds by providing them with opportunities to participate in diverse challenges and competitions, enabling them to explore and develop their skills in a supportive and engaging environment.”
          </p>
    </div>



    <div className='grid sm:grid-cols-2 grid-cols-1
 mt-[100px] sm:mt-[180px] mx-12 lg:mx-[140px] lg:gap-16 xl:gap-12'>
    
    <div className='w-full h-full '>
      <Image
      src={about2}
      alt="about1"
      />
    </div>

    <div className='xl:mt-24 mt-8' > 
    <h1 className='font-semibold text-[24px] sm:text-[40px] '>
      Our belief
      </h1> 
      <p className='text-[#475467] text-[16px] sm:text-xl'>
      We believe that every child has untapped potential, and our goal is to help them discover and hone their talents. By connecting students, teachers, and parents, My Talent fosters a community where every achievement is valued, and every student has the chance to shine. Join us in creating a brighter future, one talent at a time.

      </p>
    </div>

    </div> 



  </section>

  <MainFooter/>
  <Footer/>
  </>
  )
}

export default page
