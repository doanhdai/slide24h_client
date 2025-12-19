import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Route mapping: old Vietnamese routes -> new English routes
const routeRedirects: Record<string, string> = {
  '/dang-nhap': '/login',
  '/tai-khoan': '/account',
  '/gio-hang': '/cart',
  '/thanh-toan': '/checkout',
  '/thanh-toan/xac-nhan': '/checkout/confirm',
  '/thanh-toan/thanh-cong': '/checkout/success',
  '/kho-mau-slide': '/slide-templates',
  '/hoat-hinh': '/animations',
  '/kho-slide-mien-phi': '/free-slides',
  '/thiet-ke-poster': '/poster-design',
  '/thiet-ke-poster/xem-them': '/poster-design/more',
  '/thiet-ke-poster/xem-them/ngang': '/poster-design/more/horizontal',
  '/thiet-ke-poster/xem-them/doc': '/poster-design/more/vertical',
  '/tai-khoan-ai': '/ai-accounts',
  '/san-pham': '/product',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname matches any old route
  if (routeRedirects[pathname]) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = routeRedirects[pathname];
    return NextResponse.redirect(newUrl, 301); // Permanent redirect
  }

  // Handle /san-pham/[id] -> /product/[id]
  if (pathname.startsWith('/san-pham/')) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = pathname.replace('/san-pham/', '/product/');
    return NextResponse.redirect(newUrl, 301);
  }

  // Handle /hoat-hinh/[id] -> /animations/[id] -> /product/[id]
  if (pathname.startsWith('/hoat-hinh/') && !pathname.endsWith('/hoat-hinh')) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = pathname.replace('/hoat-hinh/', '/product/');
    return NextResponse.redirect(newUrl, 301);
  }

  // Handle /tai-khoan-ai/[id] -> /ai-accounts/[id] -> /product/[id]
  if (pathname.startsWith('/tai-khoan-ai/') && !pathname.endsWith('/tai-khoan-ai')) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = pathname.replace('/tai-khoan-ai/', '/product/');
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dang-nhap',
    '/tai-khoan',
    '/gio-hang',
    '/thanh-toan/:path*',
    '/kho-mau-slide',
    '/hoat-hinh/:path*',
    '/kho-slide-mien-phi',
    '/thiet-ke-poster/:path*',
    '/tai-khoan-ai/:path*',
    '/san-pham/:path*',
  ],
};

