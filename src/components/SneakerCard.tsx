// app/components/SneakerCard.tsx
import React from 'react';
import Image from 'next/image';

interface SneakerCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  badgeText: string;
  badgeTailwindColor: string; // e.g., 'bg-red-500'
  description: string;
  tags: string[];
}

const SneakerCard: React.FC<SneakerCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  badgeText,
  badgeTailwindColor,
  description,
  tags,
}) => {
  return (
    // Replaced DaisyUI 'card' with Tailwind classes
    <div className="relative flex flex-col rounded-box border-1 overflow-hidden shadow-sm bg-[#180c14] w-96">
      <figure className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={384} // Equivalent to w-96 (384px)
          height={256} // Equivalent to h-64 (256px)
          className="object-cover w-full h-full" // Ensure image covers the fig
        />
      </figure>
      {/* Replaced 'card-body' with Tailwind classes */}
      <div className="flex flex-col p-4 h-48 justify-between">
        <h2 className="text-xl font-semibold mb-2 flex items-center justify-between text-white"> {/* Text white for contrast */}
          {title}
          {/* Replaced DaisyUI 'badge' with Tailwind classes */}
          <span className={`ml-2 px-2 py-1 text-xs font-bold rounded-full ${badgeTailwindColor} text-white`}>
            {badgeText}
          </span>
        </h2>
        <p className="text-sm text-gray-300 flex-grow mb-4"> {/* Text gray for description */}
          {description}
        </p>
        {/* Replaced 'card-actions' with Tailwind classes */}
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map((tag, index) => (
            // Replaced DaisyUI 'badge-outline' with Tailwind classes
            <span key={index} className="border border-gray-500 text-gray-400 px-2 py-1 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;