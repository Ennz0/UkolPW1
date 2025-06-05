"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 flex items-center justify-between px-4 py-[10.75px] bg-[#1a1219] shadow-sm text-[#c59f61]">
      <div
        className="relative navbar-dropdown-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="p-2 rounded-md hover:bg-[#120a11]"
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <ul className="absolute text-sm top-full left-0 -ml-4 w-64 p-2 rounded-2xl shadow-lg bg-[#1a1219] z-10">
            <li><Link href="/gallery" className="block px-4 py-2 hover:bg-[#c59f6123] rounded-lg">Gallery</Link></li>
            <li><Link href="/about" className="block px-4 py-2 hover:bg-[#c59f6123] rounded-lg">About</Link></li>
            <li><Link href="/contacts" className="block px-4 py-2 hover:bg-[#c59f6123] rounded-lg">Contact</Link></li>
          </ul>
        )}
      </div>

      <div className="flex-grow text-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">Sneaker Gallery</Link>
      </div>

      <div className="flex-none">
      </div>
    </nav>
  );
};

export default Navbar;