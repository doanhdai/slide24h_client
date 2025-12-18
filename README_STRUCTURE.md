# Cấu Trúc Thư Mục Dự Án

Dự án được tổ chức theo cấu trúc chuyên nghiệp để dễ dàng mở rộng và bảo trì.

## 📁 Cấu Trúc Thư Mục

```
Web_Maytrix/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
│
├── components/            # React Components
│   ├── layout/           # Layout components (Header, Footer)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts      # Barrel export
│   │
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── BannerBar.tsx
│   │   ├── Categories.tsx
│   │   ├── CardGrid.tsx
│   │   ├── SlideSection.tsx
│   │   ├── FeaturedSlideSection.tsx
│   │   ├── PosterSection.tsx
│   │   ├── PosterSectionWrapper.tsx
│   │   ├── AnimationSection.tsx
│   │   ├── AISoftwareSection.tsx
│   │   └── index.ts      # Barrel export
│   │
│   ├── cards/            # Card components
│   │   ├── SlideCard.tsx
│   │   ├── PosterCard.tsx
│   │   └── index.ts       # Barrel export
│   │
│   └── ui/               # Reusable UI components (future)
│
├── types/                # TypeScript type definitions
│   └── index.ts         # All shared types/interfaces
│
├── constants/            # Constants and mock data
│   └── mockData.ts      # Mock data for development
│
├── utils/                # Utility functions (future)
│
├── lib/                  # Library code (future)
│
└── public/               # Static assets
    ├── images/          # Image files
    └── icon/            # Icon files
```

## 🎯 Quy Tắc Tổ Chức

### Components
- **layout/**: Components dùng cho layout chung (Header, Footer)
- **sections/**: Các section lớn của trang (Hero, Categories, etc.)
- **cards/**: Components card nhỏ, có thể tái sử dụng
- **ui/**: UI components nhỏ, tái sử dụng (buttons, inputs, etc.)

### Types
- Tất cả interfaces/types được định nghĩa trong `types/index.ts`
- Import types từ `@/types` thay vì định nghĩa lại

### Constants
- Mock data và constants được lưu trong `constants/`
- Dễ dàng thay thế bằng API calls sau này

### Imports
- Sử dụng barrel exports (index.ts) để import gọn gàng
- Ví dụ: `import { Header, Footer } from '@/components/layout'`

## 🚀 Thêm Page/Route Mới

### 1. Tạo Route trong App Router
```typescript
// app/kho-mau-slide/page.tsx
import { Header, Footer } from '@/components/layout';
import { SlideSection } from '@/components/sections';
import { morphSlides } from '@/constants/mockData';

export default function KhoMauSlidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SlideSection
          categoryButton="Kho Mẫu Slide"
          title="Tất Cả Mẫu Slide"
          slides={morphSlides}
        />
      </main>
      <Footer />
    </div>
  );
}
```

### 2. Tạo Component Mới
- Nếu là section lớn → `components/sections/`
- Nếu là card → `components/cards/`
- Nếu là UI component → `components/ui/`

### 3. Thêm Types
- Thêm interface vào `types/index.ts`
- Sử dụng types chung thay vì định nghĩa lại

## 📝 Best Practices

1. **Type Safety**: Luôn sử dụng TypeScript types
2. **Reusability**: Tách components nhỏ, có thể tái sử dụng
3. **Consistency**: Sử dụng types chung từ `@/types`
4. **Organization**: Đặt file đúng thư mục theo chức năng
5. **Barrel Exports**: Sử dụng index.ts để export gọn gàng

## 🔄 Migration Notes

- Tất cả components đã được di chuyển vào thư mục phù hợp
- Imports đã được cập nhật để sử dụng cấu trúc mới
- Mock data đã được tách ra `constants/mockData.ts`
- Types đã được tập trung vào `types/index.ts`

