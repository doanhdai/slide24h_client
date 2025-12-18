'use client';

import { useState } from 'react';
import PosterSection from './PosterSection';

interface Poster {
  id: string;
  image?: string;
  href: string;
}

interface PosterSectionWrapperProps {
  topRowPosters: Poster[];
  bottomRowPosters: Poster[];
}

export default function PosterSectionWrapper({
  topRowPosters,
  bottomRowPosters,
}: PosterSectionWrapperProps) {
  const [activeCategory, setActiveCategory] = useState('Giáng sinh');
  const categories = ['Giáng sinh', 'Tết', '20/10', '20/11'];

  return (
    <PosterSection
      categoryButton="Poster"
      title="Thiết Kế"
      trendTag={true}
      categories={categories}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
      topRowPosters={topRowPosters}
      bottomRowPosters={bottomRowPosters}
      showViewMore={true}
      viewMoreHref="/thiet-ke-poster/xem-them"
    />
  );
}

