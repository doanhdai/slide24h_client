'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function IntroOutroHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black">
      {/* Background Image - placeholder, sẽ thay bằng image thực tế */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Placeholder for background image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/20 text-6xl font-bold">Background Image</div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between px-8 py-12">
        {/* Top Section - Title */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            GIỚI THIỆU THÀNH VIÊN
          </h1>
          <p className="text-red-500 text-xl md:text-2xl font-medium">
            INTRO NHÓM BÀI THUYẾT TRÌNH LÀM SAO CHO NGẦU?
          </p>
        </div>

        {/* Bottom Section - Navigation */}
        <div className="relative">
          {/* Red curved line separator */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-500 rounded-full"></div>
          
          {/* Black strip with SLIDE and navigation */}
          <div className="mt-2 bg-black py-4 flex items-center justify-center gap-6">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              aria-label="Previous slide"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* SLIDE Label */}
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-bold uppercase">SLIDE</span>
              <div className="w-full h-1 bg-red-500 mt-1"></div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentSlide(currentSlide + 1)}
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
              aria-label="Next slide"
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
    </section>
  );
}

