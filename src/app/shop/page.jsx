"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import Footer from "../components/Footer";
import Image from "next/image";

export const ProductList = [
  {
    id: 0,
    name: "Blade of Olympus - God of War",
    price: "₱5000",
    imageSrc: "/assets/ProductList/item1.png",
    category: "Melee",
    href: "Blade of Olympus God of War",
  },
  {
    id: 1,
    name: "Iron Man Suit Full Body Armor - Iron Man",
    price: "₱50000",
    imageSrc: "/assets/ProductList/item2.png",
    category: "Armor",
    href: "Iron Man Suit Full Body Armor Iron Man",
  },
  {
    id: 2,
    name: "The Dominator - Psycho-Pass",
    price: "₱9000",
    imageSrc: "/assets/ProductList/item3.png",
    category: "Firearms",
    href: "The Dominator Psycho-Pass",
  },
  {
    id: 3,
    name: "Chainsaw - Chainsaw Man",
    price: "₱5000",
    imageSrc: "/assets/ProductList/item4.png",
    category: "Melee",
    href: "Chainsaw Chainsaw Man",
  },
  {
    id: 4,
    name: "ODM Gear - Attack on Titan",
    price: "₱8000",
    imageSrc: "/assets/ProductList/item5.png",
    category: "Melee",
    href: "ODM Gear Attack on Titan",
  },
  {
    id: 5,
    name: "Hylian Shield - Legend of Zelda",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item6.png",
    category: "Shields",
    href: "Hylian Shield Legend of Zelda",
  },
  {
    id: 6,
    name: "Kaigaku Sword - Demon Slayer",
    price: "₱1000",
    imageSrc: "/assets/ProductList/item7.png",
    category: "Melee",
    href: "Kaigaku Sword Demon Slayer",
  },
  {
    id: 7,
    name: "Ebony and Ivory - Devil May Cry",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item8.png",
    category: "Firearms",
    href: "Ebony and Ivory Devil May Cry",
  },
  {
    id: 8,
    name: "Cannon Mina Ashiro - Kaiju No.8",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item9.png",
    category: "Firearms",
    href: "Cannon Mina Ashiro Kaiju No.8",
  },
  {
    id: 9,
    name: "Staff of Homa - Genshin Impact",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item10.png",
    category: "Polearms",
    href: "Staff of Homa Genshin Impact",
  },
  {
    id: 10,
    name: "Divine Axe Rhitta - Seven Deadly Sins",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item11.png",
    category: "Melee",
    href: "Divine Axe Rhitta Seven Deadly Sins",
  },
  {
    id: 11,
    name: "VCT LOCK//IN Knife - Valorant",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item12.png",
    category: "Melee",
    href: "VCT LOCKIN Knife Valorant",
  },
  {
    id: 12,
    name: "Sentinel of Light Vandal - Valorant",
    price: "₱5000",
    imageSrc: "/assets/ProductList/item13.png",
    category: "Firearms",
    href: "Sentinel of Light Vandal Valorant",
  },
  {
    id: 13,
    name: "Saw Cleaver - Bloodborne",
    price: "₱7000",
    imageSrc: "/assets/ProductList/item14.png",
    category: "Melee",
    href: "Saw Cleaver Bloodborne",
  },
  {
    id: 14,
    name: "Moon Stick Wand - Sailor Moon",
    price: "₱2000",
    imageSrc: "/assets/ProductList/item15.png",
    category: "Staves",
    href: "Moon Stick Wand Sailor Moon",
  },
];

const ProductCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = ProductList.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <>
      <div className="flex px-10 py-8 gap-10">
        <div className="w-[300px]">
          <h1 className="text-[25px] font-extrabold text-center mb-4">
            FEATURED PRODUCTS
          </h1>
          <hr className="w-[200px] mx-auto block" />
          <h1 className="text-[20px] font-extrabold mt-4 mb-4">
            Categories
          </h1>
          <div className="font-extralight flex flex-col gap-2">
            {["All", "Melee", "Firearms", "Staves", "Polearms", "Shields", "Armor"].map((category) => (
              <h1
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`category-underline hover:text-custom-purple cursor-pointer ${selectedCategory === category ? 'text-custom-purple' : ''}`}
              >
                {category}
              </h1>
            ))}
            <Link href='/contact'>
              <h1 className="category-underline hover:text-custom-purple cursor-pointer">
                Made to Order | Customize
              </h1>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {filteredProducts.map((item) => (
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
    </>
  );
};

export default ProductCards;
