'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DangNhapPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'login') {
      // TODO: Implement login logic
      console.log('Login submitted:', { username: formData.username, password: formData.password });
    } else {
      // TODO: Implement signup logic
      console.log('Signup submitted:', formData);
    }
    // router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/log_out.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Login Modal */}
      <div className="relative z-10 w-full max-w-xl mx-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Close Button - Inside modal */}
          <button
            onClick={() => router.back()}
            className="absolute top-3 right-3 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-20"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Tabs - Below close button */}
          <div className="mt-12 pb-2 px-3 rounded-t-2xl">
            <div className="w-[340px] h-20 bg-white rounded-[48px] shadow-[0px_0px_11px_0px_rgba(0,0,0,0.25)] flex items-center gap-1.5 mx-auto flex-row px-6">
              <button
                onClick={() => setActiveTab('login')}
                className={`w-36 h-12 px-5 py-1.5 rounded-[36px] inline-flex justify-center items-center gap-1.5 transition-all font-['Montserrat'] ${
                  activeTab === 'login'
                    ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl font-medium'
                    : 'bg-transparent text-gray-700 text-xl font-medium hover:bg-gray-100'
                }`}
              >
                <div className="text-center justify-start">Login</div>
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`w-36 h-12 px-5 py-1.5 rounded-[36px] inline-flex justify-center items-center gap-1.5 transition-all font-['Montserrat'] ${
                  activeTab === 'signup'
                    ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl font-medium'
                    : 'bg-transparent text-gray-700 text-xl font-medium hover:bg-gray-100'
                }`}
              >
                <div className="text-center justify-start">Sign Up</div>
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-7">
              {activeTab === 'login' ? (
                <>
                  {/* Username/Email Input */}
                  <div>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Tên đăng nhập/ Email"
                      className="w-full px-5 py-4 bg-gray-50 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-base"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Mật khẩu"
                      className="w-full px-5 py-4 pr-14 bg-gray-50 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-base"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Remember Me and Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-5 h-5 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-400"
                      />
                      <span className="text-base text-gray-700">Ghi nhớ tài khoản của tôi</span>
                    </label>
                    <Link
                      href="/quen-mat-khau"
                      className="text-base text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>

                  {/* Sign In Button */}
                  <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-44 h-14 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-bold text-xl hover:opacity-90 transition-opacity"
                  >
                    SIGN IN
                  </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-5 py-4 bg-gray-50 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-base"
                      required
                    />
                  </div>

                  {/* Username Input */}
                  <div>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Tên đăng nhập"
                      className="w-full px-5 py-4 bg-gray-50 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-base"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Mật khẩu"
                      className="w-full px-5 py-4 pr-14 bg-gray-50 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-base"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Confirm Password Input */}
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Xác nhận lại mật khẩu"
                      className="w-full px-5 py-4 pr-14 bg-gray-50 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-base"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="w-5 h-5 mt-1 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-400"
                      required
                    />
                    <label className="text-base text-gray-700 cursor-pointer">
                      Tôi đọc và đồng ý với{' '}
                      <Link href="/dieu-khoan-su-dung" className="text-orange-500 hover:text-orange-600 transition-colors">
                        điều khoản sử dụng
                      </Link>
                      {' '}và{' '}
                      <Link href="/chinh-sach-bao-mat" className="text-orange-500 hover:text-orange-600 transition-colors">
                        chính sách bảo mật
                      </Link>
                    </label>
                  </div>

                  {/* Sign Up Button */}
                  <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-44 h-14 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-bold text-xl hover:opacity-90 transition-opacity"
                  >
                    SIGN UP
                  </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

