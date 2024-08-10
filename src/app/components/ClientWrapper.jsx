// components/ClientWrapper.jsx
"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const ClientWrapper = ({ children, userId }) => {
  const pathname = usePathname();

  // Pages where Navbar should be hidden
  const hideNavbarPages = ['/sign-in', '/sign-up'];

  return (
    <>
      {!hideNavbarPages.includes(pathname) && <Navbar userId={userId} />}
      {children}
    </>
  );
};

export default ClientWrapper;
