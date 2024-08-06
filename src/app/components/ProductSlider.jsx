"use client";
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const MainProps = [
    {
        id: 0,
        quote: 'UNLEASH YOUR INNER HERO',
        content: 'Made with the finest materials and the latest technology to create durable & convention-safe cosplay.',
        imageSrc: './assets/MainPageProducts/Picture1.png',
        bgcolor: '#F3F4F8',
        txtcolor: '#000000',
        txtcolor1: '#FFFFFF',
        href: '#'
    },
    {
        id: 1,
        quote: 'CUSTOM DESIGNING',
        content: 'Every piece is tailored to your specifications, ensuring a perfect match for your cosplay vision.',
        imageSrc: './assets/MainPageProducts/Picture2.png',
        bgcolor: '#D2D4DA',
        txtcolor: '#000000',
        txtcolor1: '#F1F1F1',
        href: '#'
    },
    {
        id: 2,
        quote: 'ATTENTION TO DETAIL',
        content: 'Made with the finest materials and the latest technology to create durable & convention-safe cosplay.',
        imageSrc: './assets/MainPageProducts/Picture3.png',
        bgcolor: '#5E669D',
        txtcolor: '#FFFFFF',
        txtcolor1: '#FFFFFF',
        href: '#'
    },
    {
        id: 3,
        quote: 'INNOVATE ELECTRONICS',
        content: 'From glowing LED lights and sound effects to motion-activated features, our weapons are designed to dazzle.',
        imageSrc: './assets/MainPageProducts/Picture4.png',
        bgcolor: '#7D68B7',
        txtcolor: '#FFFFFF',
        txtcolor1: '#FFFFFF',
        href: '#'
    },
    {
        id: 4,
        quote: 'RELIABLE SERVICE',
        content: 'Need a last-minute prop? Ensure you receive your gear in time, with all electronics tested and ready to go.',
        imageSrc: './assets/MainPageProducts/Picture5.png',
        bgcolor: '#7E9573',
        txtcolor: '#FFFFFF',
        txtcolor1: '#FFFFFF',
        href: '#'
    }
];

const ProductSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalTime = 3000;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : MainProps.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < MainProps.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, intervalTime);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full overflow-hidden h-[400px] md:h-[552px] lg:h-[552px]">
            {MainProps.map((item, index) => (
                <div
                    key={item.id}
                    style={{ backgroundColor: item.bgcolor }}
                    className={`absolute lg:px-[20px] w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Navigation buttons */}
                    <div
                        style={{ backgroundColor: '#f0f0f0', padding: '5px', borderRadius: '50%' }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 sm:left-10"
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={30} color="#000000" className="md:size-50" />
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-20 lg:px-[200px]">
                        
                        <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }} className="relative flex items-center justify-center w-full h-full card-no-border card-no-radius">
                            {/* Image */}
                            <div className="relative flex-shrink-0 w-full h-full sm:w-full sm:h-full md:w-full md:h-full lg:w-[400px] lg:h-[500px] p-0 flex items-center justify-center">
                                <img 
                                    src={item.imageSrc} 
                                    className="rounded-2xl w-full h-full object-cover border-black sm:card-no-radius md:card-no-radius card-radius" 
                                    alt={item.quote} 
                                />
                                
                                {/* Overlay Content for Small and Medium Devices */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center lg:hidden backdrop-blur-md">
                                    <h1 style={{ color: item.txtcolor1 }} className="text-[18px] sm:text-[24px] font-extralight p-4">Why Choose Bagani Blades?</h1>
                                    <h1 style={{ color: item.txtcolor1 }} className="text-[36px] sm:text-[48px] font-bold leading-tight mt-5 px-[30px] lg:px-0">{item.quote}</h1>
                                    <h2 style={{ color: item.txtcolor1 }} className="font-extralight text-[16px] sm:text-[20px]">{item.content}</h2>
                                </div>
                            </div>

                            {/* Overlay Content for Large Devices */}
                            <div className="flex-col p-4 hidden lg:flex">
                                <h1 style={{ color: item.txtcolor }} className="text-[18px] sm:text-[24px] lg:text-[25px] font-extralight">Why Choose Bagani Blades?</h1>
                                <h1 style={{ color: item.txtcolor }} className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold leading-tight mt-5">{item.quote}</h1>
                                <h2 style={{ color: item.txtcolor }} className="font-extralight text-[16px] sm:text-[20px] lg:text-[20px]">{item.content}</h2>
                            </div>
                        </Card>
                    </div>

                    {/* Navigation buttons */}
                    <div
                        style={{ backgroundColor: '#f0f0f0', padding: '5px', borderRadius: '50%' }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 sm:right-10"
                        onClick={handleNext}
                    >
                        <ChevronRight size={30} color="#000000" className="md:size-50" />
                    </div>
                </div>
                
            ))}
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {MainProps.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-200'} cursor-pointer`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

        </div>
        
    );
};

export default ProductSlider;