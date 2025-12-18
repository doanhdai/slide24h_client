'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import IntroOutroHero from '@/components/sections/IntroOutroHero';
import FilterSection from '@/components/sections/FilterSection';
import SubFilterSection from '@/components/sections/SubFilterSection';
import CategorySection from '@/components/sections/CategorySection';
import SlideCard from '@/components/cards/SlideCard';
import {
  introOutroSlides,
  giaoDucVideos,
  daiCuongVideos,
  ngayLeSuKienVideos,
  gioiThieuThanhVienSlides,
  baoLucHocDuongSlides,
  baoLucGiaDinhSlides,
} from '@/constants/mockData';
import { Slide } from '@/types';

const CARDS_PER_PAGE = 12;

export default function IntroOutroPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('TẤT CẢ');
  const [activeSubFilter, setActiveSubFilter] = useState('Giáo Dục');
  const [currentPage, setCurrentPage] = useState(0);
  const filters = ['TẤT CẢ', 'VIDEO', 'SLIDE', 'POSTER'];

  // Check URL params for filter and scroll to section
  useEffect(() => {
    const filterParam = searchParams?.get('filter');
    const sectionParam = searchParams?.get('section');
    
    if (filterParam) {
      setActiveFilter(filterParam);
      
      // Set default sub-filter based on filter type
      if (filterParam === 'VIDEO') {
        setActiveSubFilter('Giáo Dục');
      } else if (filterParam === 'SLIDE') {
        setActiveSubFilter('Giới Thiệu Thành Viên');
      }
    }
    
    if (sectionParam) {
      // Convert section param to filter name for VIDEO
      const videoSectionToFilter: { [key: string]: string } = {
        'giao-duc': 'Giáo Dục',
        'dai-cuong': 'Đại Cương',
        'ngay-le-su-kien': 'Ngày Lễ - Sự Kiện',
      };
      
      // Convert section param to filter name for SLIDE
      const slideSectionToFilter: { [key: string]: string } = {
        'gioi-thieu-thanh-vien': 'Giới Thiệu Thành Viên',
        'bao-luc-hoc-duong': 'Bạo Lực Học Đường',
        'bao-luc-gia-dinh': 'Bạo Lực Gia Đình',
      };
      
      const filterName = videoSectionToFilter[sectionParam] || slideSectionToFilter[sectionParam];
      if (filterName) {
        setActiveSubFilter(filterName);
        
        // Scroll to section after a short delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(sectionParam);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }
    }
  }, [searchParams]);

  // Filter slides based on active filter
  const filteredSlides: Slide[] = useMemo(() => {
    // TODO: Implement actual filtering logic based on filter type
    return introOutroSlides;
  }, [activeFilter]);

  // Get videos by category
  const getVideosByCategory = (category: string): Slide[] => {
    switch (category) {
      case 'Giáo Dục':
        return giaoDucVideos;
      case 'Đại Cương':
        return daiCuongVideos;
      case 'Ngày Lễ - Sự Kiện':
        return ngayLeSuKienVideos;
      default:
        return giaoDucVideos;
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredSlides.length / CARDS_PER_PAGE);
  const startIndex = currentPage * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const currentSlides = filteredSlides.slice(startIndex, endIndex);

  // Reset to first page when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(0);
    // Reset sub-filter based on filter type
    if (filter === 'VIDEO') {
      setActiveSubFilter('Giáo Dục');
    } else if (filter === 'SLIDE') {
      setActiveSubFilter('Giới Thiệu Thành Viên');
    }
    
    // Update URL without section param when changing main filter
    if (filter === 'TẤT CẢ') {
      router.push('/intro-outro');
    } else {
      router.push(`/intro-outro?filter=${filter}`);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  // Show category layout when VIDEO or SLIDE filter is active
  const showCategoryLayout = activeFilter === 'VIDEO' || activeFilter === 'SLIDE';
  
  // Auto scroll when sub-filter changes (when clicking on intro-outro page)
  useEffect(() => {
    if (showCategoryLayout && activeSubFilter) {
      const sectionId = getSectionId(activeSubFilter);
      
      // Small delay to ensure sections are rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [activeSubFilter, showCategoryLayout]);
  
  // Get slides by category for SLIDE filter
  const getSlidesByCategory = (category: string): Slide[] => {
    switch (category) {
      case 'Giới Thiệu Thành Viên':
        return gioiThieuThanhVienSlides;
      case 'Bạo Lực Học Đường':
        return baoLucHocDuongSlides;
      case 'Bạo Lực Gia Đình':
        return baoLucGiaDinhSlides;
      default:
        return gioiThieuThanhVienSlides;
    }
  };

  // Get sub-filters based on active filter
  const getSubFilters = (): string[] => {
    if (activeFilter === 'VIDEO') {
      return ['Giáo Dục', 'Đại Cương', 'Ngày Lễ - Sự Kiện'];
    } else if (activeFilter === 'SLIDE') {
      return ['Giới Thiệu Thành Viên', 'Bạo Lực Học Đường', 'Bạo Lực Gia Đình'];
    }
    return [];
  };

  const currentSubFilters = getSubFilters();

  // Scroll to section when sub-filter is clicked
  const handleScrollToSection = (sectionId: string) => {
    // Update URL with section param
    const currentFilter = activeFilter === 'TẤT CẢ' ? '' : `filter=${activeFilter}&`;
    router.push(`/intro-outro?${currentFilter}section=${sectionId}`);
    
    // Scroll to section after a short delay
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
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
          onFilterChange={handleFilterChange}
        />

        {/* Sub-Filter Section - Show for VIDEO and SLIDE */}
        {showCategoryLayout && currentSubFilters.length > 0 && (
          <SubFilterSection
            subFilters={currentSubFilters}
            activeSubFilter={activeSubFilter}
            onSubFilterChange={setActiveSubFilter}
            onScrollToSection={handleScrollToSection}
          />
        )}

        {/* Content Section */}
        {showCategoryLayout ? (
          /* Category Layout (VIDEO or SLIDE) */
          activeFilter === 'VIDEO' ? (
            /* Video Layout with Categories */
            <>
              <CategorySection
                title="Giáo Dục"
                slides={giaoDucVideos}
                viewMoreHref="/video/giao-duc"
                sectionId={getSectionId('Giáo Dục')}
              />
              <CategorySection
                title="Đại Cương"
                slides={daiCuongVideos}
                viewMoreHref="/video/dai-cuong"
                sectionId={getSectionId('Đại Cương')}
              />
              <CategorySection
                title="Ngày Lễ - Sự Kiện"
                slides={ngayLeSuKienVideos}
                viewMoreHref="/video/ngay-le-su-kien"
                sectionId={getSectionId('Ngày Lễ - Sự Kiện')}
              />
            </>
          ) : (
            /* Slide Layout with Categories */
            <>
              <CategorySection
                title="Giới Thiệu Thành Viên"
                slides={gioiThieuThanhVienSlides}
                viewMoreHref="/slide/gioi-thieu-thanh-vien"
                sectionId={getSectionId('Giới Thiệu Thành Viên')}
              />
              <CategorySection
                title="Bạo Lực Học Đường"
                slides={baoLucHocDuongSlides}
                viewMoreHref="/slide/bao-luc-hoc-duong"
                sectionId={getSectionId('Bạo Lực Học Đường')}
              />
              <CategorySection
                title="Bạo Lực Gia Đình"
                slides={baoLucGiaDinhSlides}
                viewMoreHref="/slide/bao-luc-gia-dinh"
                sectionId={getSectionId('Bạo Lực Gia Đình')}
              />
            </>
          )
        ) : (
          /* Default Layout */
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">INTRO/OUTRO</h2>
              </div>

              {/* Cards Grid */}
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

              {/* Navigation Controls */}
              {totalPages > 1 && (
                <div className="flex flex-col items-center gap-4 mt-8">
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
                            ? 'bg-orange-500 w-8 h-2 rounded-full'
                            : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

