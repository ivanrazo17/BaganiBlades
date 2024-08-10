"use client";

import React from 'react'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
import { Star } from 'lucide-react';
import Image from "next/image";

export const ProductList = [
    {
        id: 0,
        title: 'Perfect Dragon Slayer Replica!',
        message:'"Bagani Blades nailed the Dragon Slayer from Berserk! Incredible detail and quality. Highly recommend for any serious cosplayer."',
        name:'ShadowBlade',
        profession:'Cosplayer',
        imageSrc:'/assets/Testimonials/Testimonial1.png',
        href: '#'
    },
    {
        id: 1,
        title: 'Beautiful Nichirin Blade!',
        message:'"My Nichirin Blade from Demon Slayer is perfect! Amazing craftsmanship and looks just like in the anime."',
        name:'StarryNights',
        profession:'Cosplayer',
        imageSrc:'/assets/Testimonials/Testimonial2.png',
        href: '#'
    },
    {
        id: 2,
        title: 'Incredible Gunblade Quality!',
        message:'"Got a Gunblade from Final Fantasy VIII. Excellent quality and detail. Customer service was great and resolved minor issues quickly."',
        name:'BulletStorm',
        profession:'Cosplayer',
        imageSrc:'/assets/Testimonials/Testimonial3.png',
        href: '#'
    }
];

const TestimonialCards = () => {
    return (
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-10 mt-10">
        {ProductList.map((item) => (
          <Card
            key={item.id}
            className="card-no-border w-80 md:w-full lg:w-full"
          >
            <div className="flex items-center gap-1 group px-4 pt-4">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            <CardHeader className="p-4">
              <CardTitle className="font-semibold text-[20px]">
                {item.title}
              </CardTitle>

              <CardDescription className="mt-2">{item.message}</CardDescription>
            </CardHeader>

            <CardFooter className="flex items-center pt-4 px-4">
              <div className="flex items-center">
                <Image
                  src={item.imageSrc}
                  width={500}
                  height={500}
                  alt={item.name}
                  priority={true}
                  className="w-10 h-10 rounded-full object-cover"
                />
                
                <div className="flex flex-col items-start ml-3">
                  <span className="font-semibold text-[15px]">{item.name}</span>
                  <span className="text-sm text-gray-600">
                    {item.profession}
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };
  
  export default TestimonialCards;
