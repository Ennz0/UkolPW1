import React from 'react';
import Navbar from '@/components/Navbar';
import SneakerCard from '@/components/SneakerCard';
import { sneakersData } from '@/utils/data';

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[96px] flex justify-center gap-8 my-8 flex-wrap">
        {sneakersData.map((sneaker) => (
          <SneakerCard
            key={sneaker.id}
            imageSrc={sneaker.imageSrc}
            imageAlt={sneaker.imageAlt}
            title={sneaker.title}
            badgeText={sneaker.badgeText}
            badgeTailwindColor={sneaker.badgeTailwindColor}
            description={sneaker.description}
            tags={sneaker.tags}
          />
        ))}
      </div>
    </>
  );
};

export default GalleryPage;