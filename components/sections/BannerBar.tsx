export default function BannerBar() {
  return (
    <div className="w-full min-h-[88px] bg-gradient-to-r from-[#ff3d8c] to-[#ff975e] flex items-center justify-center py-4">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-center gap-2 md:gap-3 text-white font-semibold text-sm md:text-base lg:text-lg flex-wrap">
          <span className="whitespace-nowrap">Slide24h.com</span>
          <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
          <span className="whitespace-nowrap">Nhanh - Đẹp - Giá HSSV</span>
          <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
          <span className="whitespace-nowrap">Xưởng sản xuất slide</span>
          <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
          <span className="whitespace-nowrap">Slide24h.com</span>
        </div>
      </div>
    </div>
  );
}

