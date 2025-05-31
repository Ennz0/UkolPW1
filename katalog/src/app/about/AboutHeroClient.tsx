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
        <div className="flex flex-grow justify-center items-center min-h-[calc(100vh-64px)] px-4">
          <div className="hero bg-base-200 rounded-box my-8 w-full max-w-6xl mx-auto">
            <div className="hero-content text-center py-16">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">About Our Sneaker Gallery</h1>
                <p className="py-6">
                  Welcome to the ultimate destination for sneaker enthusiasts! We are passionate about curating and showcasing the most iconic, rare, and legendary sneakers from around the world.
                </p>
                <button className="btn btn-primary" onClick={handleLearnMoreClick}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <div className="hero bg-base-200 rounded-box my-8 w-full max-w-6xl mx-auto">
            <div className="hero-content text-center py-16">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">About Our Sneaker Gallery</h1>
                <p className="py-6">
                  Welcome to the ultimate destination for sneaker enthusiasts! We are passionate about curating and showcasing the most iconic, rare, and legendary sneakers from around the world.
                </p>
                <button className="btn btn-primary" onClick={handleLearnMoreClick}>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className={`transition-opacity duration-1000 ease-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div id="passion-vision-section" className="flex flex-col lg:flex-row items-center gap-8 my-12">
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
                <p className="text-lg mb-4">
                  Our journey began with a simple love for sneakers and the stories they tell. From the groundbreaking designs to the cultural impact, each pair holds a unique place in history. We strive to be a comprehensive resource, connecting collectors and fans with the history and artistry of footwear.
                </p>
                <p className="text-lg">
                  We believe that sneakers are more than just shoes; they are a form of self-expression, a piece of art, and a reflection of diverse cultures. Our vision is to foster a vibrant community where this passion can be shared and celebrated.
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center my-12">Our Core Values</h2>
            <div className="flex justify-center gap-8 my-8 flex-wrap">
              <div className="card w-80 bg-base-200 shadow-xl image-full">
                <div className="card-body">
                  <h3 className="card-title text-white">Authenticity</h3>
                  <p className="text-white">We are committed to showcasing only genuine and verified sneakers.</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline text-white">Trust</div>
                  </div>
                </div>
              </div>

              <div className="card w-80 bg-base-200 shadow-xl image-full">
                <div className="card-body">
                  <h3 className="card-title text-white">Community</h3>
                  <p className="text-white">Fostering a passionate and inclusive space for all sneakerheads.</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline text-white">Share</div>
                  </div>
                </div>
              </div>

              <div className="card w-80 bg-base-200 shadow-xl image-full">
                <div className="card-body">
                  <h3 className="card-title text-white">Passion</h3>
                  <p className="text-white">Driven by an unwavering love for sneaker culture and history.</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline text-white">Love</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero bg-base-300 rounded-box my-12">
              <div className="hero-content flex-col lg:flex-row-reverse py-16">
                <div className="text-center lg:text-left lg:ml-8">
                  <h2 className="text-4xl font-bold mb-4">Join Our Sneaker Journey!</h2>
                  <p className="py-6">
                    Explore our extensive gallery, learn about the stories behind each pair, and connect with fellow enthusiasts.
                  </p>
                  <Link href="/gallery"><button className="btn btn-secondary">Explore Gallery</button></Link>
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