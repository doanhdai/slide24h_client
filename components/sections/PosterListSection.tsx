'use client';

import { useState } from 'react';
import Link from 'next/link';
import PosterCard from '@/components/cards/PosterCard';
import { Poster } from '@/types';

interface PosterListSectionProps {
  title: string;
  posters: Poster[];
  postersPerPage: number;
  gridCols?: string; // e.g., "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  isVertical?: boolean;
  showViewMore?: boolean;
  viewMoreHref?: string;
  showBottomPagination?: boolean;
  showTopPagination?: boolean;
}

export default function PosterListSection({
  title,
  posters,
  postersPerPage,
  gridCols = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  isVertical = false,
  showViewMore = false,
  viewMoreHref,
  showBottomPagination = false,
  showTopPagination = true,
}: PosterListSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(posters.length / postersPerPage);
  const startIndex = currentPage * postersPerPage;
  const endIndex = startIndex + postersPerPage;
  const currentPosters = posters.slice(startIndex, endIndex);
  const hasMore = endIndex < posters.length;

  const renderPaginationDots = (maxDots: number = 5) => {
    return (
      <div className="flex gap-2">
        {Array.from({ length: Math.min(maxDots, totalPages) }).map((_, index) => {
          const pageIndex = currentPage < 3 ? index : currentPage - 2 + index;
          if (pageIndex >= totalPages) return null;
          return (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex)}
              className={`transition-colors ${
                pageIndex === currentPage
                  ? 'bg-orange-500 w-8 h-2 rounded-full'
                  : 'bg-white border border-gray-300 w-2 h-2 rounded-full'
              }`}
              aria-label={`Go to page ${pageIndex + 1}`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Title and Navigation */}
        <div className="flex items-start justify-between mb-8 gap-4">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          </div>

          {/* Navigation Controls */}
          {showTopPagination && (
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
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
                  onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                  disabled={currentPage >= totalPages - 1}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
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
              {renderPaginationDots()}
            </div>
          )}
        </div>

        {/* Posters Grid */}
        <div className={`grid ${gridCols} gap-6 mb-8`}>
          {currentPosters.map((poster) => (
            <PosterCard
              key={poster.id}
              id={poster.id}
              image={poster.image}
              href={poster.href}
              originalPrice={poster.originalPrice}
              discountedPrice={poster.discountedPrice}
              discountPercent={poster.discountPercent}
              views={poster.views}
              downloads={poster.downloads}
              isVertical={isVertical}
            />
          ))}
        </div>

        {/* View More Button */}
        {showViewMore && viewMoreHref && (
          <div className="flex justify-center">
            <Link
              href={viewMoreHref}
              className="bg-gradient-to-b from-[#f29841] to-[#ee6e2f] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Xem Thêm
            </Link>
          </div>
        )}

        {/* Pagination Dots at Bottom */}
        {showBottomPagination && hasMore && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {renderPaginationDots()}
          </div>
        )}
      </div>
    </section>
  );
}

