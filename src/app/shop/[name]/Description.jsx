import React from 'react'
import { useParams } from 'next/navigation';
import ProductData from '../ProductData.js';
const Description = () => {
     // Extract the product name from the URL
    const { name } = useParams();
    // Replace hyphens with spaces if needed
    const formattedName = name.replace(/-/g, ' ');
    // Fetch the product data based on the formatted name
    const product = ProductData.find(product => product.name === formattedName);
    // Convert newlines to HTML <br /> tags
    const descriptionHtml = product.description.replace(/\\n/g, '<br />');

    return (
        <div className='bg-[#F3F4F8] mt-3 rounded-lg w-[95%] md:w-4/5 '>
            <h1 className='font-semibold text-lg p-2'>Description</h1>
            <p className='font-light text-base mb-2 p-3' dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        </div>
    )
}

export default Description