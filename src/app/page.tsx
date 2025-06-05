// app/page.tsx
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    // Replaced DaisyUI 'hero' with Tailwind classes
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('images/hero.jpg')",
      }}
    >
      {/* Replaced 'hero-overlay' with a semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* Replaced 'hero-content' with Tailwind classes */}
      <div className="relative z-10 text-white p-4"> {/* text-neutral-content is now text-white */}
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-5xl font-bold">Sneaker Gallery</h1>
          <p className="mb-5 text-lg"> {/* Added text-lg for slightly larger paragraph */}
            Discover the latest sneaker trends, styles, and releases. Explore our
            extensive collection of sneakers from top brands and find your perfect
            pair.
          </p>
          {/* Replaced 'btn btn-primary' with Tailwind classes */}
          <Link href="/about">
            <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}