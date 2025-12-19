import BaseProductSection from './BaseProductSection';
import { Slide } from '@/types';

interface RefactoredSlideSectionProps {
  categoryButton?: string;
  title: string;
  hotTag?: boolean;
  trendTag?: boolean;
  slides: Slide[];
  showViewMore?: boolean;
  viewMoreHref?: string;
  itemsPerPage?: number;
  gridCols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
}

export default function RefactoredSlideSection({
  categoryButton,
  title,
  hotTag = false,
  trendTag = false,
  slides,
  showViewMore = false,
  viewMoreHref = '#',
  itemsPerPage = 12,
  gridCols = { default: 1, sm: 2, lg: 4 },
}: RefactoredSlideSectionProps) {
  return (
    <BaseProductSection
      categoryButton={categoryButton}
      title={title}
      hotTag={hotTag}
      trendTag={trendTag}
      items={slides}
      itemsPerPage={itemsPerPage}
      showPagination={true}
      gridCols={gridCols}
      showViewMore={showViewMore}
      viewMoreHref={viewMoreHref}
    />
  );
}

