import { Header, Footer } from '@/components/layout';
import {
  Hero,
  BannerBar,
  Categories,
  CardGrid,
  SlideSection,
  FeaturedSlideSection,
  PosterSectionWrapper,
  AnimationSection,
  AISoftwareSection,
} from '@/components/sections';
import {
  introOutroCards,
  morphSlides,
  featuredSlides,
  animations,
  topRowPosters,
  bottomRowPosters,
  aiSoftwareProducts,
} from '@/constants/mockData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Banner Bar */}
        <BannerBar />

        {/* Categories Section */}
        <Categories />

        {/* Slide/Video mở đầu Section */}
        <CardGrid
          title="Slide/Video mở đầu"
          cards={introOutroCards}
          showViewMore={true}
          viewMoreHref="/intro-outro"
        />

        {/* Mẫu Morph Section */}
        <SlideSection
          categoryButton="Kho Mẫu Slide"
          title="Mẫu Morph"
          hotTag={true}
          slides={morphSlides}
          showViewMore={true}
          viewMoreHref="/mau-morph"
        />

        {/* Thiết Kế Poster Section */}
        <PosterSectionWrapper
          topRowPosters={topRowPosters}
          bottomRowPosters={bottomRowPosters}
        />

        {/* Hoạt Hình Section */}
        <AnimationSection
          categoryButtons={['Animation', 'Trend']}
          title="Hoạt Hình"
          animations={animations}
          showViewMore={true}
          viewMoreHref="/hoat-hinh"
        />

        {/* Slide Nổi Bật Section */}
        <FeaturedSlideSection
          categoryButton="Kho Mẫu Slide"
          title="Slide Nổi Bật"
          trendTag={true}
          slides={featuredSlides}
          showViewMore={true}
          viewMoreHref="/slide-noi-bat"
        />

        {/* Phần Mềm - Tài Khoản AI Section */}
        <AISoftwareSection
          categoryButton="App"
          title="Phần Mềm - Tài Khoản AI"
          hotTag={true}
          products={aiSoftwareProducts}
          showViewMore={true}
          viewMoreHref="/tai-khoan-ai"
        />
      </main>

      <Footer />
    </div>
  );
}
