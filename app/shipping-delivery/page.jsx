import Footer from '@/components/Footer'
import MainFooter from '@/components/MainFooter'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import partner1 from '../../public/partner1.svg'
import partner2 from '../../public/partner2.svg'
import partner3 from '../../public/partner3.svg'
function page() {
  return (
    <>
      <Navbar/>

      <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shipping and Delivery</h1>
      
      <section className="mb-6">
        <p>Star Kid is an educational application. Shipping and Delivery is not applicable to our business.</p>
      </section>

      </div>

      <MainFooter/>
  <Footer/>
    </>
  
  )
}

export default page
