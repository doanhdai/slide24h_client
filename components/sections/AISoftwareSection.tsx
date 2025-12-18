'use client';

import { useState } from 'react';
import SlideCard from '@/components/cards/SlideCard';
import Link from 'next/link';
import { AISoftware } from '@/types';

interface AISoftwareSectionProps {
  categoryButton: string;
  title: string;
  hotTag?: boolean;
  products: AISoftware[];
  showViewMore?: boolean;
  viewMoreHref?: string;
}

export default function AISoftwareSection({
  categoryButton,
  title,
  hotTag = false,
  products,
  showViewMore = false,
  viewMoreHref = '#',
}: AISoftwareSectionProps) {
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

        {/* Header với Title và Navigation */}
        <div className="flex items-start justify-between mb-8">
          {/* Title với Hot Tag */}
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold text-gray-900 relative">
              <span className="relative inline-block pr-16">{title}
                {/* Hot Tag - góc trên bên phải của title */}
                {hotTag && (
                  <div className="absolute -top-3 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-dashed border-red-600 z-10">
                    Hot
                  </div>
                )}
              </span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-2">
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

        {/* Products Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <SlideCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              originalPrice={product.originalPrice}
              discountedPrice={product.discountedPrice}
              discountPercent={product.discountPercent}
              views={product.views}
              downloads={product.downloads}
              href={product.href}
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

