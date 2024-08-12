"use client";
import React from 'react'
import { Bebas_Neue } from "next/font/google";
import Link from 'next/link';
import Image from "next/image";

const bebas_neue = Bebas_Neue({ weight: '400', subsets: ["latin"] });

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <h1
          className={`${bebas_neue.className} text-3xl md:text-4xl lg:text-5xl font-bold flex items-center`}
        >
          <span>BAGANI</span>
          <Image
            src="/Logo.svg"
            width={50}
            height={50}
            alt="Logo"
            className="h-12 md:h-14 lg:h-20 transform -translate-y-3 md:-translate-y-3.5 lg:-translate-y-5 -mx-3.5 md:-mx-2.5 lg:-mx-3.1"
            priority={true}
          />
          <span>BLADES</span>
        </h1>
      </Link>
    </div>
  );
}

export default Logo