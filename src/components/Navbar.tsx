// app/components/Navbar.tsx
"use client"; // Needs to be a client component for state and event listeners

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light' for Tailwind

  // Handle dropdown open/close
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as HTMLElement).closest('.navbar-dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle theme toggle
  useEffect(() => {
    // Set initial theme based on localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.add('light');
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    // Replaced 'navbar bg-base-200 shadow-sm' with Tailwind classes
    <nav className="flex items-center justify-between px-4 py-3 bg-[#1e151d] shadow-sm text-gray-100">
      <div className="relative navbar-dropdown-container"> {/* Container for dropdown positioning */}
        {/* Replaced 'btn btn-square btn-ghost' with Tailwind classes */}
        <button
          onClick={toggleDropdown}
          className="p-2 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {/* Replaced 'dropdown-content menu bg-base-200 rounded-box z-[1] w-64 p-2 shadow-sm -ml-2' */}
        {isDropdownOpen && (
          <ul className="absolute top-full left-0 mt-2 w-64 p-2 rounded-md shadow-lg bg-zinc-800 z-10">
            <li><Link href="/gallery" className="block px-4 py-2 hover:bg-zinc-700 rounded-md">Gallery</Link></li>
            <li><Link href="/about" className="block px-4 py-2 hover:bg-zinc-700 rounded-md">About</Link></li>
            <li><Link href="/contacts" className="block px-4 py-2 hover:bg-zinc-700 rounded-md">Contact</Link></li>
          </ul>
        )}
      </div>

      <div className="flex-grow text-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">Sneaker Gallery</Link>
      </div>

      <div className="flex-none">
        {/* Replaced DaisyUI 'toggle' with custom Tailwind toggle */}
      </div>
    </nav>
  );
};

export default Navbar;