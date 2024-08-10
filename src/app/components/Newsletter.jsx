import React from 'react'
import { Button } from "@/components/ui/button"

const Newsletter = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
        <img 
            src="/assets/Contact/Newsletter.png" 
            alt="Newsletter Background" 
            className="absolute inset-0 w-full h-full object-cover object-bottom" 
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_#000000_0%,_#2F3037_80%)] opacity-60"></div>

        <div className="flex flex-col items-center justify-center relative z-10 h-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="text-center">
                <h1 className='
                    text-custom-white
                    text-[32px] sm:text-[36px] md:text-[40px] lg:text-[60px]
                    font-extrabold
                    tracking-[10px] sm:tracking-[15px] md:tracking-[20px] lg:tracking-[30px]
                    leading-tight
                '>Cosplay is Art!</h1>

                <h2 className='
                    text-custom-white
                    text-[16px] sm:text-[18px] md:text-[20px] lg:text-[30px]
                    max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[800px]
                    mt-4 sm:mt-6 md:mt-8
                    mx-auto
                '>Step into the world of imagination and become your character you love and admire.</h2>
            </div>

            <Button className="
                bg-transparent text-custom-white 
                border-2 border-custom-white
                hover:bg-[#1E1E1E] 
                font-medium
                text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] 
                px-3 sm:px-4 md:px-6 lg:px-8 
                py-1 sm:py-2 md:py-3 lg:py-4 
                rounded-[8px] 
                tracking-[0.5px] sm:tracking-[1px] md:tracking-[1.5px] lg:tracking-[2px]
            ">
            SUBSCRIBE TO OUR NEWSLETTER
            </Button>
        </div>
    </div>
  )
}

export default Newsletter
