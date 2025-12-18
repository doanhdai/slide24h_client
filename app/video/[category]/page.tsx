'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import IntroOutroHero from '@/components/sections/IntroOutroHero';
import FilterSection from '@/components/sections/FilterSection';
import SubFilterSection from '@/components/sections/SubFilterSection';
import SlideCard from '@/components/cards/SlideCard';
import {
  giaoDucVideos,
  daiCuongVideos,
  ngayLeSuKienVideos,
} from '@/constants/mockData';
import { Slide } from '@/types';

const CARDS_PER_PAGE = 12;

// Map category slug to data
const categoryDataMap: { [key: string]: Slide[] } = {
  'giao-duc': giaoDucVideos,
  'dai-cuong': daiCuongVideos,
  'ngay-le-su-kien': ngayLeSuKienVideos,
};

// Map category slug to title
const categoryTitleMap: { [key: string]: string } = {
  'giao-duc': 'Giáo Dục',
  'dai-cuong': 'Đại Cương',
  'ngay-le-su-kien': 'Ngày Lễ - Sự Kiện',
};

export default function VideoCategoryPage() {
  const params = useParams();
  const category = params?.category as string;
  const [currentPage, setCurrentPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState('VIDEO');
  const [activeSubFilter, setActiveSubFilter] = useState(
    categoryTitleMap[category] || 'Giáo Dục'
  );

  const filters = ['TẤT CẢ', 'VIDEO', 'SLIDE', 'POSTER'];
  const subFilters = ['Giáo Dục', 'Đại Cương', 'Ngày Lễ - Sự Kiện'];

  // Get slides for this category
  const allSlides = useMemo(() => {
    return categoryDataMap[category] || giaoDucVideos;
  }, [category]);

  const categoryTitle = categoryTitleMap[category] || 'Giáo Dục';

  // Calculate pagination
  const totalPages = Math.ceil(allSlides.length / CARDS_PER_PAGE);
  const startIndex = currentPage * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const currentSlides = allSlides.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  // Scroll to section when sub-filter is clicked
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper function to convert filter name to section ID
  const getSectionId = (filter: string): string => {
    return filter
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
      .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
      .replace(/[ìíịỉĩ]/g, 'i')
      .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
      .replace(/[ùúụủũưừứựửữ]/g, 'u')
      .replace(/[ỳýỵỷỹ]/g, 'y')
      .replace(/đ/g, 'd');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <IntroOutroHero />

        {/* Filter Section */}
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Sub-Filter Section */}
        <SubFilterSection
          subFilters={subFilters}
          activeSubFilter={activeSubFilter}
          onSubFilterChange={setActiveSubFilter}
          onScrollToSection={handleScrollToSection}
        />
        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header with Title and Navigation */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">{categoryTitle}</h2>

              {/* Navigation Controls - Right side */}
              {totalPages > 1 && (
                <div className="flex flex-col items-center gap-2">
                  {/* Navigation Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={handlePreviousPage}
                      disabled={currentPage === 0}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        currentPage === 0
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                      }`}
                      aria-label="Previous page"
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
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages - 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        currentPage === totalPages - 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                      }`}
                      aria-label="Next page"
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
      </main>

      <Footer />
    </div>
  );
}

