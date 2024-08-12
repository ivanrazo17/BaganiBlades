"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import Footer from "../components/Footer";
import Image from "next/image";
import ProductList from "./ProductList";

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
      <div className="flex flex-col md:flex-row my-6">
        <div className="w-full md:w-[300px] p-10">
          <h1 className="text-[22px] md:text-[25px] font-extrabold text-center mb-4">
            FEATURED PRODUCTS
          </h1>
          <hr className="w-[100px] md:w-[200px] mx-auto block" />
          <h1 className="text-[18px] md:text-[20px] font-extrabold mt-4 mb-4">
            Categories
          </h1>
          <div className="font-extralight flex flex-col gap-2">
            {[
              "All",
              "Melee",
              "Firearms",
              "Staves",
              "Polearms",
              "Shields",
              "Armor",
            ].map((category) => (
              <h1
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`category-underline hover:text-custom-purple cursor-pointer ${
                  selectedCategory === category ? "text-custom-purple" : ""
                }`}
              >
                {category}
              </h1>
            ))}
            <Link href="/contact">
              <h1 className="category-underline hover:text-custom-purple cursor-pointer">
                Made to Order | Customize
              </h1>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item) => (
              <Link
                href={`/shop/${item.href.replace(/ /g, "-")}`}
                key={item.id}
              >
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
