'use client';

import { usePathname, useRouter } from 'next/navigation';

interface FilterSectionProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterSection({
  filters,
  activeFilter,
  onFilterChange,
}: FilterSectionProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isVideoCategoryPage = pathname?.startsWith('/video/');

  const handleFilterClick = (filter: string) => {
    onFilterChange(filter);
    
    // If we're on a video category page and clicking "TẤT CẢ"
    if (isVideoCategoryPage && filter === 'TẤT CẢ') {
      // Navigate back to intro-outro page
      router.push('/intro-outro');
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-6 py-3 rounded-full font-medium text-base transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#f29841] to-[#ee6e2f] text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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

