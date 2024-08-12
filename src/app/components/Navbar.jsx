"use client";
import React from "react";
import NavLinks from "./NavLinks";
import { ShoppingCart, CircleUserRound } from "lucide-react";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar({ userId }) {
  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        {/* 1st NavBar - Top Navigation for Cart and Account on Small Screens */}
        <nav className="relative max-w-full flex flex-col mt-10 md:grid md:grid-cols-12 px-2 md:px-4 mx-auto py-2">
          <div className="w-full flex justify-end items-center md:col-span-12">
            {/* Cart and Account icons visible only on small screens */}
            <div className="flex lg:hidden items-center space-x-4 absolute right-0 -top-2 z-10">
              <Link href="/checkout">
                <ShoppingCart />
              </Link>
              {userId ? <UserButton /> : <Link href="/sign-in"><CircleUserRound /></Link>}
            </div>
            <NavLinks userId={userId} />
          </div>
        </nav>

        {/* 2nd NavBar - Main Navigation for Logo, Search, Cart, and Account */}
        <nav className="relative max-w-full flex flex-col px-2 md:px-4 mx-auto py-2">
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:justify-center">
            {/* Logo */}
            <Logo />
            {/* Search Bar */}
            <div className="relative w-full md:w-2/3 lg:w-1/2 px-4">
              <div className="relative flex items-center">
                <SearchBar />
                <div className="lg:hidden flex justify-end">
                  <MobileMenu userId={userId} />
                </div>
              </div>
            </div>
            {/* Cart and Account Icons */}
            <div className="hidden lg:flex items-center space-x-8 ">
              <Link href="/checkout">
                <ShoppingCart />
              </Link>

              {userId ? (
                <UserButton />
              ) : (
                <Link href="/sign-in">
                  <CircleUserRound />
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
