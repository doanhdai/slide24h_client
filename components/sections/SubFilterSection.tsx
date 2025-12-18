'use client';

import { usePathname, useRouter } from 'next/navigation';

interface SubFilterSectionProps {
  subFilters: string[];
  activeSubFilter: string;
  onSubFilterChange: (filter: string) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export default function SubFilterSection({
  subFilters,
  activeSubFilter,
  onSubFilterChange,
  onScrollToSection,
}: SubFilterSectionProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isVideoCategoryPage = pathname?.startsWith('/video/') || pathname?.startsWith('/slide/');

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

  // Helper function to convert filter name to category slug
  const getCategorySlug = (filter: string): string => {
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

  const handleFilterClick = (filter: string) => {
    onSubFilterChange(filter);
    
    // If we're on a video/slide category page and clicking a different category
    if (isVideoCategoryPage && filter !== activeSubFilter) {
      // Determine filter type from pathname
      const filterType = pathname?.includes('/video/') ? 'VIDEO' : 'SLIDE';
      // Navigate back to intro-outro page with filter and section param
      const sectionId = getSectionId(filter);
      router.push(`/intro-outro?filter=${filterType}&section=${sectionId}`);
    } else {
      // Normal scroll behavior when on intro-outro page
      const sectionId = getSectionId(filter);
      if (onScrollToSection) {
        onScrollToSection(sectionId);
      }
    }
  };

  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-white rounded-[23px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] px-9 py-6 flex items-center gap-[63px] flex-wrap"
        >
          {subFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`text-[18.7px] font-semibold transition-colors ${
                activeSubFilter === filter
                  ? 'text-gray-900'
                  : 'text-[#b8b8b8] hover:text-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

