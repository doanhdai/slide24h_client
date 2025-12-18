import Link from 'next/link';
import Image from 'next/image';
import { Poster } from '@/types';

interface PosterCardProps extends Poster {
  isVertical?: boolean;
}

export default function PosterCard({
  image,
  href,
  originalPrice,
  discountedPrice,
  discountPercent,
  views,
  downloads,
  isVertical = false,
}: PosterCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num);
  };

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <Link
      href={href}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group relative"
    >
      {/* Background Image with Gradient Overlay */}
      <div className={isVertical ? "aspect-[259/428] relative bg-gray-200" : "aspect-[428/259] relative bg-gray-200"}>
        {image ? (
          <>
            <Image
              src={image}
              alt="Poster"
              fill
              className="object-cover"
            />
            {/* Gradient overlay - đen dần về bottom */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.85) 100%)',
              }}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400 text-sm">Poster</span>
          </div>
        )}

        {/* Content Overlay - Pricing, Stats, and Buy Button */}
        <div className={`absolute bottom-0 left-0 right-0 text-white ${isVertical ? 'p-3' : 'p-4'}`}>
          {/* Pricing */}
          {originalPrice && discountedPrice && discountPercent !== undefined && (
            <div className={isVertical ? "mb-2" : "mb-3"}>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-white/70 line-through text-xs">
                  {formatPrice(originalPrice)} ₫
                </span>
                <span className="text-orange-400 text-xs font-medium">
                  - {discountPercent}%
                </span>
              </div>
              {/* Price and Buy Button in same row */}
              <div className="flex items-center justify-between gap-2">
                <span className={`text-white font-bold ${isVertical ? 'text-base' : 'text-lg'}`}>
                  {formatPrice(discountedPrice)} ₫
                </span>
                {originalPrice && discountedPrice && (
                  <button
                    onClick={handleBuyClick}
                    className={`bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 ${isVertical ? 'px-4 py-1.5 text-xs' : 'px-6 py-2'}`}
                  >
                    Mua
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Stats - below price and button */}
          {(views !== undefined || downloads !== undefined) && (
            <div className={`flex items-center gap-3 text-white/90 ${isVertical ? 'text-xs' : 'text-sm'}`}>
              {views !== undefined && (
                <div className="flex items-center gap-1">
                  <svg
                    className={isVertical ? "w-3 h-3" : "w-4 h-4"}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{formatNumber(views)} lượt xem</span>
                </div>
              )}
              {downloads !== undefined && (
                <div className="flex items-center gap-1">
                  <svg
                    className={isVertical ? "w-3 h-3" : "w-4 h-4"}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>{formatNumber(downloads)} lượt tải</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
