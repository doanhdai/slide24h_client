'use client';

import { useState } from 'react';
import SlideCard from '@/components/cards/SlideCard';
import Link from 'next/link';
import { Slide } from '@/types';

interface CategorySectionProps {
  title: string;
  slides: Slide[];
  viewMoreHref?: string;
  sectionId?: string;
}

export default function CategorySection({
  title,
  slides,
  viewMoreHref = '#',
  sectionId,
}: CategorySectionProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const slidesPerPage = 3;
  const totalPages = Math.ceil(slides.length / slidesPerPage);
  const startIndex = currentPage * slidesPerPage;
  const endIndex = startIndex + slidesPerPage;
  const currentSlides = slides.slice(startIndex, endIndex);

  return (
    <section id={sectionId} className="py-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold text-gray-900">{title}</h3>

          {/* Navigation Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    currentPage === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                  }`}
                  aria-label="Previous"
                >
                  <svg
                    className="w-5 h-5"
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
                  onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                  disabled={currentPage === totalPages - 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    currentPage === totalPages - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                  }`}
                  aria-label="Next"
                >
                  <svg
                    className="w-5 h-5"
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
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`transition-all ${
                      index === currentPage
                        ? 'bg-orange-500 w-2.5 h-2.5 rounded-full'
                        : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentSlides.map((slide) => (
            <SlideCard
              key={slide.id}
              id={slide.id}
              title={slide.title}
              image={slide.image}
              originalPrice={slide.originalPrice}
              discountedPrice={slide.discountedPrice}
              discountPercent={slide.discountPercent}
              views={slide.views}
              downloads={slide.downloads}
              href={slide.href}
              isFree={slide.isFree}
            />
          ))}
        </div>

        {/* Xem Thêm Button */}
        <div className="flex justify-center">
          <Link
            href={viewMoreHref}
            className="bg-gradient-to-b from-[#f29841] to-[#ee6e2f] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Xem Thêm
          </Link>
        </div>
      </div>
    </section>
  );
}

