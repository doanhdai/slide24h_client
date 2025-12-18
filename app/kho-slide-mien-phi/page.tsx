'use client';

import { useState, useMemo } from 'react';
import { Header, Footer } from '@/components/layout';
import SearchAndFilterSection from '@/components/sections/SearchAndFilterSection';
import SlideCard from '@/components/cards/SlideCard';
import { freeSlides } from '@/constants/mockData';

export default function KhoSlideMienPhiPage() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(0);

  // Filter buttons for free slides page
  const freeSlideFilters = ['Tất cả', 'Graphic', 'Template'];

  // Filter slides based on active filter
  const filteredSlides = useMemo(() => {
    if (activeFilter === 'Tất cả') {
      return freeSlides;
    }
    return freeSlides.filter(slide => slide.category === activeFilter);
  }, [activeFilter]);

  // Pagination: 6 slides per page
  const slidesPerPage = 6;
  const totalPages = Math.ceil(filteredSlides.length / slidesPerPage);
  const startIndex = currentPage * slidesPerPage;
  const endIndex = startIndex + slidesPerPage;
  const currentSlides = filteredSlides.slice(startIndex, endIndex);

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
          customFilters={freeSlideFilters}
          searchPlaceholder="Tìm kiếm"
        />

        {/* Free Slides Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              KHO SLIDE MIỄN PHÍ
            </h2>

            {/* Slides Grid - 3 columns per row, only 6 slides per page */}
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
                  isFree={true}
                />
              ))}
            </div>

            {/* Pagination Controls - only show if there are more than 6 slides */}
            {filteredSlides.length > slidesPerPage && (
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

