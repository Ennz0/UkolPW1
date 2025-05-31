import Link from 'next/link';
import React from 'react';
export default function Home() {
  return (
<div
  className="hero min-h-screen bg-center bg"
  style={{
    backgroundImage:
      "url('/hero.jpg')",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Sneaker Gallery</h1>
      <p className="mb-5">
        Discover the latest sneaker trends, styles, and releases. Explore our
        extensive collection of sneakers from top brands and find your perfect
        pair.
      </p>
      <Link href="/home"><button className="btn btn-primary">Explore</button></Link>
    </div>
  </div>
</div>
  );
}
