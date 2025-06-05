import React from 'react';
import Image from 'next/image';

interface SneakerCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  badgeText: string;
  badgeColor: string;
  description: string;
  tags: string[];
}

const SneakerCard: React.FC<SneakerCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  badgeText,
  badgeColor,
  description,
  tags,
}) => {
  return (
    <div className="relative flex flex-col rounded-2xl overflow-hidden shadow-lg bg-[#120a11] w-96">
      <figure className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={384}
          height={256}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="flex flex-col p-4 h-48 justify-between">
        <h2 className="text-xl font-semibold mb-2 flex items-center justify-between text-[#db924c]">
          {title}
          <span className={`ml-2 px-3.75 py-0.5 text-sm font-semibold rounded-full ${badgeColor} text-[#1b1b1b]`}>
            {badgeText}
          </span>
        </h2>
        <p className="text-sm text-[#db924c] flex-grow mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map((tag, index) => (
            <span key={index} className="border border-[#e09c5b] text-[#db924c] px-2 py-1 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;