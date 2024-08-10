"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Shop",
    href: "/shop",
  },
  {
    id: 3,
    name: "Contact Us",
    href: "/contact",
  },
  {
    id: 4,
    name: "Sign up",
    href: "#",
  },
  {
    id: 5,
    name: "Sign in",
    href: "#",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex justify-center items-center col-span-6 gap-x-2">
      {navLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            "hover:bg-muted hover:bg-opacity-75 hover:text-custom-purple",
            item.name === "Sign in"
              ? "bg-[#1c1c1c] text-custom-white hover:bg-[#000000] hover:text-custom-white"
              : "",
            "group flex items-center px-5 py-2.5 font-medium rounded-3xl",
            pathname === item.href ? "bg-muted text-custom-purple" : "" // Apply the muted background color for the active page
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
