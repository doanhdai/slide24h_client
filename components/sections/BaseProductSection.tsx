'use client';

import { useState, useMemo } from 'react';
import { BaseSection, SectionHeader, PaginationControls, ViewMoreButton } from '@/components/common';
import SlideCard from '@/components/cards/SlideCard';
import { Slide } from '@/types';

interface BaseProductSectionProps {
  // Header props
  categoryButton?: string;
  title: string;
  hotTag?: boolean;
  trendTag?: boolean;
  
  // Data
  items: Slide[];
  
  // Pagination
  itemsPerPage?: number;
  showPagination?: boolean;
  
  // Grid layout
  gridCols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
  
  // View More
  showViewMore?: boolean;
  viewMoreHref?: string;
  viewMoreLabel?: string;
  
  // Section
  sectionId?: string;
  className?: string;
}

export default function BaseProductSection({
  categoryButton,
  title,
  hotTag = false,
  trendTag = false,
  items,
  itemsPerPage = 12,
  showPagination = true,
  gridCols = { default: 1, sm: 2, lg: 4 },
  showViewMore = false,
  viewMoreHref = '#',
  viewMoreLabel = 'View More',
  sectionId,
  className = '',
}: BaseProductSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = useMemo(
    () => Math.ceil(items.length / itemsPerPage),
    [items.length, itemsPerPage]
  );

  const displayedItems = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  const getGridClasses = () => {
    const cols = {
      default: gridCols.default || 1,
      sm: gridCols.sm || 2,
      md: gridCols.md || gridCols.sm || 2,
      lg: gridCols.lg || 4,
    };
    
    // Standard Tailwind grid classes
    const gridClassMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    };
    
    const smClassMap: Record<number, string> = {
      1: 'sm:grid-cols-1',
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-3',
      4: 'sm:grid-cols-4',
    };
    
    const mdClassMap: Record<number, string> = {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
    };
    
    const lgClassMap: Record<number, string> = {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
    };
    
    return [
      'grid gap-6',
      gridClassMap[cols.default] || 'grid-cols-1',
      cols.sm ? (smClassMap[cols.sm] || '') : '',
      cols.md ? (mdClassMap[cols.md] || '') : '',
      cols.lg ? (lgClassMap[cols.lg] || '') : '',
    ].filter(Boolean).join(' ');
  };

  return (
    <BaseSection id={sectionId} className={className}>
      <SectionHeader
        categoryButton={categoryButton}
        title={title}
        hotTag={hotTag}
        trendTag={trendTag}
        showNavigation={showPagination && totalPages > 1}
        navigationComponent={
          showPagination && totalPages > 1 ? (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          ) : undefined
        }
      />

      {/* Items Grid */}
      <div className={`${getGridClasses()} mb-8`}>
        {displayedItems.map((item) => (
          <SlideCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            originalPrice={item.originalPrice}
            discountedPrice={item.discountedPrice}
            discountPercent={item.discountPercent}
            views={item.views}
            downloads={item.downloads}
            href={item.href}
            isFree={item.isFree}
          />
        ))}
      </div>

      {/* View More Button */}
      {showViewMore && (
        <ViewMoreButton href={viewMoreHref} label={viewMoreLabel} />
      )}
    </BaseSection>
  );
}

