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

export default function PosterDocPage() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredPosters = useMemo(() => {
    return activeFilter === 'Tất cả' 
      ? allPosters 
      : allPosters.filter(poster => poster.category === activeFilter);
  }, [activeFilter]);

  return (
    <PosterPageLayout
      activeFilter={activeFilter}
      onFilterChange={handleFilterChange}
      customFilters={posterFilters}
    >
      <PosterListSection
        title="Poster dọc"
        posters={filteredPosters}
        postersPerPage={20}
        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        isVertical={true}
        showTopPagination={true}
        showBottomPagination={true}
      />
    </PosterPageLayout>
  );
}

