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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Purchases</h1>
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        <div className="flex space-x-4 overflow-x-auto p-4">
          {Object.keys(statusProducts).map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`flex-1 p-4 text-center underline-animation ${status === selectedStatus ? 'bg-white' : ''} text-black border-none`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4 mt-6">
        {filteredItems.map((item) => (
          <div key={item.name} className="flex items-center p-4 bg-gray-200 border border-gray-300 rounded-lg">
            <div className="relative w-32 h-32 flex-shrink-0 mr-4"> {/* Adjust width and height as needed */}
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-md text-custom-purple">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPurchasePage;
