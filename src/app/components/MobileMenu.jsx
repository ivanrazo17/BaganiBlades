"use client";

import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet"
import { Button } from '../../components/ui/button'
import { Menu } from 'lucide-react'
import { navLinks } from './NavLinks'
import Link from 'next/link';

const MobileMenu = () => {
  // Filter out 'Sign in' and 'Sign up' from navLinks
  const [authLinks, otherLinks] = navLinks.reduce(([auth, others], item) => {
    if (item.name === 'Sign in' || item.name === 'Sign up') {
      auth.push(item);
    } else {
      others.push(item);
    }
    return [auth, others];
  }, [[], []]);

  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant='outline' size='icon'>
                <Menu className='w-6 h-6'/>
            </Button>
        </SheetTrigger>
        <SheetContent>
            <div className='px-2 py-10'>
                {/* Auth Links at the Top */}
                <div className='flex justify-between items-center mb-5'>
                    {authLinks.map((item) => (
                        <Link 
                            href={item.href} 
                            key={item.id} 
                            className='underline-animation mr-4'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Other Navigation Links */}
                <div className='flex flex-col space-y-1'>
                    {otherLinks.map((item) => (
                        <Link href={item.href} key={item.id}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
