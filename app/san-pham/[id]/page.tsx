'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Slide, AISoftware } from '@/types';
import { featuredSlides, morphSlides, freeSlides, animations, aiSoftwareProducts } from '@/constants/mockData';

// Convert AISoftware to Slide format for reuse
const convertAISoftwareToSlide = (ai: AISoftware): Slide => ({
  id: ai.id,
  title: ai.title,
  image: ai.image,
  originalPrice: ai.originalPrice,
  discountedPrice: ai.discountedPrice,
  discountPercent: ai.discountPercent,
  views: ai.views,
  downloads: ai.downloads,
  href: ai.href,
});

// Combine all slides to find by id
const allSlides: Slide[] = [
  ...featuredSlides, 
  ...morphSlides, 
  ...freeSlides, 
  ...animations,
  ...aiSoftwareProducts.map(convertAISoftwareToSlide),
];

// Category slugs that should not be treated as product IDs
const categorySlugs = [
  'gioi-thieu-thanh-vien',
  'bao-luc-hoc-duong',
  'bao-luc-gia-dinh',
];

export default function SlideDetailPage() {
  const params = useParams();
  const slideId = params?.id as string;
  
  // Check if this is a category slug (should be handled by [category] route)
  if (categorySlugs.includes(slideId)) {
    // This should be handled by the category page, but if we're here, redirect
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  
  // Find slide by id - check /slide/, /san-pham/, /hoat-hinh/, and /tai-khoan-ai/ hrefs
  const slide = allSlides.find(s => {
    const hrefId = s.href.replace('/slide/', '').replace('/san-pham/', '').replace('/hoat-hinh/', '').replace('/tai-khoan-ai/', '');
    return hrefId === slideId;
  }) || allSlides[0];
  
  // Generate thumbnails if not provided (using main image for demo)
  const thumbnails = slide.thumbnails || Array(15).fill(slide.image || '/images/placeholder.png');
  const [selectedImage, setSelectedImage] = useState(slide.image || thumbnails[0] || '/images/placeholder.png');
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num);
  };

  const defaultDescription = "Khám phá Template PowerPoint Phạm Trù Triết Học: định nghĩa, mối quan hệ biện chứng, ví dụ thực tiễn và ý nghĩa phương pháp luận. Giúp bạn nắm vững kiến thức nền tảng và ứng dụng vào đời sống, học tập.";

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Fade Effect */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/bg_detail_slide.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient Overlay - Fade from top to bottom */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(232, 244, 253, 0.3) 70%, rgba(232, 244, 253, 0.8) 85%, rgba(232, 244, 253, 1) 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
      </div>

      <main className="flex-1 py-8 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Product Preview */}
            <div className="lg:w-2/3 flex flex-col gap-4">
              {/* Main Preview Image */}
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  {selectedImage ? (
                    <Image
                      src={selectedImage}
                      alt={slide.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400">{slide.title}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Second Preview Image - Only for free slides */}
              {slide.isFree && (
                <div className="bg-white rounded-2xl shadow-lg">
                  <div className="relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                    {selectedImage ? (
                      <Image
                        src={selectedImage}
                        alt={slide.title}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400">{slide.title}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right Section - Product Details */}
            <div className="lg:w-1/3 flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg relative">
                {/* FREE Badge or Discount Badge - Top Right */}
                {slide.isFree ? (
                  <div className="absolute -top-3 -right-3 bg-orange-500 text-white rounded-full px-4 py-1.5 flex items-center justify-center font-bold text-sm shadow-lg z-10">
                    FREE
                  </div>
                ) : (
                  <div className="absolute -top-3 -right-3 bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg z-10">
                    -{slide.discountPercent}%
                  </div>
                )}

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 mb-4 pr-12">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {slide.description || defaultDescription}
                </p>

                {/* Pricing */}
                {slide.isFree ? (
                  <div className="mb-6">
                    <span className="text-orange-500 font-bold text-2xl md:text-3xl">
                      Miễn Phí
                    </span>
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-gray-400 line-through text-base">
                        {formatPrice(slide.originalPrice)} ₫
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-orange-500 font-bold text-2xl md:text-3xl">
                        {formatPrice(slide.discountedPrice)} ₫
                      </span>
                    </div>
                  </div>
                )}

                {/* Customization Note */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    Cần chỉnh sửa thiết kế và nội dung? Liên hệ Maytrix nhé!
                  </p>
                </div>

                {/* Purchase Info - Only show for paid products */}
                {!slide.isFree && (
                  <p className="text-sm text-gray-600 mb-6">
                    Mua Slide - Nhận file tự động chỉ trong vài giây
                  </p>
                )}

                 {/* Action Buttons */}
                 {slide.isFree ? (
                   <div className="mb-6">
                     <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg">
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
                           d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                         />
                       </svg>
                       TẢI XUỐNG NGAY
                     </button>
                   </div>
                 ) : (
                   <div className="flex flex-row gap-3 mb-6">
                     <button className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                       MUA NGAY
                     </button>
                     <button className="flex-1 bg-white border-2 border-orange-500 text-orange-500 px-6 py-3 text-xs rounded-full font-semibold hover:bg-orange-50 transition-colors">
                       Thêm vào giỏ hàng
                     </button>
                   </div>
                 )}

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 pt-6 border-t">
                  <div className="flex items-center gap-2">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>{formatNumber(slide.views)} lượt xem</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>{formatNumber(slide.downloads)} lượt tải</span>
                  </div>
                </div>
              </div>

              {/* Description Card - Only for free slides, same size as right section */}
              {slide.isFree && (
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {slide.description || defaultDescription}
                  </p>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    Template PowerPoint Địa Danh miễn phí với hiệu ứng sinh động, giúp thuyết trình, giảng dạy và truyền thông trở nên sinh động, dễ hiểu và thu hút người xem.
                  </p>
                </div>
              )}
            </div>
          </div>

           {/* Bonus Offer Banner - Below Right Section */}
           {/* <div className="flex justify-end mt-6">
             <div className="w-full lg:w-1/3">
               <div 
                 className="rounded-2xl relative overflow-hidden shadow-lg w-full"
                 style={{
                   backgroundImage: 'url(/images/layout.png)',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat',
                 }}
               >
                 <div className="relative z-10 p-5 py-6">
                   <h3 className="text-white font-bold text-xl mb-4">Mua slide!</h3>
                   <ul className="text-white text-sm space-y-2.5">
                     <li className="flex items-start gap-2">
                       <span className="text-white font-bold mt-0.5">•</span>
                       <span>Nhận ngay video hướng dẫn chỉnh sửa.</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-white font-bold mt-0.5">•</span>
                       <span>Tặng file font & element trị giá 100k</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}

