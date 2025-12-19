'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { cartItems } from '@/constants/mockData';
import { CartItem } from '@/types';

export default function GioHangPage() {
  const [items, setItems] = useState<CartItem[]>(cartItems);
  const [discountCode, setDiscountCode] = useState('');

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal; // No discount applied yet

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  // Remove item from cart
  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Apply discount code
  const handleApplyDiscount = () => {
    // TODO: Implement discount logic
    console.log('Applying discount code:', discountCode);
  };

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
        {/* Gradient Overlay - Fade from 50% down */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(232, 244, 253, 0.2) 60%, rgba(232, 244, 253, 0.5) 75%, rgba(232, 244, 253, 0.8) 90%, rgba(232, 244, 253, 1) 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
      </div>

      <main className="flex-1 py-8 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Left Section - Shopping Cart */}
            <div className="lg:w-2/3 flex">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
                  GIỎ HÀNG
                </h1>

                {/* Cart Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-2 font-semibold text-gray-700">Sản phẩm</th>
                        <th className="text-center py-4 px-2 font-semibold text-gray-700">Giá</th>
                        <th className="text-center py-4 px-2 font-semibold text-gray-700">Xoá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr key={item.id} className="border-b border-gray-100">
                          <td className="py-4 px-2">
                            <div className="flex items-center gap-4">
                              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                <Image
                                  src={item.image || '/images/slide-placeholder.png'}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{item.title}</p>
                                <p className="text-sm text-gray-500">#{index + 1}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-2 text-center">
                            <span className="font-semibold text-gray-900">
                              {formatPrice(item.price)} ₫
                            </span>
                          </td>
                          <td className="py-4 px-2 text-center">
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                              aria-label="Xóa sản phẩm"
                            >
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Continue Shopping Button */}
                <div className="mt-6">
                  <Link
                    href="/kho-mau-slide"
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
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
                    Tiếp tục xem sản phẩm
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section - Order Summary */}
            <div className="lg:w-1/3 flex">
              <div className=" bg-orange-400 rounded-2xl shadow-lg p-6 md:p-8 text-white w-full flex flex-col">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Tổng cộng giỏ hàng
                </h2>

                {/* Discount Code */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder="Mã giảm giá"
                      className="w-full px-4 py-2.5 pr-24 bg-white rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button
                      onClick={handleApplyDiscount}
                      className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      Áp dụng
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-white/30">
                  <div className="flex justify-between">
                    <span className="text-lg">Tạm tính</span>
                    <span className="text-lg font-semibold">
                      {formatPrice(subtotal)} ₫
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Tổng</span>
                    <span className="text-xl font-bold">
                      {formatPrice(total)} ₫
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/thanh-toan"
                  className="w-full bg-white text-black py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors mt-auto flex items-center justify-center"
                >
                  Tiến hành thanh toán
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

