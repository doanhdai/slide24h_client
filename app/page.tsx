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
import { ROUTES } from '@/constants/routes';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <BannerBar />
        <Categories />
        <CardGrid
          title="Slide/Video mở đầu"
          cards={introOutroCards}
          showViewMore={true}
          viewMoreHref={ROUTES.INTRO_OUTRO}
        />
        <SlideSection
          categoryButton="Kho Mẫu Slide"
          title="Mẫu Morph"
          hotTag={true}
          slides={morphSlides}
          showViewMore={true}
          viewMoreHref={ROUTES.SLIDE_TEMPLATES}
        />

        <PosterSectionWrapper
          topRowPosters={topRowPosters}
          bottomRowPosters={bottomRowPosters}
        />

        <AnimationSection
          categoryButtons={['Animation', 'Trend']}
          title="Hoạt Hình"
          animations={animations}
          showViewMore={true}
          viewMoreHref={ROUTES.ANIMATIONS}
        />
  
        <FeaturedSlideSection
          categoryButton="Kho Mẫu Slide"
          title="Slide Nổi Bật"
          trendTag={true}
          slides={featuredSlides}
          showViewMore={true}
          viewMoreHref={ROUTES.SLIDE_TEMPLATES}
        />
        <AISoftwareSection
          categoryButton="App"
          title="Phần Mềm - Tài Khoản AI"
          hotTag={true}
          products={aiSoftwareProducts}
          showViewMore={true}
          viewMoreHref={ROUTES.AI_ACCOUNTS}
        />
      </main>

      <Footer />
    </div>
  );
}
