'use client';

import { useState, useMemo } from 'react';
import PosterPageLayout from '@/components/layout/PosterPageLayout';
import PosterListSection from '@/components/sections/PosterListSection';
import { allPosters } from '@/constants/mockData';

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

export default function ThietKePosterXemThemPage() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredPosters = useMemo(() => {
    return activeFilter === 'Tất cả' 
      ? allPosters 
      : allPosters.filter(poster => poster.category === activeFilter);
  }, [activeFilter]);

  // Split posters: first 6 for ngang, next 10 for doc
  const postersNgang = filteredPosters.slice(0, 6);
  const postersDoc = filteredPosters.slice(6, 16);
  const hasMoreDoc = filteredPosters.length > 16;

  return (
    <PosterPageLayout
      activeFilter={activeFilter}
      onFilterChange={handleFilterChange}
      customFilters={posterFilters}
    >
      <PosterListSection
        title="Poster ngang"
        posters={postersNgang}
        postersPerPage={6}
        gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        isVertical={false}
        showViewMore={true}
        viewMoreHref="/thiet-ke-poster/xem-them/ngang"
        showTopPagination={false}
      />

      <PosterListSection
        title="Poster dọc"
        posters={postersDoc}
        postersPerPage={10}
        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        isVertical={true}
        showViewMore={hasMoreDoc}
        viewMoreHref="/thiet-ke-poster/xem-them/doc"
        showTopPagination={false}
      />
    </PosterPageLayout>
  );
}

