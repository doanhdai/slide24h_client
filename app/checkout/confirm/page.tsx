'use client';

import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { cartItems } from '@/constants/mockData';
import { CartItem } from '@/types';

export default function CheckoutConfirmPage() {
  // Use cart items from mock data
  const items: CartItem[] = cartItems;

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  // Generate order ID (mock)
  const orderId = '2424';
  const orderDate = new Date().toLocaleDateString('vi-VN');
  const customerEmail = 'hongvy346@gmail.com'; // This would come from form data in real app

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background with snowflake pattern and light blue color */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #E8F4FD 0%, #D1E9F8 50%, #BAE0F3 100%)',
        }}
      >
        {/* Snowflake pattern overlay */}
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
              {/* Left Section - QR Code Payment (60%) */}
              <div className="lg:flex-[6]">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  THANH TOÁN QUA MÃ QR NGÂN HÀNG
                </h1>

                {/* SePay Logo */}
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <span className="text-blue-500 text-xl font-semibold">SePay</span>
                  </div>
                </div>

                {/* QR Code */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-64 h-64 bg-white border-4 border-gray-900 rounded-lg p-4 flex items-center justify-center">
                    {/* Mock QR Code - In real app, this would be an actual QR code image */}
                    <div className="w-full h-full bg-white relative">
                      {/* QR Code Pattern - Simplified representation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">V</span>
                        </div>
                      </div>
                      {/* Grid pattern to simulate QR code */}
                      <div 
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 8px),
                                          repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 8px)`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Total Amount */}
                <div className="text-center mb-4">
                  <p className="text-3xl md:text-4xl font-bold text-gray-900">
                    {formatPrice(total)} ₫
                  </p>
                </div>

                {/* Status */}
                <div className="text-center mb-6">
                  <p className="text-2xl text-black">
                    <span className="font-semibold">Trạng Thái:</span>{' '}
                    <span className="text-orange-500 font-bold">Chờ Thanh Toán</span>
                  </p>
                </div>

                {/* Instruction */}
                <div className="text-center">
                  <p className="text-lg text-black max-w-md mx-auto">
                    Sau khi thanh toán thành công, đơn hàng của bạn sẽ được tự động tải xuống và gửi đính kèm qua email.
                  </p>
                </div>
              </div>

              {/* Right Section - Order Confirmation (40%) */}
              <div className="lg:flex-[4] flex flex-col">
                {/* Orange Order Summary Panel */}
                <div className="bg-[#F1903E] rounded-2xl shadow-lg p-6 md:p-8 text-white flex-1 flex flex-col">
                  {/* Thank You Section */}
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      Cảm ơn bạn!
                    </h2>
                    <p className="text-lg">
                      Đơn hàng của bạn đã được nhận
                    </p>
                  </div>

                  {/* Order Summary */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span className="text-base">
                        <span className="font-semibold">Mã đơn hàng:</span> {orderId}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span className="text-base">
                        <span className="font-semibold">Ngày:</span> {orderDate}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span className="text-base">
                        <span className="font-semibold">Email:</span> {customerEmail}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span className="text-base">
                        <span className="font-semibold">Tổng cộng:</span> {formatPrice(total)}₫
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span className="text-base">
                        <span className="font-semibold">Phương thức thanh toán:</span> SePay
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/30 my-6"></div>

                  {/* Order Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4">Chi tiết đơn hàng</h3>
                    
                    {/* Order Items */}
                    <div className="space-y-3 mb-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center">
                          <span className="text-base flex-1">{item.title}</span>
                          <span className="text-base font-semibold ml-4">
                            {formatPrice(item.price)} ₫
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/30 my-4"></div>

                    {/* Totals */}
                    <div className="space-y-3">
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
                  </div>
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

