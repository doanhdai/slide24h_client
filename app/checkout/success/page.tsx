'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';

export default function CheckoutSuccessPage() {
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
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8">
            THANH TOÁN THÀNH CÔNG
          </h1>

          {/* White Card Container */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Section - Illustration with Orange Background */}
              <div className="lg:w-1/3 bg-orange-400 p-8 md:p-12 flex items-center justify-center relative overflow-hidden rounded-l-2xl">
                {/* Image Placeholder - Replace src with actual image path later */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/checkout-success.png"
                    alt="Payment Success Illustration"
                    width={500}
                    height={500}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>

              {/* Right Section - Text Content */}
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                {/* Thank You Message */}
                <h2 className="text-4xl md:text-4xl font-bold text-orange-500 mb-4">
                  Cảm ơn bạn!
                </h2>

                {/* Success Message - Darker orange/red-orange */}
                <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#EE6E2F' }}>
                  Thanh toán đã thành công.
                </h3>

                {/* Info Message - Dark gray */}
                <p className="text-gray-700 text-2xl mb-8">
                  Đơn hàng của bạn sẽ được xử lý và gửi file qua email trong ít phút.
                </p>

                {/* Continue Shopping Button - Gradient orange */}
                <div className="flex justify-center">
                <Link
                  href="/slide-templates"
                  className="inline-block w-80 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity text-center"
                >
                  TIẾP TỤC MUA SẮM
                </Link>
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

