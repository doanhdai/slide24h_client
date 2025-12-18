'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative w-full h-[480px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Search Bar Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl relative">
          {/* Search Input */}
          <div className="relative">
            <div className="bg-white rounded-[44px] shadow-[0px_5.86px_26.81px_0px_rgba(0,0,0,0.25)] flex items-center px-6 py-4">
              {/* Search Icon */}
              <svg
                className="w-6 h-6 text-gray-400 mr-4"
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
                className="flex-1 text-[23px] text-[#848383] placeholder:text-[#848383] outline-none bg-transparent"
              />

              {/* Search Button */}
              <button
                className="ml-4 bg-gradient-to-r from-[#f3a848] to-[#ee6e2f] rounded-full p-3 shadow-[0px_5.86px_5.86px_0px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
                aria-label="Search"
              >
                <svg
                  className="w-6 h-6 text-white"
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

      {/* Navigation Arrows - Left Side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <button
          className="w-10 h-10 bg-black/21 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors backdrop-blur-sm"
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5 text-white rotate-90"
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
        <button
          className="w-10 h-10 bg-black/21 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors backdrop-blur-sm"
          aria-label="Next"
        >
          <svg
            className="w-5 h-5 text-white -rotate-90"
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

      {/* Scroll Indicator - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
        <button
          className="w-10 h-10 bg-[rgba(243,168,72,0.8)] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity backdrop-blur-sm"
          aria-label="Scroll up"
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

        {/* Scroll Dots */}
        <div className="flex flex-col gap-2 py-2">
          {[1, 2, 3, 4].map((dot, index) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full transition-all ${
                index === 1
                  ? 'bg-white w-2.5 h-2.5'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          className="w-10 h-10 bg-[rgba(243,168,72,0.8)] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity backdrop-blur-sm"
          aria-label="Scroll down"
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

