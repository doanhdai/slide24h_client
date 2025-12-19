interface BaseSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function BaseSection({
  children,
  className = '',
  id,
}: BaseSectionProps) {
  return (
    <section
      id={id}
      className={`py-12 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4">{children}</div>
    </section>
  );
}

