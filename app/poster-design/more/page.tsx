'use client';

import { useState, useMemo } from 'react';
import PosterPageLayout from '@/components/layout/PosterPageLayout';
import PosterListSection from '@/components/sections/PosterListSection';
import { allPosters } from '@/constants/mockData';
import { ROUTES } from '@/constants/routes';

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

export default function PosterDesignMorePage() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredPosters = useMemo(() => {
    return activeFilter === 'Tất cả' 
      ? allPosters 
      : allPosters.filter(poster => poster.category === activeFilter);
  }, [activeFilter]);

  // Split posters: first 6 for horizontal, next 10 for vertical
  const postersHorizontal = filteredPosters.slice(0, 6);
  const postersVertical = filteredPosters.slice(6, 16);
  const hasMoreVertical = filteredPosters.length > 16;

  return (
    <PosterPageLayout
      activeFilter={activeFilter}
      onFilterChange={handleFilterChange}
      customFilters={posterFilters}
    >
      <PosterListSection
        title="Poster ngang"
        posters={postersHorizontal}
        postersPerPage={6}
        gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        isVertical={false}
        showViewMore={true}
        viewMoreHref={ROUTES.POSTER_DESIGN_HORIZONTAL}
        showTopPagination={false}
      />

      <PosterListSection
        title="Poster dọc"
        posters={postersVertical}
        postersPerPage={10}
        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        isVertical={true}
        showViewMore={hasMoreVertical}
        viewMoreHref={ROUTES.POSTER_DESIGN_VERTICAL}
        showTopPagination={false}
      />
    </PosterPageLayout>
  );
}

