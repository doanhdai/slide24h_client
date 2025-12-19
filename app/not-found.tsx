'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number with Animation */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-2">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-base text-gray-500">
              It might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Illustration or Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-64 h-64">
              {/* Animated circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-orange-200 animate-ping opacity-20"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-4 border-orange-300 animate-pulse opacity-30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-block bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/slide-templates"
                className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Slide Templates
              </Link>
              <Link
                href="/animations"
                className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Animations
              </Link>
              <Link
                href="/poster-design"
                className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Poster Design
              </Link>
              <Link
                href="/free-slides"
                className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Free Slides
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

