// This file is a Server Component by default
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHeroClient from '@/app/about/AboutHeroClient';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutHeroClient />
    </>
  );
};

export default AboutPage;