// app/gallery/page.tsx
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '@/components/Navbar';
import SneakerCard from '@/components/SneakerCard'; // Import the new component

const GalleryPage = () => {
  const sneakers = [
    {
      imageSrc: '/images/paris.avif',
      imageAlt: 'Nike SB Dunk Low Paris',
      title: 'Nike SB Dunk Low "Paris"',
      badgeText: 'ULTRA RARE',
      badgeTailwindColor: 'bg-red-700', // Example Tailwind red
      description: 'Extrémně vzácná edice inspirovaná uměleckou scénou Paříže.',
      tags: ['Dunk SB', 'Limited', 'Art'],
    },
    {
      imageSrc: '/images/chicago.avif',
      imageAlt: 'Air Jordan 1 Retro High OG x Off-White Chicago',
      title: 'AJ1 x Off-White "Chicago"',
      badgeText: 'GRAIL',
      badgeTailwindColor: 'bg-green-700', // Example Tailwind green
      description: 'Jedna z nejžádanějších kolaborací Virgil Abloh x Jordan Brand.',
      tags: ['Jordan 1', 'Off-White', 'Kolekce'],
    },
    {
      imageSrc: '/images/future.avif',
      imageAlt: 'Nike Air Mag Back to the Future',
      title: 'Nike Air Mag "Back to the Future"',
      badgeText: 'ICONIC',
      badgeTailwindColor: 'bg-blue-700', // Example Tailwind blue
      description: 'Futuristické boty s automatickým šněrováním z filmu Návrat do budoucnosti.',
      tags: ['Film', 'Technologie', 'Limitovaná edice'],
    },
    {
      imageSrc: '/images/pigeon.avif',
      imageAlt: 'Nike SB Dunk Low Staple Pigeon',
      title: 'Nike SB Dunk Low "Pigeon"',
      badgeText: 'LEGENDARY',
      badgeTailwindColor: 'bg-amber-700', // Example Tailwind amber
      description: 'Kontroverzní release, který v roce 2005 rozpoutal šílenství v ulicích NYC.',
      tags: ['Dunk SB', 'New York', 'Historie'],
    },
    {
      imageSrc: '/images/travissail.avif',
      imageAlt: 'Nike Air Force 1 Low Travis Scott Sail',
      title: 'AF1 x Travis Scott "Sail"',
      badgeText: 'COLLAB',
      badgeTailwindColor: 'bg-red-700',
      description: 'Vyhledávaná kolaborace Air Force 1 s raperem Travisem Scottem.',
      tags: ['Air Force 1', 'Travis Scott', 'Hyped'],
    },
    {
      imageSrc: '/images/kaws.avif',
      imageAlt: 'Air Jordan 4 Retro x Kaws Grey',
      title: 'AJ4 x KAWS "Grey"',
      badgeText: 'ART EDITION',
      badgeTailwindColor: 'bg-green-700',
      description: 'Umělecká kolaborace Air Jordan 4 s proslulým umělcem KAWS.',
      tags: ['Jordan 4', 'KAWS', 'Street Art'],
    },
    {
      imageSrc: '/images/kanye.avif',
      imageAlt: 'Nike Air Yeezy 2 Red October',
      title: 'Nike Air Yeezy 2 "Red October"',
      badgeText: 'HISTORIC',
      badgeTailwindColor: 'bg-blue-700',
      description: 'Poslední a nejtajemnější release Kanyeho s Nike, vzácný kousek.',
      tags: ['Yeezy', 'Kanye West', 'OG'],
    },
    {
      imageSrc: '/images/skunk.avif',
      imageAlt: 'Nike SB Dunk High Skunk',
      title: 'Nike SB Dunk High "Skunk"',
      badgeText: 'FIRE ASF',
      badgeTailwindColor: 'bg-amber-700',
      description: 'Kultovní Dunk High inspirovaný konopím, oblíbený mezi sběrateli.',
      tags: ['Dunk SB', '420', 'Rare'],
    },
    {
      imageSrc: '/images/concord.avif',
      imageAlt: 'Nike Air Jordan 11 Retro Concord',
      title: 'AJ11 "Concord"',
      badgeText: 'BASKETBALL LEGEND',
      badgeTailwindColor: 'bg-red-700',
      description: 'Ikonická bota, ve které Michael Jordan hrál po návratu do NBA.',
      tags: ['Jordan 11', 'NBA', 'MJ'],
    },
    {
      imageSrc: '/images/elephant.avif',
      imageAlt: 'Nike Air Max 1 Atmos Elephant',
      title: 'Air Max 1 x Atmos "Elephant"',
      badgeText: 'COLLAB',
      badgeTailwindColor: 'bg-green-700',
      description: 'Slavná kolaborace s japonským obchodem Atmos, známá pro svůj "elephant print".',
      tags: ['Air Max 1', 'Atmos', 'Print'],
    },
    {
      imageSrc: '/images/freddy.avif',
      imageAlt: 'Nike SB Dunk Low Freddy Krueger',
      title: 'Nike SB Dunk Low "Freddy Krueger"',
      badgeText: 'HORROR',
      badgeTailwindColor: 'bg-blue-700',
      description: 'Velmi vzácný a kontroverzní model inspirovaný filmovou postavou.',
      tags: ['Dunk SB', 'Horror', 'Unreleased'],
    },
    {
      imageSrc: '/images/lv.avif',
      imageAlt: 'Nike Air Force 1 Low Louis Vuitton',
      title: 'AF1 x Louis Vuitton',
      badgeText: 'LUXURY',
      badgeTailwindColor: 'bg-amber-700',
      description: 'Exkluzivní a luxusní kolaborace mezi Nike a Louis Vuitton.',
      tags: ['Air Force 1', 'Louis Vuitton', 'Haute Couture'],
    },
  ];

  return (
    <>
      <Navbar /> {/* Navbar still uses DaisyUI for now */}
      <div className="flex justify-center gap-8 my-8 flex-wrap">
        {sneakers.map((sneaker, index) => (
          <SneakerCard
            key={index}
            imageSrc={sneaker.imageSrc}
            imageAlt={sneaker.imageAlt}
            title={sneaker.title}
            badgeText={sneaker.badgeText}
            badgeTailwindColor={sneaker.badgeTailwindColor} // Updated prop name
            description={sneaker.description}
            tags={sneaker.tags}
          />
        ))}
      </div>
    </>
  );
};

export default GalleryPage;