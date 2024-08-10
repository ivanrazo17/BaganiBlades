// components/BackToTopButton.js
"use client"; // Add this line to indicate that this is a client component

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 bg-black text-white rounded-full shadow-lg hover:bg-custom-purple-dark transition duration-300"
        aria-label="Back to top"
      >
        <ArrowUp />
      </button>
    )
  );
};

export default BackToTopButton;
