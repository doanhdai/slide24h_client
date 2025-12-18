'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import SearchAndFilterSection from '@/components/sections/SearchAndFilterSection';
import FeaturedSlidesWithCategories from '@/components/sections/FeaturedSlidesWithCategories';
import SlideCard from '@/components/cards/SlideCard';
import { featuredSlides, morphSlides } from '@/constants/mockData';

export default function KhoMauSlidePage() {
  const [activeMainFilter, setActiveMainFilter] = useState('Tất cả');
  const [activeContentFilter, setActiveContentFilter] = useState('Mẫu slide và nội dung');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Search and Filter Section */}
        <SearchAndFilterSection 
          onFilterChange={setActiveMainFilter}
          showCategoryFilters={activeMainFilter === 'Mẫu PPT'}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Featured Slides Section */}
        {activeMainFilter === 'Mẫu PPT' ? (
          <SlidesWithCategoryFilters 
            activeContentFilter={activeContentFilter}
            onContentFilterChange={setActiveContentFilter}
            activeCategory={activeCategory}
          />
        ) : activeMainFilter === 'Morph' ? (
          <MorphSlidesSection />
        ) : (
          <FeaturedSlidesWithCategories slides={featuredSlides} />
        )}
      </main>

      <Footer />
    </div>
  );
}

// Component for displaying slides when Mẫu PPT is selected
function SlidesWithCategoryFilters({
  activeContentFilter,
  onContentFilterChange,
  activeCategory,
}: {
  activeContentFilter: string;
  onContentFilterChange: (filter: string) => void;
  activeCategory: string | null;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const slidesPerPage = 12;
  const totalPages = Math.ceil(featuredSlides.length / slidesPerPage);
  const startIndex = currentPage * slidesPerPage;
  const endIndex = startIndex + slidesPerPage;
  const currentSlides = featuredSlides.slice(startIndex, endIndex);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          SLIDE PPT
        </h2>

        {/* Content Filter Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => {
              onContentFilterChange('Mẫu slide và nội dung');
              setCurrentPage(0);
            }}
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              activeContentFilter === 'Mẫu slide và nội dung'
                ? 'bg-gradient-to-r from-[#f29841] to-[#ee6e2f] text-white shadow-md'
                : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-orange-500'
            }`}
          >
            Mẫu slide và nội dung
          </button>
          <button
            onClick={() => {
              onContentFilterChange('Chỉ có nội dung');
              setCurrentPage(0);
            }}
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              activeContentFilter === 'Chỉ có nội dung'
                ? 'bg-gradient-to-r from-[#f29841] to-[#ee6e2f] text-white shadow-md'
                : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-orange-500'
            }`}
          >
            Chỉ có nội dung
          </button>
        </div>

        {/* Slides Grid - 4 columns per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
            />
          ))}
        </div>

        {/* Pagination Controls at Bottom - only show if there are more than 12 slides */}
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
  );
}

// Component for displaying Morph slides
function MorphSlidesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const slidesPerPage = 9;
  const totalPages = Math.ceil(morphSlides.length / slidesPerPage);
  const startIndex = currentPage * slidesPerPage;
  const endIndex = startIndex + slidesPerPage;
  const currentSlides = morphSlides.slice(startIndex, endIndex);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Các Mẫu Morph
        </h2>

        {/* Slides Grid - 4 columns per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
            />
          ))}
        </div>

        {/* Pagination Controls at Bottom - only show if there are more than 9 slides */}
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
  );
}

