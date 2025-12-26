'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Banner images array
const bannerImages = [
  '/images/banner.png',
  '/images/banner1.png',
  '/images/banner2.png',
  '/images/banner3.png',
  '/images/banner4.png',
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full h-[480px] overflow-hidden">
      {/* Background Images with Animation */}
      <div className="absolute inset-0">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Search Bar Container */}
      <div className="absolute inset-0 flex items-center justify-start px-32">
        <div className="w-full max-w-2xl relative">
          {/* Search Input */}
          <div className="relative">
            <div className="bg-white rounded-[44px] shadow-[0px_5.86px_26.81px_0px_rgba(0,0,0,0.25)] flex items-center px-5 py-3">
              {/* Search Icon */}
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Tìm nội dung slide"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-lg text-[#848383] placeholder:text-[#848383] outline-none bg-transparent"
              />

              {/* Search Button */}
              <button
                className="ml-3 bg-gradient-to-r from-[#f3a848] to-[#ee6e2f] rounded-full p-2.5 shadow-[0px_5.86px_5.86px_0px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 bg-[rgba(243,168,72,0.8)] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity backdrop-blur-sm"
          aria-label="Previous image"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        {/* Banner Navigation Dots */}
        <div className="flex flex-col gap-2 py-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-white w-2.5 h-2.5'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-10 h-10 bg-[rgba(243,168,72,0.8)] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity backdrop-blur-sm"
          aria-label="Next image"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

