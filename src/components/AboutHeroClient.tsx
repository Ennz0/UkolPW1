// app/about/AboutHeroClient.tsx
"use client"; // This makes it a Client Component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutHeroClient = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLearnMoreClick = () => {
    setShowFullContent(true);
    setTimeout(() => {
      setContentVisible(true);
    }, 50);

    setTimeout(() => {
      const targetElement = document.getElementById('passion-vision-section');
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - (window.innerHeight / 10),
          behavior: 'smooth'
        });
      }
    }, 500);
  };

  return (
    <>
      {!showFullContent ? (
        // Initial hero section (DaisyUI 'hero bg-base-200 rounded-box')
        <div className="flex flex-grow justify-center items-center min-h-[calc(100vh-64px)] px-4">
          <div className="w-full max-w-6xl mx-auto p-12 rounded-xl shadow-xl bg-[#180c14] text-white text-center my-8"> {/* Replaced with Tailwind */}
            <div className="max-w-md mx-auto">
              <h1 className="text-5xl font-bold mb-4">About Our Sneaker Gallery</h1>
              <p className="py-6 text-md text-gray-300">
                Welcome to the ultimate destination for sneaker enthusiasts! We are passionate about curating and showcasing the most iconic, rare, and legendary sneakers from around the world.
              </p>
              {/* Replaced 'btn btn-primary' with Tailwind */}
              <button
                className="px-5 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 mt-2 mb-4"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Full content section
        <div className="container mx-auto p-4">
          {/* Top hero section (DaisyUI 'hero bg-base-200 rounded-box') */}
          <div className="w-full max-w-6xl mx-auto p-8 rounded-xl shadow-xl bg-[#180c14] text-white text-center my-8"> {/* Replaced with Tailwind */}
            <div className="max-w-md mx-auto">
              <h1 className="text-5xl font-bold mb-4">About Our Sneaker Gallery</h1>
              <p className="py-6 text-md text-gray-300">
                Welcome to the ultimate destination for sneaker enthusiasts! We are passionate about curating and showcasing the most iconic, rare, and legendary sneakers from around the world.
              </p>
              <button
                className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200 mt-4"
                onClick={handleLearnMoreClick} // Still allows smooth scroll back to top if desired
              >
                Learn More
              </button>
            </div>
          </div>

          <div className={`transition-opacity duration-1000 ease-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Passion & Vision Section */}
            <div id="passion-vision-section" className="flex flex-col lg:flex-row items-center gap-8 my-12 bg-[#180c14] p-8 rounded-lg shadow-xl text-white"> {/* Added background and shadow */}
              <div className="lg:w-1/2">
                <Image
                  src="/images/gallery-placeholder.jpg"
                  alt="Sneaker Collection"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4">Our Passion & Vision</h2>
                <p className="text-lg mb-4 text-gray-300">
                  Our journey began with a simple love for sneakers and the stories they tell. From the groundbreaking designs to the cultural impact, each pair holds a unique place in history. We strive to be a comprehensive resource, connecting collectors and fans with the history and artistry of footwear.
                </p>
                <p className="text-lg text-gray-300">
                  We believe that sneakers are more than just shoes; they are a form of self-expression, a piece of art, and a reflection of diverse cultures. Our vision is to foster a vibrant community where this passion can be shared and celebrated.
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center my-12 text-white">Our Core Values</h2>
            <div className="flex justify-center gap-8 my-8 flex-wrap">
              {/* Value Card 1 (DaisyUI 'card w-80 bg-base-200 shadow-xl image-full') */}
              <div className="relative w-80 min-h-[200px] flex flex-col justify-end p-6 rounded-lg shadow-xl overflow-hidden bg-[#1e151d] text-white"> {/* Replaced with Tailwind */}
                {/* Background image can be added here if 'image-full' was for actual image */}
                {/* If 'image-full' was just for an overlay effect, a background-gradient or opacity layer is better */}
                <div className="relative z-10"> {/* Ensure text is above any potential background effect */}
                  <h3 className="text-2xl font-semibold mb-2">Authenticity</h3>
                  <p className="text-gray-300 mb-4">We are committed to showcasing only genuine and verified sneakers.</p>
                  <div className="flex justify-end">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full border border-current text-white">Trust</span> {/* Replaced 'badge badge-outline' */}
                  </div>
                </div>
              </div>

              {/* Value Card 2 */}
              <div className="relative w-80 min-h-[200px] flex flex-col justify-end p-6 rounded-lg shadow-xl overflow-hidden bg-[#1e151d] text-white">
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-300 mb-4">Fostering a passionate and inclusive space for all sneakerheads.</p>
                  <div className="flex justify-end">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full border border-current text-white">Share</span>
                  </div>
                </div>
              </div>

              {/* Value Card 3 */}
              <div className="relative w-80 min-h-[200px] flex flex-col justify-end p-6 rounded-lg shadow-xl overflow-hidden bg-[#1e151d] text-white">
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">Passion</h3>
                  <p className="text-gray-300 mb-4">Driven by an unwavering love for sneaker culture and history.</p>
                  <div className="flex justify-end">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full border border-current text-white">Love</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Our Sneaker Journey Section (DaisyUI 'hero bg-base-300 rounded-box') */}
            <div className="w-full max-w-6xl mx-auto p-8 rounded-lg shadow-xl bg-zinc-900 text-white my-12"> {/* Replaced with Tailwind */}
              <div className="flex flex-col lg:flex-row-reverse items-center py-8">
                <div className="text-center lg:text-left lg:ml-8">
                  <h2 className="text-4xl font-bold mb-4">Join Our Sneaker Journey!</h2>
                  <p className="py-6 text-lg text-gray-300">
                    Explore our extensive gallery, learn about the stories behind each pair, and connect with fellow enthusiasts.
                  </p>
                  {/* Replaced 'btn btn-secondary' with Tailwind */}
                  <Link href="/gallery">
                    <button className="px-6 py-3 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200 mt-4">
                      Explore Gallery
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutHeroClient;