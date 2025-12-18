'use client';

import { useState } from 'react';

interface SearchAndFilterSectionProps {
  onFilterChange?: (filter: string) => void;
  showCategoryFilters?: boolean;
  activeCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
  customFilters?: string[];
  searchPlaceholder?: string;
  initialFilter?: string;
  hideFilters?: boolean; // Hide filter buttons, only show search bar
}

export default function SearchAndFilterSection({
  onFilterChange,
  showCategoryFilters = false,
  activeCategory,
  onCategoryChange,
  customFilters,
  searchPlaceholder = 'Tìm nội dung slide',
  initialFilter = 'Tất cả',
  hideFilters = false,
}: SearchAndFilterSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  // Category filters for Mẫu PPT
  const categoryFilters = [
    'Giáo Dục',
    'Địa Danh',
    'Văn Hoá - Ẩm Thực',
    'Danh Nhân - Doanh Nhân',
    'Tôn Giáo',
    'Đội - Đoàn - Đảng',
    'Ngày lễ - sự kiện',
    'Đại Cương',
    'Xã Hội',
    'Kế Toán Logistic',
    'Công Ty - Marketing',
    'Công Nghệ AI',
    'Y Tế - Sinh Học',
    'Nông Nghiệp - Môi Trường',
    'Khác',
  ];

  const defaultFilters = [
    'Tất cả',
    'Hot trend',
    'Mẫu PPT',
    'Intro/Outro',
    'Game',
    'Backdrop',
    'Graphic',
    'Morph',
  ];

  const filters = customFilters || defaultFilters;

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  const handleCategoryClick = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(activeCategory === category ? null : category);
    }
  };

  return (
    <section className="py-8 bg-gradient-to-b from-white via-[#FFE4E4] to-white" style={{ background: 'linear-gradient(1.20358deg, rgb(255, 255, 255) 26.16%, rgb(255, 228, 228) 97.725%)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[30px] shadow-[0px_0px_8.1px_0px_rgba(0,0,0,0.25)] p-6 md:p-9">
          {/* Search Bar */}
          <div className="mb-6 flex justify-center">
            <div 
              className="w-full max-w-[1195px] h-40 rounded-[15px] flex items-center justify-center px-6"
              style={{ background: 'linear-gradient(2deg, #FFE0EB 25.9%, #FFF 95.5%)' }}
            >
              {/* Search Input Container */}
              <div className="w-[481.98px] h-16 bg-white rounded-[43.95px] shadow-[0px_5.860182285308838px_26.810333251953125px_0px_rgba(0,0,0,0.25)] flex items-center px-6">
                {/* Search Icon */}
                <svg
                  className="w-6 h-6 text-gray-400 mr-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                {/* Input Field */}
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-base md:text-[23px] text-[#848383] placeholder:text-[#848383] outline-none bg-transparent"
                />

                {/* Search Button - Circular, attached to input */}
                <button
                  className="ml-3 w-12 h-12 bg-gradient-to-r from-[#f3a848] to-[#ee6e2f] rounded-full shadow-[0px_5.86px_5.86px_0px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity flex items-center justify-center shrink-0"
                  aria-label="Search"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
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
            </div>
          </div>

          {/* Filter Buttons - 2 rows layout: 5 buttons on first row, 4 on second */}
          {!hideFilters && (
          <div className="flex flex-col gap-4">
            {/* First Row - 5 buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              {filters.slice(0, 5).map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`flex-1 min-w-0 px-8 py-5 rounded-[9px] font-medium text-base whitespace-nowrap transition-colors flex items-center justify-center gap-3 relative ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-[#f29841] to-[#ee6e2f] text-white shadow-[0px_1px_4.4px_0px_rgba(0,0,0,0.25)]'
                      : 'bg-white text-gray-900 shadow-[0px_1px_4.4px_0px_rgba(0,0,0,0.25)] hover:opacity-90'
                  }`}
                >
                  {activeFilter === filter && (
                    <svg
                      className="w-5 h-5 absolute -bottom-1 -left-1 z-10"
                      fill="#FFD700"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {filter}
                </button>
              ))}
            </div>
            {/* Second Row - 4 buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              {filters.slice(5).map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`flex-1 min-w-0 px-8 py-5 rounded-[9px] font-medium text-base whitespace-nowrap transition-colors flex items-center justify-center gap-3 relative ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-[#f29841] to-[#ee6e2f] text-white shadow-[0px_1px_4.4px_0px_rgba(0,0,0,0.25)]'
                      : 'bg-white text-gray-900 shadow-[0px_1px_4.4px_0px_rgba(0,0,0,0.25)] hover:opacity-90'
                  }`}
                >
                  {activeFilter === filter && (
                    <svg
                      className="w-5 h-5 absolute -bottom-1 -left-1 z-10"
                      fill="#FFD700"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {filter}
                </button>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Category Filters - Separate section, show when Mẫu PPT is selected */}
      {showCategoryFilters && (
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <div className="bg-white rounded-[30px] shadow-[0px_0px_8.1px_0px_rgba(0,0,0,0.25)] p-6 md:p-9">
            <div className="flex flex-col gap-3">
              {/* First Row - 6 categories */}
              <div className="flex items-center gap-3 flex-wrap">
                {categoryFilters.slice(0, 6).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-[#f29841] to-[#ee6e2f] text-white shadow-md'
                        : 'bg-white text-gray-900 border border-gray-300 hover:border-orange-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              {/* Second Row - 6 categories */}
              <div className="flex items-center gap-3 flex-wrap">
                {categoryFilters.slice(6, 12).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-[#f29841] to-[#ee6e2f] text-white shadow-md'
                        : 'bg-white text-gray-900 border border-gray-300 hover:border-orange-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              {/* Third Row - 3 categories */}
              <div className="flex items-center gap-3 flex-wrap">
                {categoryFilters.slice(12).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-[#f29841] to-[#ee6e2f] text-white shadow-md'
                        : 'bg-white text-gray-900 border border-gray-300 hover:border-orange-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

