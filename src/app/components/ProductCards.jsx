"use client";

import React from 'react'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
import { Star, ShoppingCart } from 'lucide-react';
import Image from "next/image";

export const ProductList = [
    {
        id: 0,
        name: 'Blade of Olympus - God of War',
        price:'₱5000',
        imageSrc:'/assets/ProductList/item1.png',
        href: '#'
    },
    {
        id: 1,
        name: 'Iron Man Suit Full Body Armor - Iron Man',
        price:'₱50000',
        imageSrc:'/assets/ProductList/item2.png',
        href: '#'
    },
    {
        id: 2,
        name: 'The Dominator - Psycho-Pass',
        price:'₱9000',
        imageSrc:'/assets/ProductList/item3.png',
        href: '#'
    },
    {
        id: 3,
        name: 'Chainsaw - Chainsaw Man',
        price:'₱5000',
        imageSrc:'/assets/ProductList/item4.png',
        href: '#'
    },
    {
        id: 4,
        name: 'ODM Gear - Attack on Titan',
        price:'₱8000',
        imageSrc:'/assets/ProductList/item5.png',
        href: '#'
    },
    {
        id: 5,
        name: 'Hylian Shield - Legend of Zelda',
        price:'₱2000',
        imageSrc:'/assets/ProductList/item6.png',
        href: '#'
    }
];

const ProductCards = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {ProductList.map((item) => (
        <Card
          key={item.id}
          className="m-2 h-[350px] sm:h-[400px] bg-[#F9FAFC] card-no-radius card-no-border"
        >
          <CardHeader className="p-0">
            <Image
              src={item.imageSrc}
              width={500}
              height={500}
              alt={item.name}
              priority={true}
              className="w-full h-[250px] sm:h-[289px] object-cover m-0"
            />

            <CardTitle className="font-light text-[16px] sm:text-[18px] truncate md:px-6 md:text-start text-center">
              {item.name}
            </CardTitle>
            <CardDescription className="text-custom-purple md:px-6 md:text-start text-center">
              {item.price}
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-1 group">
              <Star className="text-yellow-500 fill-yellow-500" />
              <span className="font-light">4.8</span>
            </div>

            <div className="flex items-center gap-1 group">
              <ShoppingCart className="transition-colors duration-300 group-hover:text-custom-purple cursor-pointer" />
              <span className="font-light transition-colors duration-300 group-hover:text-custom-purple cursor-pointer">
                Add to Cart
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ProductCards