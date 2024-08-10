// LimitedProductCards.jsx
import React from 'react';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Star, ShoppingCart } from 'lucide-react';
import { ProductList } from '@/app/components/ProductCards.jsx';
import Image from 'next/image';

const LimitedProductCards = ({ maxItems }) => {
    // Slice the ProductList to limit the number of items
    const itemsToDisplay = ProductList.slice(0, maxItems);

    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {itemsToDisplay.map((item) => (
            <Card key={item.id} className='w-full h-[400px] bg-[#F9FAFC] card-no-radius card-no-border'>
            <CardHeader className='p-0'>
                <Image
                    src={item.imageSrc}
                    width={500}
                    height={500}
                    alt={item.name}
                    priority={true}
                    className="w-full h-[289px] object-cover m-0"                                 
                />
                <CardTitle className='font-light text-[18px] truncate ml-6'>
                {item.name}
                </CardTitle>

                <CardDescription className='text-custom-purple ml-6'>
                {item.price}
                </CardDescription>
            </CardHeader>

            <CardFooter className='flex items-center justify-between pt-4'>
                <div className='flex items-center gap-1 group'>
                <Star className='text-yellow-500 fill-yellow-500' />
                <span className='font-light'>4.8</span>
                </div>

                <div className='flex items-center gap-1 group'>
                <ShoppingCart className='transition-colors duration-300 group-hover:text-custom-purple cursor-pointer' />
                <span className='font-light transition-colors duration-300 group-hover:text-custom-purple cursor-pointer'>
                    Add to Cart
                </span>
                </div>
            </CardFooter>

            </Card>
        ))}
        </div>
    );
};

export default LimitedProductCards;
