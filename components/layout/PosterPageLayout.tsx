'use client';

import { ReactNode } from 'react';
import { Header, Footer } from '@/components/layout';
import SearchAndFilterSection from '@/components/sections/SearchAndFilterSection';

interface PosterPageLayoutProps {
  children: ReactNode;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  customFilters: string[];
}

export default function PosterPageLayout({
  children,
  activeFilter,
  onFilterChange,
  customFilters,
}: PosterPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Search and Filter Section */}
        <SearchAndFilterSection 
          onFilterChange={onFilterChange}
          customFilters={customFilters}
          searchPlaceholder="Tìm mẫu thiết kế"
        />

        {children}
      </main>

      <Footer />
    </div>
  );
}

