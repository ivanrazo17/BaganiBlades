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
];

const NavLinks = ({ userId }) => {
  const pathname = usePathname();

  // Define the sign-in/sign-up or account link based on userId
  const authLinks = userId
    ? [
        { id: 4, name: "My Account", href: "/dashboard" }
      ]
    : [
        { id: 4, name: "Sign up", href: "/sign-up" },
        { id: 5, name: "Sign in", href: "/sign-in" }
      ];

  // Combine standard navLinks with authLinks
  const links = [...navLinks, ...authLinks];

  return (
    <div className="hidden lg:flex justify-center items-center col-span-6 gap-x-2">
      {links.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            "hover:bg-muted hover:bg-opacity-75 hover:text-custom-purple",
            item.name === "Sign in"
              ? "bg-[#1c1c1c] text-custom-white hover:bg-[#000000] hover:text-custom-white"
              : "",
            "group flex items-center px-5 py-2.5 font-medium rounded-3xl",
            pathname === item.href ? "bg-muted text-custom-purple" : ""
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
