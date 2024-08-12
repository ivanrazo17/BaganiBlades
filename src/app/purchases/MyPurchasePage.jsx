'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import '../globals.css'; // Ensure this import is included to apply global styles
import ProductData from '../shop/ProductData.js'; // Import ProductData

// Manually assign one product to each status label
const statusProducts = {
  'All': ProductData.slice(0, 5), // Show the first 5 items for "All"
  'To Pay': [ProductData[0]], // Replace with a specific item if available
  'To Ship': [ProductData[1]], // Replace with a specific item if available
  'To Receive': [ProductData[2]], // Replace with a specific item if available
  'Completed': [ProductData[3]], // Replace with a specific item if available
  'Cancelled': [ProductData[4]]  // Replace with a specific item if available
};

const MyPurchasePage = ({ userData }) => {
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Get items based on the selected status
  const filteredItems = statusProducts[selectedStatus] || [];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">My Purchases</h1>
      
      {/* Parent container for labels and product sections */}
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        {/* Container for horizontally scrolling labels */}
        <div className="overflow-x-auto whitespace-nowrap p-2 md:p-4">
          <div className="flex space-x-2 md:space-x-4 lg:items-center lg:justify-center">
            {Object.keys(statusProducts).map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`flex-shrink-0 px-3 py-1.5 md:px-4 md:py-2 text-center underline-animation ${
                  status === selectedStatus ? 'bg-gray-100' : ''
                } text-black border-none`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Product listing section */}
        <div className="p-2 md:p-4">
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div key={item.name} className="flex flex-col md:flex-row items-center p-4 bg-gray-200 border border-gray-300 rounded-lg">
                <div className="relative w-full md:w-32 h-32 flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-base md:text-lg font-semibold mb-2">{item.name}</h2>
                  <p className="text-sm md:text-md text-custom-purple">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPurchasePage;
