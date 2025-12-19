export default function BannerBar() {
  const content = (
    <>
      <div className="flex items-center shrink-0">
        <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
        <span className="whitespace-nowrap ml-1">Slide24h.com</span>
      </div>
      <div className="flex items-center shrink-0">
        <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
        <span className="whitespace-nowrap ml-1">Nhanh - Đẹp - Giá HSSV</span>
      </div>
      <div className="flex items-center shrink-0">
        <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
        <span className="whitespace-nowrap ml-1">Xưởng sản xuất slide</span>
      </div>
    </>
  );

  return (
    <div className="w-full min-h-[88px] bg-gradient-to-l from-pink-500 to-orange-400 flex items-center justify-center py-4 overflow-hidden">
      <div className="w-full relative">
        <div className="flex items-center gap-8 md:gap-12 text-white font-semibold text-base md:text-lg lg:text-xl animate-marquee whitespace-nowrap">
          {/* Duplicate content nhiều lần để đảm bảo seamless loop */}
          <div className="flex items-center gap-8 md:gap-12 shrink-0">
            {content}
          </div>
          <div className="flex items-center gap-8 md:gap-12 shrink-0">
            {content}
          </div>
          <div className="flex items-center gap-8 md:gap-12 shrink-0">
            {content}
          </div>
          <div className="flex items-center gap-8 md:gap-12 shrink-0">
            {content}
          </div>
          <div className="flex items-center gap-8 md:gap-12 shrink-0">
            {content}
          </div>
          <div className="flex items-center gap-8 md:gap-12 shrink-0">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

