'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import SearchAndFilterSection from '@/components/sections/SearchAndFilterSection';
import SlideCard from '@/components/cards/SlideCard';
import { animations } from '@/constants/mockData';

export default function AnimationsPage() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(0);

  // Filter buttons for animations page
  const animationFilters = [
    'Tất cả',
    'Hot trend',
    'Mẫu PPT',
    'Intro/Outro',
    'Game',
    'Backdrop',
    'Graphic',
    'Morph',
  ];

  // Filter animations based on active filter
  // For now, show all animations when "Tất cả" is selected
  const filteredAnimations = activeFilter === 'Tất cả' 
    ? animations 
    : animations; // TODO: Implement actual category filtering when category data is available

  // Pagination: 12 animations per page
  const animationsPerPage = 12;
  const totalPages = Math.ceil(filteredAnimations.length / animationsPerPage);
  const startIndex = currentPage * animationsPerPage;
  const endIndex = startIndex + animationsPerPage;
  const currentAnimations = filteredAnimations.slice(startIndex, endIndex);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(0); // Reset to first page when filter changes
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Search and Filter Section */}
        <SearchAndFilterSection 
          onFilterChange={handleFilterChange}
          customFilters={animationFilters}
          searchPlaceholder="Tìm kiếm"
        />

        {/* Animations Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Hoạt Hình
            </h2>

            {/* Animations Grid - 4 columns per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {currentAnimations.map((animation) => (
                <SlideCard
                  key={animation.id}
                  id={animation.id}
                  title={animation.title}
                  image={animation.image}
                  originalPrice={animation.originalPrice}
                  discountedPrice={animation.discountedPrice}
                  discountPercent={animation.discountPercent}
                  views={animation.views}
                  downloads={animation.downloads}
                  href={animation.href}
                  isFree={animation.isFree}
                />
              ))}
            </div>

            {/* Pagination Controls - only show if there are more than 12 animations */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-2">
                {/* Navigation Buttons */}
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
                <div className="flex gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
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
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

