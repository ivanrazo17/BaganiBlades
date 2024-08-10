import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';
import Image from 'next/image';


function page() {
  return (
    <>
      <Navbar />

      {/* About Us Hero Banner */}
      <div className="relative h-[725px] w-full">
        <Image
          src="/assets/AboutUs/AboutBG.png"
          layout="fill"
          alt="Banner"
          priority={true}
          className="-z-10"
        />

        <div className="absolute flex flex-col justify-center items-center bottom-12 w-full z-10">
          <h1 className="text-center font-poppins font-bold md:text-6xl text-4xl px-2">
            At Bagani Blades
          </h1>
          <div className="flex flex-row justify-center items-center gap-2 ">
            <Image
              src="/assets/AboutUs/Logo.png"
              width={80}
              height={80}
              alt="Banner"
              priority={true}
              className="hidden md:block"
            />
            <p className="text-center font-poppins font-light md:text-2xl md:w-1/2 px-8 md:px-0 w-full mt-20">
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
        <div className="flex justify-center items-center w-1/2 h-full ">
          <Image
            src="/assets/AboutUs/AboutPerson.png"
            width={600}
            height={600}
            alt="Banner"
            priority={true}
            className="md:px-4 md:py-8"
          />
        </div>
        <div className="md:w-1/2 w-full h-full flex flex-col justify-center space-y-10 mt-8 md:mt-0">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-center">
            Who are we?
          </h1>
          <p className="font-poppins font-medium text-3xl md:px-10 w-full px-2 md:text-start text-center leading-relaxed">
            Bagani Blades is the leading cosplay e-commerce platform in the
            Philippines.
          </p>
          <p className="font-poppins font-extralight text-2xl md:px-10 px-4 w-full md:text-start text-center leading-relaxed">
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

export default page