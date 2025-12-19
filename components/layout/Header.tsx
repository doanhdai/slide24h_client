'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="bg-white w-full shadow-sm">
      <nav className="flex items-center justify-between px-4 md:px-8 max-w-8xl mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="SLIDE24h.com Logo"
            width={188.444}
            height={106}
            className="w-[188.444px] h-[106px] object-contain"
            style={{ aspectRatio: '188.44/106.00' }}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          <Link 
            href="/" 
            className={`font-semibold text-lg relative group transition-colors ${
              pathname === '/' 
                ? 'text-orange-500' 
                : 'text-black hover:text-orange-500'
            }`}
          >
            Trang Chủ
            {pathname === '/' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded"></span>
            )}
          </Link>
          <Link 
            href="/slide-templates" 
            className={`font-semibold text-lg relative group transition-colors ${
              pathname === '/slide-templates'
                ? 'text-orange-500' 
                : 'text-black hover:text-orange-500'
            }`}
          >
            Kho mẫu slide
            {pathname === '/slide-templates' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded"></span>
            )}
          </Link>
          <Link 
            href="/animations" 
            className={`font-semibold text-lg relative group transition-colors ${
              pathname === '/animations' || pathname === '/hoat-hinh'
                ? 'text-orange-500' 
                : 'text-black hover:text-orange-500'
            }`}
          >
            Hoạt Hình
            {(pathname === '/animations' || pathname === '/hoat-hinh') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded"></span>
            )}
          </Link>
          <Link 
            href="/ai-accounts" 
            className={`font-semibold text-lg relative group transition-colors ${
              pathname === '/ai-accounts' || pathname === '/tai-khoan-ai'
                ? 'text-orange-500' 
                : 'text-black hover:text-orange-500'
            }`}
          >
            Tài khoản AI
            {(pathname === '/ai-accounts' || pathname === '/tai-khoan-ai') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded"></span>
            )}
          </Link>
          <Link 
            href="/blog" 
            className={`font-semibold text-lg relative group transition-colors capitalize ${
              pathname === '/blog' 
                ? 'text-orange-500' 
                : 'text-black hover:text-orange-500'
            }`}
          >
            Blog
            {pathname === '/blog' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded"></span>
            )}
          </Link>
          <Link 
            href="/about-us" 
            className={`font-semibold text-lg relative group transition-colors ${
              pathname === '/about-us' 
                ? 'text-orange-500' 
                : 'text-black hover:text-orange-500'
            }`}
          >
            About Us
            {pathname === '/about-us' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded"></span>
            )}
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/login"
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-sm md:text-base hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <span className="hidden md:inline">Đăng nhập / Đăng kí</span>
            <span className="md:hidden">Đăng nhập</span>
          </Link>
          
          {/* Shopping Cart */}
          <Link href="/cart" className="relative">
            <svg 
              className="w-8 h-8 text-black" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

