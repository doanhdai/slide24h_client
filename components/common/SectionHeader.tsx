interface SectionHeaderProps {
  categoryButton?: string;
  title: string;
  hotTag?: boolean;
  trendTag?: boolean;
  showNavigation?: boolean;
  navigationComponent?: React.ReactNode;
}

export default function SectionHeader({
  categoryButton,
  title,
  hotTag = false,
  trendTag = false,
  showNavigation = false,
  navigationComponent,
}: SectionHeaderProps) {
  return (
    <>
      {/* Category Button */}
      {categoryButton && (
        <div className="mb-6">
          <div className="inline-block bg-gradient-to-b from-[#f29841] to-[#ee6e2f] px-[17px] py-[8px] rounded-[46px]">
            <p className="capitalize font-medium text-[20px] text-white whitespace-nowrap">
              {categoryButton}
            </p>
          </div>
        </div>
      )}

      {/* Header with Title and Navigation */}
      <div className="flex items-start justify-between mb-8">
        {/* Title with Tags */}
        <div className="relative inline-block">
          <h2 className="text-3xl font-bold text-gray-900 relative">
            <span className="relative inline-block pr-16">
              {title}
              {/* Hot Tag */}
              {hotTag && (
                <div className="absolute -top-3 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-dashed border-red-600 z-10">
                  Hot
                </div>
              )}
              {/* Trend Tag */}
              {trendTag && (
                <div className="absolute -top-3 right-0 bg-gradient-to-r from-[#ff7070] to-[#ff0000] px-[5.357px] py-[5.357px] rounded-[27.321px] z-10">
                  <p className="font-bold text-[14.261px] text-white whitespace-nowrap">
                    Trend
                  </p>
                </div>
              )}
            </span>
          </h2>
        </div>

        {/* Navigation Controls */}
        {showNavigation && navigationComponent && (
          <div className="flex flex-col items-center gap-2">
            {navigationComponent}
          </div>
        )}
      </div>
    </>
  );
}

