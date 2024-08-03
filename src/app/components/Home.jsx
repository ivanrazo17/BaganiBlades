import React from 'react'
import { Button } from "@/components/ui/button"
import ProductCards from './ProductCards'


const Home = () => {
  return (
    <div>
        {/* Banner */}
        <div className="flex flex-col items-center justify-center p-4 bg-[radial-gradient(circle_at_top,_#FFFFFF,_#E0E0E0,_#8F8F8F)] h-[552px]">
            <div className="flex items-center transform scale-80">
                <img src="/Banner.svg" alt="" />
            </div>
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
        </div> 

        <div className="relative p-4 rounded-none">
            <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 mb-4 text-[22px] lg:text-4xl md:text-4xl lg:mb-4 lg:top-10 lg:left-20 lg:translate-x-0 text-center font-semibold">
                Trend Picks for you
            </h1>
            <div className="flex items-center justify-center m-20">
                <ProductCards />
            </div>
        </div>


 
    </div>
  )
}

export default Home