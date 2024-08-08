"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export const ProductList = [
  {
    id: 0,
    name: "Blade of Olympus - God of War",
    price: "₱5000",
    imageSrc: "/assets/ProductList/item1.png",
    href: "Blade of Olympus God of War",
  },
  {
    id: 1,
    name: "Iron Man Suit Full Body Armor - Iron Man",
    price: "₱50000",
    imageSrc: "/assets/ProductList/item2.png",
    href: "Iron Man Suit Full Body Armor Iron Man",
  },
  {
    id: 2,
    name: "The Dominator - Psycho-Pass",
    price: "₱9000",
    imageSrc: "/assets/ProductList/item3.png",
    href: "The Dominator Psycho-Pass",
  },
  {
    id: 3,
    name: "Chainsaw - Chainsaw Man",
    price: "₱5000",
    imageSrc: "/assets/ProductList/item4.png",
    href: "Chainsaw Chainsaw Man",
  },
  {
    id: 4,
    name: "ODM Gear - Attack on Titan",
    price: "₱8000",
    imageSrc: "/assets/ProductList/item5.png",
    href: "ODM Gear Attack on Titan",
  },
  {
    id: 5,
    name: "Hylian Shield - Legend of Zelda",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item6.png",
    href: "Hylian Shield Legend of Zelda",
  },
  {
    id: 6,
    name: "Kaigaku Sword - Demon Slayer",
    price: "₱1000",
    imageSrc: "/assets/ProductList/item7.png",
    href: "Kaigaku Sword Demon Slayer",
  },
  {
    id: 7,
    name: "Ebony and Ivory - Devil May Cry",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item8.png",
    href: "Ebony and Ivory Devil May Cry",
  },
  {
    id: 8,
    name: "Cannon Mina Ashiro - Kaiju No.8",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item9.png",
    href: "Cannon Mina Ashiro Kaiju No.8",
  },
  {
    id: 9,
    name: "Staff of Homa - Genshin Impact",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item10.png",
    href: "Staff of Homa Genshin Impact",
  },
  {
    id: 10,
    name: "Divine Axe Rhitta - Seven Deadly Sins",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item11.png",
    href: "Divine Axe Rhitta Seven Deadly Sins",
  },
  {
    id: 11,
    name: "VCT LOCK//IN Knife - Valorant",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item12.png",
    href: "VCT LOCKIN Knife Valorant",
  },
  {
    id: 12,
    name: "Sentinel of Light Vandal - Valorant",
    price: "₱5000",
    imageSrc: "/assets/ProductList/item13.png",
    href: "Sentinel of Light Vandal Valorant",
  },
  {
    id: 13,
    name: "Saw Cleaver - Bloodborne",
    price: "₱7000",
    imageSrc: "/assets/ProductList/item14.png",
    href: "Saw Cleaver Bloodborne",
  },
  {
    id: 14,
    name: "Moon Stick Wand - Sailor Moon",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item15.png",
    href: "Moon Stick Wand Sailor Moon",
  },
];

const ProductCards = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col-2 px-10">
        <div className="w-[600px] mt-8 ">
          <h1 className="text-[25px] font-extrabold text-center mb-4">
            FEATURED PRODUCTS
          </h1>
          <hr className="w-[200px] mx-auto block" />
          <h1 className="text-[20px] font-extrabold mt-4 mb-4 pl-[70px]">
            Categories
          </h1>
          <div className="font-extralight flex flex-col gap-2 m-0 pl-[70px]">
            <h1 className="category-underline hover:text-custom-purple cursor-pointer">
              Melee
            </h1>
            <h1 className="category-underline hover:text-custom-purple cursor-pointer">
              Firearms
            </h1>
            <h1 className="category-underline hover:text-custom-purple cursor-pointer">
              Staves
            </h1>
            <h1 className="category-underline hover:text-custom-purple cursor-pointer">
              Polearms
            </h1>
            <h1 className="category-underline hover:text-custom-purple cursor-pointer">
              Shields
            </h1>
            <h1 className="category-underline hover:text-custom-purple cursor-pointer">
              Armor
            </h1>
            <h1 className="category-underline hover:text-custom-purple cursor-pointer">
              Made to Order | Customize
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center m-5">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {ProductList.map((item) => (
              <Link
                href={`/shop/${item.href.replace(/ /g, "-")}`}
                key={item.id}
              >
                <Card
                  key={item.id}
                  className="w-full h-[400px] bg-[#F9FAFC] card-no-radius card-no-border"
                >
                  <CardHeader className="p-0">
                    <Image
                      src={item.imageSrc}
                      width={500}
                      height={500}
                      alt={item.name}
                      priority={true}
                      className="w-full h-[289px] object-cover m-0"
                    />
                    <CardTitle className="font-light text-[18px] truncate mx-6">
                      {item.name}
                    </CardTitle>
                    <CardDescription className="text-custom-purple ml-6">
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
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCards;
