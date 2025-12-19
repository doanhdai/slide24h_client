'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import SearchAndFilterSection from '@/components/sections/SearchAndFilterSection';
import SlideCard from '@/components/cards/SlideCard';
import { aiSoftwareProducts } from '@/constants/mockData';

export default function AIAccountsPage() {
  const [currentPage, setCurrentPage] = useState(0);

  // Pagination: 6 products per page
  const productsPerPage = 6;
  const totalPages = Math.ceil(aiSoftwareProducts.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = aiSoftwareProducts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Search Section - Only search bar, no filters */}
        <SearchAndFilterSection 
          hideFilters={true}
          searchPlaceholder="Tìm kiếm"
        />

        {/* AI Accounts Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Tài Khoản AI
            </h2>

            {/* Products Grid - 3 columns per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentProducts.map((product) => (
                <SlideCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                  discountPercent={product.discountPercent}
                  views={product.views}
                  downloads={product.downloads}
                  href={product.href}
                />
              ))}
            </div>

            {/* Pagination Controls - only show if there are more than 6 products */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-2">
                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    aria-label="Previous"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                    disabled={currentPage >= totalPages - 1}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    aria-label="Next"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
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

                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
                    const pageIndex = currentPage < 3 ? index : currentPage - 2 + index;
                    if (pageIndex >= totalPages) return null;
                    return (
                      <button
                        key={pageIndex}
                        onClick={() => setCurrentPage(pageIndex)}
                        className={`transition-colors ${
                          pageIndex === currentPage
                            ? 'bg-orange-500 w-8 h-2 rounded-full'
                            : 'bg-white border border-gray-300 w-2 h-2 rounded-full'
                        }`}
                        aria-label={`Go to page ${pageIndex + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

