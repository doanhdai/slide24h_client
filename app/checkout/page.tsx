'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { cartItems } from '@/constants/mockData';
import { CartItem } from '@/types';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  // Use cart items from mock data
  const items: CartItem[] = cartItems;

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle place order
  const handlePlaceOrder = () => {
    // Navigate to confirmation page
    window.location.href = '/checkout/confirm';
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background with snowflake pattern and light blue color */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #E8F4FD 0%, #D1E9F8 50%, #BAE0F3 100%)',
        }}
      >
        {/* Snowflake pattern overlay - using CSS pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
      </div>

      <main className="flex-1 py-8 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* White Card Container */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Section - Payment Information */}
              <div className="lg:flex-[6]">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8">
                  THÔNG TIN THANH TOÁN
                </h1>

                {/* Form Fields */}
                <div className="space-y-6 mb-8">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Họ và tên"
                      className="w-full px-4 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Số điện thoại"
                      className="w-full px-4 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Ghi chú"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 rounded-3xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="text-sm text-black space-y-2">
                  <p className="font-bold mb-3">
                    Bằng việc đặt hàng, bạn đồng ý với Quyền riêng tư & Bảo vệ dữ liệu, bao gồm:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-2">
                    <li>
                      Hệ thống sẽ tự tạo tài khoản bằng email bạn cung cấp (nếu bạn chưa có và tích vào ô tạo tài khoản).
                    </li>
                    <li>
                      Bạn đồng ý với Điều khoản sử dụng và Chính sách bảo mật được mô tả trong chính sách riêng tư của chúng tôi.
                    </li>
                    <li>
                      Mọi thông tin thanh toán đều được giữ an toàn và chỉ dùng để xử lý đơn hàng
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Section - Order Summary */}
              <div className="lg:flex-[4] flex flex-col">
                {/* Continue Shopping Button - Above orange panel */}
                <div className="mb-4 flex justify-end">
                  <Link
                    href="/slide-templates"
                    className="inline-flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-sm"
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

                {/* Orange Order Summary Panel */}
                <div className="bg-[#F1903E] rounded-2xl shadow-lg p-6 md:p-8 text-white flex-1 flex flex-col">
                  {/* Column Headers */}
                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/30">
                    <h2 className="text-lg font-semibold">Sản phẩm</h2>
                    <h2 className="text-lg font-semibold">Giá</h2>
                  </div>

                  {/* Product List */}
                  <div className="flex-1 space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <span className="text-base flex-1">{item.title}</span>
                        <span className="text-base font-semibold ml-4">
                          {formatPrice(item.price)} ₫
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <div className="space-y-3 mb-6 pb-6 border-t border-white/30 pt-4">
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

                  {/* Payment Method */}
                  <div className="mb-6">
                    <p className="text-base font-medium">SePay</p>
                  </div>

                  {/* Place Order Button */}
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-white text-black py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    ĐẶT HÀNG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

