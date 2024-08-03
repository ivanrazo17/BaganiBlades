"use client";
import React from 'react';
import NavLinks from './NavLinks';
import { ShoppingCart, CircleUserRound } from 'lucide-react';
import SearchBar from './Searchbar';
import MobileMenu from './MobileMenu';
import Logo from './Logo';


const Navbar = () => {
  return (
        <div className='flex justify-center'>
            <div className='w-3/4'>
                {/* 1st NavBar */}
                <nav className="relative max-w-full flex-full flex flex-col mt-10 md:grid md:grid-cols-12 px-2 md:px-4 mx-auto py-2 ">
                    <div className="w-full flex justify-end items-center md:col-span-12">
                        {/* Div for Add to Cart and Account (visible only on small screens) */}
                        <div className='flex lg:hidden items-center space-x-2 absolute right-0 top-0'>
                            <ShoppingCart />
                            <CircleUserRound />
                        </div>
                        <NavLinks />
                    </div>
                </nav> 
                
                {/* 2nd NavBar */}
                <nav className='relative max-w-full flex flex-col px-2 md:px-4 mx-auto py-2'>
                    {/* Div for Logo, Search, Cart, Account */}
                    <div className='flex flex-col items-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:justify-center'>
                        {/* Div for Logo only */}
                        <Logo />
                        {/* Div for Search Input */}
                        <div className='relative w-full md:w-2/3 lg:w-1/2 px-4'>
                            {/* Container for input and button */}
                            <div className='relative flex items-center'>
                                <SearchBar/>
                                <div className='lg:hidden flex justify-end'>
                                    <MobileMenu/>
                                </div>
                            </div>
                            
                        </div>
                        {/* Div for Add to Cart (hidden on smaller screens) */}
                        <div className='hidden lg:flex items-center mx-8'>
                            <ShoppingCart />   
                        </div>
                        {/* Div for Account (hidden on smaller screens) */}
                        <div className='hidden lg:flex items-center mx-8'>
                            <CircleUserRound />
                        </div>
                    </div>
                </nav>
            </div> 
        </div>
    
    );
};

export default Navbar;
