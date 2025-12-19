import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';

interface CategoryCardProps {
  title: string;
  count: string;
  href: string;
  gradient: string;
  iconUrl?: string;
  iconPosition?: string;
  bgImageUrl?: string;
}

function CategoryCard({ title, count, href, gradient, iconUrl, iconPosition = 'right', bgImageUrl }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="relative h-[73px] flex-1 min-w-[180px] max-w-[220px] rounded-[9px] overflow-hidden shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] transition-all duration-300 group"
    >
      {/* Background - SVG hoặc Gradient */}
      {bgImageUrl ? (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ) : (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(177.48deg, ${gradient.includes('blue') ? 'rgb(219, 234, 254)' : gradient.includes('yellow') ? 'rgb(254, 249, 195)' : gradient.includes('pink') ? 'rgb(252, 231, 243)' : gradient.includes('purple') ? 'rgb(237, 233, 254)' : gradient.includes('orange') ? 'rgb(255, 237, 213)' : 'rgb(220, 252, 231)'} 17.045%, rgba(255, 255, 255, 0.13) 82.955%)`
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative h-full flex items-center gap-3 px-4">
        {/* Icon - ở đầu (bên trái) */}
        {iconUrl && (
          <div className="shrink-0">
            <Image
              src={iconUrl}
              alt={title}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
        )}
        
        {/* Text content */}
        <div className="flex flex-col justify-center flex-1">
          <h3 className="font-semibold text-[16px] text-black leading-tight mb-0.5">
            {title}
          </h3>
          <p className="font-medium text-[14px] text-[#6d6d6d] leading-tight">
            {count}
          </p>
        </div>
      </div>
    </Link>
  );
}

interface Category {
  title: string;
  count: string;
  href: string;
  gradient: string;
  iconUrl?: string;
  bgImageUrl?: string;
}

export default function Categories() {
  const categories: Category[] = [
    { 
      title: 'Kho mẫu slide', 
      count: '+ 2000 mẫu',
      href: ROUTES.SLIDE_TEMPLATES,
      gradient: 'blue',
      iconUrl: '/icon/icon_templete_slide.svg',
      bgImageUrl: '/images/bg_templete_icon.svg'
    },
    { 
      title: 'Thiết kế Poster', 
      count: '+ 1569 mẫu',
      href: ROUTES.POSTER_DESIGN_MORE,
      gradient: 'pink',
      iconUrl: '/icon/icon_design_poster.svg',
      bgImageUrl: '/images/bg_design_poster.png'

    },
    { 
      title: 'Kho Slide Miễn Phí', 
      count: '+ 398 mẫu',
      href: ROUTES.FREE_SLIDES,
      gradient: 'purple',
      iconUrl: '/icon/icon_all_slide_free.svg',
      bgImageUrl: '/images/bg_all_slide_free.png'
    },
    { 
      title: 'Hoạt Hình', 
      count: '+ 537 mẫu',
      href: ROUTES.ANIMATIONS,
      gradient: 'orange',
      iconUrl: '/icon/icon_all_slide_free.svg', // Placeholder - cần icon riêng
      bgImageUrl: '/images/bg_slide_cartoon.png'
    },
    { 
      title: 'Tài khoản AI', 
      count: '+ 10 dịch vụ',
      href: ROUTES.AI_ACCOUNTS,
      gradient: 'green',
      iconUrl: '/icon/icon_all_slide_free.svg', // Placeholder - cần icon riêng
      bgImageUrl: '/images/bg_account_ai.svg'
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Container with gradient background */}
        <div 
          className="relative p-6"
          style={{
            borderRadius: '9.938px',
            background: 'linear-gradient(153deg, #FFF 17.04%, rgba(255, 255, 255, 0.13) 82.96%)',
            boxShadow: '0 -2.982px 3.975px 0 rgba(0, 0, 0, 0.25) inset, 0 0 12.821px 0 rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Decorative blobs - simplified */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl -z-10"></div>
          
          {/* Cards Grid - 1 row, 6 columns */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center overflow-x-auto">
            {categories.map((category) => (
              <CategoryCard
                key={category.href}
                title={category.title}
                count={category.count}
                href={category.href}
                gradient={category.gradient}
                iconUrl={category.iconUrl}
                bgImageUrl={category.bgImageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
