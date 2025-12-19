import Link from 'next/link';
import Image from 'next/image';
import { Slide } from '@/types';

interface SlideCardProps extends Slide {
  isFree?: boolean;
}

// Category slugs that should stay as /slide/...
const categorySlugs = [
  'gioi-thieu-thanh-vien',
  'bao-luc-hoc-duong',
  'bao-luc-gia-dinh',
];

export default function SlideCard({
  title,
  image,
  originalPrice,
  discountedPrice,
  discountPercent,
  views,
  downloads,
  href,
  isFree = false,
}: SlideCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num);
  };

  const getProductHref = (href: string): string => {
    if (href.startsWith('/slide/')) {
      const slug = href.replace('/slide/', '');
      if (!categorySlugs.includes(slug)) {
        return href.replace('/slide/', '/product/');
      }
    }
    if (href.startsWith('/animations/')) {
      const slug = href.replace('/animations/', '');
      return `/product/${slug}`;
    }
    if (href.startsWith('/ai-accounts/')) {
      const slug = href.replace('/ai-accounts/', '');
      return `/product/${slug}`;
    }
    return href;
  };

  const productHref = getProductHref(href);

  return (
    <Link href={productHref} className="block bg-white rounded-[15.505px] shadow-[0px_3.101px_3.101px_0px_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-lg transition-shadow">
      {/* Preview Image */}
      <div className="aspect-[428/259] relative bg-gray-200">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400 text-sm">{title}</span>
          </div>
        )}
        {/* FREE Tag */}
        {isFree && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            FREE
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Pricing và Buy/Download Button */}
        <div className="flex items-start justify-between gap-3 mb-3">
          {/* Pricing - bên trái, giá gốc ở trên, giá giảm ở dưới */}
          {isFree ? (
            <div className="flex flex-col flex-1">
              <span className="text-orange-500 font-bold text-lg">
                FREE
              </span>
            </div>
          ) : (
            <div className="flex flex-col flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-gray-400 line-through text-sm">
                  {formatPrice(originalPrice)} ₫
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-orange-500 font-bold text-lg">
                  {formatPrice(discountedPrice)} ₫
                </span>
                <span className="text-gray-500 text-sm">
                  - {discountPercent}%
                </span>
              </div>
            </div>
          )}

          {/* Buy/Download Button - bên phải */}
          <button
            onClick={(e) => {
              e.preventDefault();
              if (isFree) {
                // Handle download for free slides
                window.location.href = productHref;
              } else {
                window.location.href = productHref;
              }
            }}
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-9 py-2 rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            {isFree ? 'Tải Xuống' : 'Mua'}
          </button>
        </div>

        {/* Stats - ở dưới cùng, 2 stats ở 2 bên */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
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
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
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
        </div>
      </div>
    </Link>
  );
}

