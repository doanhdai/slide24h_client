'use client';

import { useState } from 'react';
import PosterCard from '@/components/cards/PosterCard';
import Link from 'next/link';
import { Poster } from '@/types';

interface PosterSectionProps {
  categoryButton: string;
  title: string;
  trendTag?: boolean;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  topRowPosters: Poster[]; // 3 cards lớn
  bottomRowPosters: Poster[]; // 4 cards nhỏ
  showViewMore?: boolean;
  viewMoreHref?: string;
}

export default function PosterSection({
  categoryButton,
  title,
  trendTag = false,
  categories,
  activeCategory,
  onCategoryChange,
  topRowPosters,
  bottomRowPosters,
  showViewMore = false,
  viewMoreHref = '#',
}: PosterSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Button - ở trên */}
        <div className="mb-6">
          <div className="inline-block bg-gradient-to-b from-[#f29841] to-[#ee6e2f] px-[17px] py-[8px] rounded-[46px]">
            <p className="capitalize font-medium text-[20px] text-white whitespace-nowrap">
              {categoryButton}
            </p>
          </div>
        </div>

        {/* Header với Title, Categories, và Navigation */}
        <div className="flex items-start justify-between mb-8 gap-4">
          <div className="flex-1">
            {/* Title với Trend Tag */}
            <div className="relative inline-block mb-4">
              <h2 className="text-3xl font-bold text-gray-900 relative">
                <span className="relative inline-block pr-16">{title}
                  {/* Trend Tag - góc trên bên phải của title */}
                  {trendTag && (
                    <div className="absolute -top-3 right-0 bg-gradient-to-r from-[#ff7070] to-[#ff0000] px-[5.357px] py-[5.357px] rounded-[27.321px] z-10">
                      <p className="font-bold text-[14.261px] text-white whitespace-nowrap">
                        Trend
                      </p>
                    </div>
                  )}
                </span>
              </h2>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-3 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? 'bg-[#FFE5CC] text-orange-600' // Màu cam nhạt khi active
                      : 'bg-gray-200 text-gray-600' // Màu xám khi không active
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
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
              <button
                onClick={() => setCurrentPage(Math.min(2, currentPage + 1))}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
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

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    page === currentPage
                      ? 'bg-orange-500 w-2.5 h-2.5'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${page + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Top Row - 3 cards lớn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topRowPosters.map((poster) => (
            <PosterCard
              key={poster.id}
              id={poster.id}
              image={poster.image}
              href={poster.href}
            />
          ))}
        </div>

        {/* Bottom Row - 4 cards nhỏ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {bottomRowPosters.map((poster) => (
            <PosterCard
              key={poster.id}
              id={poster.id}
              image={poster.image}
              href={poster.href}
            />
          ))}
        </div>

        {/* View More Button */}
        {showViewMore && (
          <div className="flex justify-center">
            <Link
              href={viewMoreHref}
              className="bg-gradient-to-b from-[#f29841] to-[#ee6e2f] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Xem Thêm
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

