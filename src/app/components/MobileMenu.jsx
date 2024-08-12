"use client";

import React, { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet";
import { Button } from '../../components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { navLinks } from './NavLinks'; // Import navLinks here

const MobileMenu = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Filter out 'Sign in' and 'Sign up' from navLinks
  const [authLinks, otherLinks] = navLinks.reduce(([auth, others], item) => {
    if (item.name === 'Sign in' || item.name === 'Sign up') {
      auth.push(item);
    } else {
      others.push(item);
    }
    return [auth, others];
  }, [[], []]);

  // Include 'My Purchases' if userId is present
  const myPurchasesLink = userId
    ? { id: 4, name: 'My Purchases', href: '/purchases' }
    : null;

  // Conditionally add 'My Purchases' to otherLinks
  const updatedOtherLinks = myPurchasesLink ? [myPurchasesLink, ...otherLinks] : otherLinks;

  // Handler to close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' aria-label='Open menu' onClick={() => setIsOpen(true)}>
          <Menu className='w-6 h-6' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className='px-2 py-10'>
          {/* Auth Links at the Top */}
          <div className='flex flex-col space-y-2 mb-5'>
            {authLinks.map((item) => (
              <Link 
                href={item.href} 
                key={item.id} 
                className='underline-animation text-blue-600 hover:text-blue-800'
                aria-label={item.name}
                onClick={handleLinkClick} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Other Navigation Links */}
          <div className='flex flex-col space-y-1'>
            {updatedOtherLinks.map((item) => (
              <Link 
                href={item.href} 
                key={item.id} 
                className='text-gray-700 hover:text-gray-900'
                aria-label={item.name}
                onClick={handleLinkClick} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
