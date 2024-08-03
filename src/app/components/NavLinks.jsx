"use client";

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils';

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: '/'
    },
    {
        id: 1,
        name: 'About',
        href: '#'
    },
    {
        id: 2,
        name: 'Shop',
        href: '#'
    },
    {
        id: 3,
        name: 'Contact Us',
        href: '#'
    },
    {
        id: 4,
        name: 'Sign up',
        href: '#'
    },
    {
        id: 5,
        name: 'Sign in',
        href: '#'
    }
];

const NavLinks = () => {
    
    return (
        <div className="hidden lg:flex justify-center items-center col-span-6 gap-x-2">
            {navLinks.map((item) => (
                <Link 
                    href={item.href} 
                    key={item.id} 
                    className={ cn(
                        location === item.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75 hover:text-custom-purple', 
                        item.name === 'Sign in' ? 'bg-[#1c1c1c] text-custom-white hover:bg-[#000000] hover:text-custom-white'  : '',
                    'group flex items-center px-5 py-2.5 font-medium rounded-3xl '
                    )}
                >
                    {item.name}
                </Link>
                
            ))}
        </div>
    )
}

export default NavLinks