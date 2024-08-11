"use client";
import { useParams } from 'next/navigation'; 
import Link from 'next/link.js';
import ProductMenu from './ProductMenu.jsx';
import Description from './Description.jsx';
import ProductData from '../ProductData.js';
import Review from './Review.jsx';
import LimitedProductCards from './LimitedProductCards.jsx';
import Newsletter from '../../../app/components/Newsletter.jsx';
import Footer from '../../../app/components/Footer.jsx';

export default function ProductPage() {
    // Extract the product name from the URL
    const { name } = useParams();
    // Replace hyphens with spaces if needed
    const formattedName = name.replace(/-/g, ' ');
    // Fetch the product data based on the formatted name
    const product = ProductData.find(product => product.name === formattedName);

    return (
        
        <div className="product-page">

            <div className="w-full h-full flex flex-col items-center justify-center">
                {/* Breadcrumbs */}
                <span className='flex flex-row-1 gap-2 text-[#504d4d] m-3'>
                    <Link href="/">
                        <h1>Home &gt;</h1>
                    </Link>

                    <Link href="../shop">
                        <h1>Shop &gt;</h1>
                    </Link>
                    
                    <Link href="../shop">
                        {product.category}
                    </Link>
                </span>

                {/* Product Menu Component */}
                <div>
                    <ProductMenu/>
                </div>

                {/* Description Component */}
              
                    <Description/>
                

                {/* Review Component */}
                
                    <Review/>    
                

                {/* Other Products */}
                <div className='mb-6'>
                    <h1 className='font-semibold text-2xl mb-4 px-4'>You may also like</h1>
                    <LimitedProductCards maxItems={3} />  {/* Use the new component */}
                </div>
                

            </div>
            {/* Newsletter */}
            <div>
                <Newsletter/>
            </div>

            {/* Payment */}
            <div className='flex flex-col items-center justify-center'>
                <h1 className="
                    mt-4
                    text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] 
                    px-3 sm:px-4 md:px-6 lg:px-8 
                    py-1 sm:py-2 md:py-3 lg:py-4 
                    sm:tracking-[3px] md:tracking-[5px] lg:tracking-[10px]
                ">
                AVAILABLE MODE OF PAYMENTS
                </h1>
                <img 
                    src="/assets/Contact/Payments.png" 
                    alt="Payment Methods"
                    className="
                        object-cover 
                        mb-6
                        w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3
                        max-w-full 
                        h-auto
                    " 
                />
            </div>
            {/* Footer */}
            <div>
                <Footer/>
            </div>
        </div>
    );
    }


