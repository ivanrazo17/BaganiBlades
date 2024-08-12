import React from 'react'
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from "../../../components/ui/button"
import Image from 'next/image'
import ProductData from '../ProductData.js';

const ProductMenu = () => {
    // Extract the product name from the URL
    const { name } = useParams(); 
    // Replace hyphens with spaces if needed
    const formattedName = name.replace(/-/g, ' ');
    // Fetch the product data based on the formatted name
    const product = ProductData.find(product => product.name === formattedName);
    // Initial quantity set to 1
    const [quantity, setQuantity] = useState(1); 
    // Handle increment
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    // Handle decrement
    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    // For no product found
    if (!product) {
        return <div>Product not found</div>;
    }
    
    return (
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[508px] gap-2 justify-center items-center px-10">
{/* Vertical Images (for md and larger devices) */}
<div className='hidden lg:flex flex-col w-[80px] h-full mr-2'>
    {[...Array(4)].map((_, index) => (
        <div key={index} className='relative w-[80px] h-[80px] mb-2'>
            <Image
                src={product.image} 
                alt={product.name}                  
                layout="fill"                 
                objectFit="cover"
                priority={true}
            />
        </div>
    ))}
</div>

{/* Main Image (for md and larger devices with different sizes) */}
<div className='relative hidden lg:block md:w-[450px] md:h-[360px] lg:w-[600px] lg:h-[508px]'>
    <Image
        src={product.image} 
        alt={product.name} 
        layout="fill"                 
        objectFit="cover"
        priority={true}
    />
</div>

{/* Horizontal Images (for sm devices only) */}
<div className='lg:hidden flex flex-col gap-2 justify-center items-center'>
    <Image
        src={product.image}
        alt={product.name}
        width={350}
        height={350}
        objectFit="cover"
        priority={true}
    />
    <div className="flex flex-row w-full gap-4 justify-center items-center">
        {[...Array(4)].map((_, index) => (
            <div
                key={index}
                className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-2"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
            </div>
        ))}
    </div>
</div>



        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl mb-2 text-[#09761C]">In Stock</h1>
          <h1 className="text-3xl font-semibold mb-2 text-center">{product.name}</h1>
          <div className="price text-2xl font-medium mb-4 text-custom-purple">
            {product.price}
          </div>
          <h2 className="text-xl font-semibold mb-2">Quantity</h2>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Button
              onClick={handleDecrement}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 text-black rounded-full"
            >
              -
            </Button>
            <span className="text-xl">{quantity}</span>
            <Button
              onClick={handleIncrement}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 text-black rounded-full"
            >
              +
            </Button>
          </div>
          <div className="flex lg:flex-row flex-col gap-4">
            <Button className="w-[200px] py-2 px-4 text-white bg-custom-purple rounded-[10px] cursor-pointer">
              Buy Now
            </Button>
            <Button className="w-[200px] py-2 px-4 text-black bg-[#E4D6D6] rounded-[10px] cursor-pointer">
              Add to Cart
            </Button>
          </div>

          <div className="w-[315px] text-[11px] text-[#464545] mt-4 grid grid-cols-2 gap-x-0">
            <div className="flex flex-col">
              <p>
                <span className="font-extralight">Ships from </span>
              </p>
              <p>
                <span className="font-extralight">Sold by</span>
              </p>
              <p>
                <span className="font-extralight">Returns</span>
              </p>
              <p>
                <span className="font-extralight">Packaging</span>
              </p>
              <p>
                <span className="font-extralight">Payment</span>
              </p>
            </div>
            <div className="flex flex-col">
              <p>
                <span>Bagani Blades</span>
              </p>
              <p>
                <span>Bagani Blades</span>
              </p>
              <p>
                <span className="underline text-custom-purple cursor-pointer">
                  30-day refund/replacement
                </span>
              </p>
              <p>
                <span className="underline text-custom-purple cursor-pointer">
                  Ships in product packaging
                </span>
              </p>
              <p>
                <span className="underline text-custom-purple cursor-pointer">
                  Secure transaction
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductMenu