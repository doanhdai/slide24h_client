'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import SearchAndFilterSection from '@/components/sections/SearchAndFilterSection';
import PosterCard from '@/components/cards/PosterCard';
import { allPosters } from '@/constants/mockData';

export default function ThietKePosterPage() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  // Poster-specific filters
  const posterFilters = [
    'Tất cả',
    'Giáng sinh',
    'Tết',
    '20/10',
    '20/11',
    '8/3',
    'Trung thu',
    'Quốc Khánh',
    'Giỗ tổ Hùng Vương',
  ];

  // Filter posters based on active filter
  const filteredPosters = activeFilter === 'Tất cả' 
    ? allPosters 
    : allPosters.filter(poster => poster.category === activeFilter);

  // Reset to first page when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  // Show only 6 posters
  const displayedPosters = filteredPosters.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Search and Filter Section */}
        <SearchAndFilterSection 
          onFilterChange={handleFilterChange}
          customFilters={posterFilters}
          searchPlaceholder="Tìm mẫu thiết kế"
        />

        {/* Poster Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Poster ngang
            </h2>

            {/* Posters Grid - 3 columns per row, only 6 posters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedPosters.map((poster) => (
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
                />
              ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center">
              <Link
                href="/thiet-ke-poster/xem-them"
                className="bg-gradient-to-b from-[#f29841] to-[#ee6e2f] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Xem Thêm
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

