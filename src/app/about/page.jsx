import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';
import Image from 'next/image';

function Page() {
  return (
    <>
      {/* About Us Hero Banner */}
      <div className="relative h-[500px] md:h-[725px] lg:h-[725px] w-full">
        <Image
          src="/assets/AboutUs/AboutBG.png"
          alt="Banner"
          priority={true}
          layout="fill"
          className="-z-10 object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center bottom-8 lg:bottom-20 w-full z-10">
          <Image
                src="/assets/AboutUs/Logo.png"
                width={60} 
                height={60}
                alt="Banner"
                priority={true}
                className="block md:hidden"
          />
          <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2">
              At Bagani Blades
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-2">
            <Image
              src="/assets/AboutUs/Logo.png"
              width={80}
              height={80}
              alt="Banner"
              priority={true}
              className="hidden md:block"
            />
          
            <p className="text-center font-light sm:text-xl md:text-2xl md:w-1/2 lg:text-1xl px-4 lg:px-8 md:px-0 w-full mt-6 md:mt-10 lg:mt-20">
              Our mission is to provide high-quality, custom-made cosplay
              weapons that elevate your character’s authenticity and your
              overall experience at conventions, photoshoots, and beyond.
            </p>             
            <Image
                src="/assets/AboutUs/Logo.png"
                width={80}
                height={80}
                alt="Banner"
                priority={true}
                className="hidden md:block"
            />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col w-full h-full justify-center items-center mb-10">
        <div className="flex justify-center items-center w-full md:w-1/2 h-full">
          <Image
            src="/assets/AboutUs/AboutPerson.png"
            width={600}
            height={600}
            alt="Banner"
            priority={true}
            className="md:px-4 md:py-8"
          />
        </div>
        <div className="md:w-1/2 w-full h-full flex flex-col justify-center space-y-8 md:space-y-10 mt-6 md:mt-0 m-8">
          <h1 className="font-bold text-4xl sm:text-3xl md:text-4xl text-center">
            Who are we?
          </h1>
          <p className="font-medium text-xl sm:text-2xl md:text-3xl text-center md:text-start leading-relaxed">
            Bagani Blades is the leading cosplay e-commerce platform in the
            Philippines.
          </p>
          <p className="font-extralight text-lg sm:text-xl md:text-2xl text-center md:text-start leading-relaxed">
            Founded by passionate cosplayers and skilled craftsmen, our goal is
            to blend creativity with precision. We specialize in crafting
            unique, detailed weapons that enhance your cosplay with
            authenticity.
          </p>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}

export default Page;
