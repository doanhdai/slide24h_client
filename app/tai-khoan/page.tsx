'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { orders } from '@/constants/mockData';

export default function TaiKhoanPage() {
  const [activeSection, setActiveSection] = useState<'account' | 'orders' | 'payment'>('account');
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement save logic
    console.log('Saving changes:', { userInfo, passwordData });
  };

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
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
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Left Sidebar - Orange */}
            <div className="lg:w-1/3">
              <div className="bg-orange-400 rounded-2xl shadow-lg p-6 flex flex-col items-center h-full">
                {/* Profile Picture */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/profile-placeholder.png"
                      alt="Profile"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                      <svg className="w-16 h-16 text-gray-500 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Camera Icon - Bottom Center */}
                  <button className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>

                {/* Username and Email */}
                <h2 className="text-2xl font-bold text-white mb-1">Thaovy346</h2>
                <p className="text-white/90 text-sm mb-6">hongvy346@gmail.com</p>

                {/* Navigation Items */}
                <div className="w-full space-y-2 mb-6">
                  <button
                    onClick={() => setActiveSection('account')}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-colors rounded-full ${
                      activeSection === 'account'
                        ? 'bg-white text-black'
                        : 'bg-transparent text-white hover:bg-white/10'
                    }`}
                  >
                    <svg className={`w-5 h-5 ${activeSection === 'account' ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">Tài khoản của tôi</span>
                  </button>

                  <button
                    onClick={() => setActiveSection('orders')}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-colors rounded-full ${
                      activeSection === 'orders'
                        ? 'bg-white text-black'
                        : 'bg-transparent text-white hover:bg-white/10'
                    }`}
                  >
                    <svg className={`w-5 h-5 ${activeSection === 'orders' ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="font-medium">Đơn hàng của tôi</span>
                  </button>

                  <button
                    onClick={() => setActiveSection('payment')}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-colors rounded-full ${
                      activeSection === 'payment'
                        ? 'bg-white text-black'
                        : 'bg-transparent text-white hover:bg-white/10'
                    }`}
                  >
                    <svg className={`w-5 h-5 ${activeSection === 'payment' ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="font-medium">Phương thức thanh toán</span>
                  </button>
                </div>

                {/* Logout Button */}
                <button className="w-full bg-transparent text-white py-3 rounded-full font-medium hover:bg-white hover:text-orange-500 transition-colors mt-auto">
                  Đăng xuất
                </button>
              </div>
            </div>

            {/* Right Main Content - White */}
            <div className="lg:w-2/3">
              <div className="p-8">
                {activeSection === 'account' && (
                  <form onSubmit={handleSaveChanges} className="space-y-8">
                    {/* THÔNG TIN CỦA BẠN */}
                    <div>
                        <div className="flex justify-center">
                          <h2 className="text-2xl font-bold text-orange-500 mb-6">THÔNG TIN CỦA BẠN</h2>
                        </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* First Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tên
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={userInfo.firstName}
                            onChange={handleUserInfoChange}
                            className="w-full px-4 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          />
                        </div>

                        {/* Last Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Họ
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={userInfo.lastName}
                            onChange={handleUserInfoChange}
                            className="w-full px-4 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          />
                        </div>
                      </div>

                      {/* Display Name */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tên hiển thị
                        </label>
                        <input
                          type="text"
                          name="displayName"
                          value={userInfo.displayName}
                          onChange={handleUserInfoChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                        <p className="mt-2 text-sm text-orange-500">
                          Đây sẽ là cách tên của bạn được hiển thị trong phần tài khoản và trong các đánh giá
                        </p>
                      </div>

                      {/* Email */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Địa chỉ email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={userInfo.email}
                          onChange={handleUserInfoChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* THAY ĐỔI MẬT KHẨU */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">THAY ĐỔI MẬT KHẨU</h2>
                      
                      <div className="space-y-6">
                        {/* Current Password */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mật khẩu hiện tại
                          </label>
                          <input
                            type={showPasswords.current ? 'text' : 'password'}
                            name="currentPassword"
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-3 pr-12 bg-gray-50 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => togglePasswordVisibility('current')}
                            className="absolute right-4 top-10 text-gray-400 hover:text-gray-600"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {showPasswords.current ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                              ) : (
                                <>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </>
                              )}
                            </svg>
                          </button>
                        </div>

                        {/* New Password */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mật khẩu mới
                          </label>
                          <input
                            type={showPasswords.new ? 'text' : 'password'}
                            name="newPassword"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-3 pr-12 bg-gray-50 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => togglePasswordVisibility('new')}
                            className="absolute right-4 top-10 text-gray-400 hover:text-gray-600"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {showPasswords.new ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                              ) : (
                                <>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </>
                              )}
                            </svg>
                          </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Xác nhận mật khẩu
                          </label>
                          <input
                            type={showPasswords.confirm ? 'text' : 'password'}
                            name="confirmPassword"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-3 pr-12 bg-gray-50 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => togglePasswordVisibility('confirm')}
                            className="absolute right-4 top-10 text-gray-400 hover:text-gray-600"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {showPasswords.confirm ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                              ) : (
                                <>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </>
                              )}
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
                      >
                        LƯU THAY ĐỔI
                      </button>
                    </div>
                  </form>
                )}

                {activeSection === 'orders' && (
                  <div>
                    <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">CHI TIẾT ĐƠN HÀNG</h2>
                    
                    {/* Orders Table */}
                    <div className="mb-8">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b-2 border-gray-300">
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Đơn hàng</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Ngày</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Trạng thái</th>
                              <th className="text-right py-3 px-4 font-semibold text-gray-700">Tổng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order, index) => (
                              <tr key={order.id} className={index < orders.length - 1 ? 'border-b-2 border-gray-300' : ''}>
                                <td className="py-4 px-4 text-gray-900">{order.orderNumber}</td>
                                <td className="py-4 px-4 text-gray-600">{order.date}</td>
                                <td className="py-4 px-4 text-gray-600">{order.status}</td>
                                <td className="py-4 px-4 text-right text-gray-900 font-semibold">
                                  {new Intl.NumberFormat('vi-VN').format(order.total)}₫
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-b-2 border-gray-300 mb-6"></div>

                    {/* Downloads Section */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Các tệp tải xuống của bạn</h3>
                      <p className="text-gray-600">Chưa có tệp tải xuống nào</p>
                    </div>
                  </div>
                )}

                {activeSection === 'payment' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">PHƯƠNG THỨC THANH TOÁN</h2>
                    <p className="text-gray-600">Chức năng đang được phát triển...</p>
                  </div>
                )}
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

