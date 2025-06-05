import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#120c12] opacity-50"></div>
      <div className="relative z-10 text-[#c9c7c9] p-4">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-5xl font-bold">Sneaker Gallery</h1>
          <p className="mb-5 text-md">
            Discover the latest sneaker trends, styles, and releases. Explore our
            extensive collection of sneakers from top brands and find your perfect
            pair.
          </p>
          <Link href="/about">
            <button className="px-4.5 py-2.5 rounded-lg bg-[#db924c] text-black text-[.875rem] font-semibold hover:bg-[#c37d35] transition-colors duration-200">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}