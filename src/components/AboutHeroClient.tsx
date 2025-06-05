"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { aboutContent } from '@/utils/data';

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
          <div className="w-full max-w-6xl mx-auto p-12 rounded-2xl shadow-xl bg-[#1e151d] text-[#c59f61] text-center my-8">
            <div className="max-w-md mx-auto">
              <h1 className="text-5xl font-bold mb-4">{aboutContent.heroTitle}</h1>
              <p className="py-6 text-md text-[#c59f61]">
                {aboutContent.heroParagraph}
              </p>
              <button
                className="px-4.25 py-2.5 rounded-lg bg-[#db924c] text-black text-sm font-semibold hover:bg-[#c37d35] transition-colors duration-200 mt-2 mb-4"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <div className="w-full max-w-6xl mx-auto p-12 rounded-2xl shadow-xl bg-[#1e151d] text-[#c59f61] text-center my-8">
            <div className="max-w-md mx-auto">
              <h1 className="text-5xl font-bold mb-4">{aboutContent.heroTitle}</h1>
              <p className="py-6 text-md text-[#c59f61]">
                {aboutContent.heroParagraph}
              </p>
              <button
                className="px-4.25 py-2.5 rounded-lg bg-[#db924c] text-black text-sm font-semibold hover:bg-[#c37d35] transition-colors duration-200 mt-2 mb-[8px]"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className={`transition-opacity duration-1000 ease-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div id="passion-vision-section" className="flex flex-col lg:flex-row items-center gap-8 -my-3 p-8 text-[#c59f61]">
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
                <h2 className="text-4xl font-bold mb-4">{aboutContent.passionVisionTitle}</h2>
                <p className="text-lg mb-4 text-[#c59f61]">
                  {aboutContent.passionVisionParagraph1}
                </p>
                <p className="text-lg text-[#c59f61]">
                  {aboutContent.passionVisionParagraph2}
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center my-12 text-[#c59f61]">{aboutContent.valuesTitle}</h2>
            <div className="flex justify-center gap-8 my-8 flex-wrap">
              <div className="relative w-80 flex flex-col justify-end p-6 rounded-2xl shadow-xl overflow-hidden bg-[#1e151d] text-white">
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">{aboutContent.valueAuthenticityTitle}</h3>
                  <p className="text-sm text-gray-300 mb-1.75">{aboutContent.valueAuthenticityDescription}</p>
                  <div className="flex justify-end">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full border border-current text-white">{aboutContent.valueAuthenticityTag}</span>
                  </div>
                </div>
              </div>

              <div className="relative w-80 flex flex-col justify-end p-6 rounded-2xl shadow-xl overflow-hidden bg-[#1e151d] text-white">
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">{aboutContent.valueCommunityTitle}</h3>
                  <p className="text-sm text-gray-300 mb-1.75">{aboutContent.valueCommunityDescription}</p>
                  <div className="flex justify-end">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full border border-current text-white">{aboutContent.valueCommunityTag}</span>
                  </div>
                </div>
              </div>

              <div className="relative w-80 flex flex-col justify-end p-6 rounded-2xl shadow-xl overflow-hidden bg-[#1e151d] text-white">
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">{aboutContent.valuePassionTitle}</h3>
                  <p className="text-sm text-gray-300 mb-1.75">{aboutContent.valuePassionDescription}</p>
                  <div className="flex justify-end">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full border border-current text-white">{aboutContent.valuePassionTag}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-6xl mx-auto p-4 rounded-2xl shadow-xl bg-[#120a11] text-[#c59f61] my-11">
              <div className="flex flex-col lg:flex-row-reverse items-center py-8">
                <div className="text-center lg:text-left lg:ml-8">
                  <h2 className="text-4xl font-bold mb-4">{aboutContent.ctaTitle}</h2>
                  <p className="py-6 text-md text-[#c59f61]">
                    {aboutContent.ctaParagraph}
                  </p>
                  <Link href="/gallery">
                    <button className="px-4.25 py-2.5 rounded-lg bg-[#273e3f] text-white text-sm font-semibold hover:bg-[#1d2f30] transition-colors duration-200 mb-8">
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