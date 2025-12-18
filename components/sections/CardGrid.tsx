import Link from 'next/link';
import Image from 'next/image';

interface Card {
  id: string;
  title: string;
  image?: string;
  href: string;
}

interface CardGridProps {
  title: string;
  cards: Card[];
  showViewMore?: boolean;
  viewMoreHref?: string;
}

function CardItem({ card }: { card: Card }) {
  return (
    <Link
      href={card.href}
      className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[428/259] relative bg-gray-200">
        {card.image ? (
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400 text-sm">{card.title}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {card.title}
        </h3>
      </div>
    </Link>
  );
}

export default function CardGrid({
  title,
  cards,
  showViewMore = false,
  viewMoreHref = '#',
}: CardGridProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title Button - ở trên */}
        <div className="mb-6">
          <div className="inline-block bg-gradient-to-b from-[#f29841] to-[#ee6e2f] px-[17px] py-[8px] rounded-[46px]">
            <p className="capitalize font-medium text-[20px] text-white whitespace-nowrap">
              {title}
            </p>
          </div>
        </div>

        {/* Heading với Trend Tag */}
        <div className="relative inline-block mb-8">
          <h2 className="text-3xl font-bold text-gray-900 relative">
            Intro - <span className="relative inline-block pr-16">Outro
              {/* Trend Tag - góc trên bên phải của Outro, không đè lên text */}
              <div className="absolute -top-3 right-0 bg-gradient-to-r from-[#ff7070] to-[#ff0000] px-[5.357px] py-[5.357px] rounded-[27.321px] z-10">
                <p className="font-bold text-[14.261px] text-white whitespace-nowrap">
                  Trend
                </p>
              </div>
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>

        {/* Xem Thêm Button - căn giữa ở dưới */}
        {showViewMore && (
          <div className="flex justify-center">
            <Link
              href={viewMoreHref}
              className="bg-gradient-to-b from-[#f29841] to-[#ee6e2f] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Xem Thêm
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

