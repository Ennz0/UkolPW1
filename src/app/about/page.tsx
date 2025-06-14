import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHeroClient from '@/components/AboutHeroClient';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[64px] lg:pt-[64px]">
        <AboutHeroClient />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;