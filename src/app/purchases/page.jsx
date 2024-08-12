// app/user-profile/page.jsx
import React from 'react';
import { auth, currentUser } from "@clerk/nextjs/server";
import MyPurchasePage from './MyPurchasePage.jsx';
import { ShoppingCart, Bell, Tag } from 'lucide-react'; // Import Lucide icons
import Image from 'next/image.js';

export default async function UserProfile() {
  const { userId } = auth();

  if (!userId) {
    return <div>Unauthorized</div>;
  }

  let user;
  try {
    user = await currentUser();
  } catch (error) {
    return <div>Error fetching user data</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  // Ensure `user` is a plain object
  const userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.emailAddresses[0].emailAddress,
    image: user.imageUrl
    // Add other necessary user fields here
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* User Info Section */}
      <div className="flex-shrink-0 w-full lg:w-1/4 p-6 border-b lg:border-r border-gray-300 lg:border-b-0">
        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 mr-4">
            <Image
              src={userData.image}
              alt="User Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-md font-bold">{userData.firstName} {userData.lastName}</h1>
            <p className="text-sm text-gray-600">{userData.email}</p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="space-y-4">
          <div className="flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2 text-gray-600" />
            <span className="category-underline cursor-pointer hover:text-custom-purple">
              My Purchases
            </span>
          </div>
          <div className="flex items-center">
            <Bell className="w-5 h-5 mr-2 text-gray-600" />
            <span className="category-underline cursor-pointer hover:text-custom-purple">
              Notifications
            </span>
          </div>
          <div className="flex items-center">
            <Tag className="w-5 h-5 mr-2 text-gray-600" />
            <span className="category-underline cursor-pointer hover:text-custom-purple">
              Vouchers
            </span>
          </div>
        </div>
      </div>

      {/* Purchase Page Section */}
      <div className="flex-grow p-6">
        <MyPurchasePage userData={userData} />
      </div>
    </div>
  );
}
