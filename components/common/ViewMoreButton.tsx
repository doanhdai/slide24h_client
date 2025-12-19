import Link from 'next/link';

interface ViewMoreButtonProps {
  href: string;
  label?: string;
}

export default function ViewMoreButton({
  href,
  label = 'View More',
}: ViewMoreButtonProps) {
  return (
    <div className="flex justify-center">
      <Link
        href={href}
        className="bg-gradient-to-b from-[#f29841] to-[#ee6e2f] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
      >
        {label}
      </Link>
    </div>
  );
}

