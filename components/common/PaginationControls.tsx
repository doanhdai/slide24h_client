interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}: PaginationControlsProps) {
  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    if (currentPage < 3) {
      return Array.from({ length: maxVisiblePages }, (_, i) => i);
    }

    if (currentPage >= totalPages - 3) {
      return Array.from(
        { length: maxVisiblePages },
        (_, i) => totalPages - maxVisiblePages + i
      );
    }

    return Array.from(
      { length: maxVisiblePages },
      (_, i) => currentPage - 2 + i
    );
  };

  const visiblePages = getVisiblePages();

  return (
    <>
      {/* Navigation Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            currentPage === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
          }`}
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5"
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
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            currentPage >= totalPages - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
          }`}
          aria-label="Next"
        >
          <svg
            className="w-5 h-5"
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
        {visiblePages.map((pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => onPageChange(pageIndex)}
            className={`transition-all ${
              pageIndex === currentPage
                ? 'bg-orange-500 w-2.5 h-2.5 rounded-full'
                : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${pageIndex + 1}`}
          />
        ))}
      </div>
    </>
  );
}

