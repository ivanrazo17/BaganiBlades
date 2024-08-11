import React from "react";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductData from "../ProductData.js";

const Review = () => {
  // Extract the product name from the URL
  const { name } = useParams();
  // Replace hyphens with spaces if needed
  const formattedName = name.replace(/-/g, " ");
  // Fetch the product data based on the formatted name
  const product = ProductData.find((product) => product.name === formattedName);

  return (
    <>
      <h1 className="font-semibold text-lg p-2 my-4">Review</h1>
      {product.reviews.map((review, index) => (
        <div key={index} className="mb-6 w-full md:w-4/5 px-4">
          <div className="flex flex-col md:flex-row items-start gap-2">
            <div className="relative w-[40px] h-[40px]">
              <Image
                src="/assets/Testimonials/Testimonial1.png"
                alt={review.author}
                layout="fill"
                objectFit="cover"
                priority={true}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col w-full md:w-[300px]">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="text-yellow-500 fill-yellow-500 h-3 w-3"
                    />
                  ))}
                </div>
                <p className="mt-1">{review.author}</p>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-[500px]">
              <p className="font-bold">{review.title}</p>
              <p>{review.text}</p>
            </div>
          </div>
          <hr className="my-5" />
        </div>
      ))}
    </>
  );
};

export default Review;
