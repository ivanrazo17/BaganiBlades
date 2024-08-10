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
        <div className='flex w-full h-[508px]'>
            <div className='flex flex-col w-[80px] h-full mr-4'>
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

            <div className='relative w-[600px] h-[508px]'>
                <Image
                    src={product.image} 
                    alt={product.name} 
                    layout="fill"                 
                    objectFit="cover"
                    priority={true}
                />
            </div>

            <div className='flex flex-col justify-center p-4'>
                <h1 className='text-xl mb-2 text-[#09761C]'>In Stock</h1>
                <h1 className='text-3xl font-semibold mb-2'>{product.name}</h1>
                <div className="price text-2xl font-medium mb-4 text-custom-purple">{product.price}</div>
                <h2 className='text-xl font-semibold mb-2'>Quantity</h2>
                <div className='flex items-center space-x-4 mb-4'>
                    <Button 
                        onClick={handleDecrement} 
                        className='w-8 h-8 flex items-center justify-center bg-gray-200 text-black rounded-full'>
                        -
                    </Button>
                    <span className='text-xl'>{quantity}</span>
                    <Button 
                        onClick={handleIncrement} 
                        className='w-8 h-8 flex items-center justify-center bg-gray-200 text-black rounded-full'>
                        +
                    </Button>
                </div>
                <div className=' space-y-2'>
                    <Button className='w-[300px] py-2 px-4 text-white bg-custom-purple rounded-[10px] cursor-pointer'>
                        Buy Now
                    </Button>
                    <Button className='w-[300px] py-2 px-4 text-black bg-[#E4D6D6] rounded-[10px] cursor-pointer'>
                        Add to Cart
                    </Button>
                </div>
                
                
                <div className='w-[315px] text-[11px] text-[#464545] mt-4 grid grid-cols-2 gap-x-0'>
                    <div className='flex flex-col'>
                        <p>
                            <span className='font-extralight'>Ships from </span>
                        </p>
                        <p>
                            <span className='font-extralight'>Sold by</span>
                        </p>
                        <p>
                            <span className='font-extralight'>Returns</span>
                        </p>
                        <p>
                            <span className='font-extralight'>Packaging</span>
                        </p>
                        <p>
                            <span className='font-extralight'>Payment</span>
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <p>
                            <span>Bagani Blades</span>
                        </p>
                        <p>
                            <span>Bagani Blades</span>
                        </p>
                        <p>
                            <span className='underline text-custom-purple cursor-pointer'>30-day refund/replacement</span>
                        </p>
                        <p>
                            <span className='underline text-custom-purple cursor-pointer'>Ships in product packaging</span>
                        </p>
                        <p>
                            <span className='underline text-custom-purple cursor-pointer'>Secure transaction</span>
                        </p>
                    </div>
                </div> 
            </div>

        </div>
    )
}

export default ProductMenu