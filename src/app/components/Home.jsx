import React from 'react'
import { Button } from "@/components/ui/button"
import ProductCards from './ProductCards'
import ProductSlider from './ProductSlider'
import Testimonial from './Testimonial'
import Newsletter from './Newsletter'
import Link
 from 'next/link'
const Home = () => {
  return (
    <div>
        {/* Banner */}
        <div className="flex flex-col items-center justify-center p-4  bg-[radial-gradient(circle_at_top,_#FFFFFF,_#E0E0E0,_#8F8F8F)] h-[300px] md:h-[552px] lg:h-[552px]">
            <div className="flex items-center transform scale-80">
                <img src="/Banner.svg" alt="" />
            </div>
            <Link href="../shop">
                <Button className="
                bg-[#2c2c2c] text-custom-white 
                hover:bg-[#000000] 
                font-poppins font-semibold 
                text-[20px] md:text-[25px] 
                mt-5 
                px-6 md:px-12 
                py-2 md:py-3 
                w-auto 
                h-auto 
                rounded-[8px] 
                tracking-[3px] md:tracking-[5px]
                ">
                SHOP NOW
                </Button> 
            </Link>
            
        </div> 
        {/* Trend Picks */}
        <div className="relative p-4 rounded-none">
            <h1 className="absolute top-5 left-1/2 transform -translate-x-1/2  text-[22px] lg:text-4xl md:text-4xl  lg:top-10 lg:left-20 lg:translate-x-0 text-center font-semibold">
                Trend Picks for you
            </h1>
            <div className="flex items-center justify-center m-20">
                <ProductCards />
            </div>
        </div>
        {/* Carousel */}
        <div className=''>
            <ProductSlider />
        </div>
        {/* Testimonials */}
        <div className="relative p-4 rounded-none ">
            <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 mb-4 text-[22px] lg:text-4xl md:text-4xl lg:mb-4 lg:top-10 lg:left-20 lg:translate-x-0 text-center font-semibold">
                What Our Clients Say
            </h1>
            <div className="flex items-center justify-center m-20">
                <Testimonial />
            </div>
        </div>
        {/* Newsletter */}
        <div>
            <Newsletter />
        </div>
        {/* Payment */}
        <div className='flex flex-col items-center justify-center'>
            <h1 className="
                mt-4
                text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] 
                px-3 sm:px-4 md:px-6 lg:px-8 
                py-1 sm:py-2 md:py-3 lg:py-4 
                sm:tracking-[3px] md:tracking-[5px] lg:tracking-[10px]
            ">
            AVAILABLE MODE OF PAYMENTS
            </h1>
            <img 
                src="./assets/Contact/Payments.png" 
                alt="Payment Methods"
                className="
                    object-cover 
                    mb-6
                    w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3
                    max-w-full 
                    h-auto
                " 
            />
        </div>


    </div>
  )
}

export default Home