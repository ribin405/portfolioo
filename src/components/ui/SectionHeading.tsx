import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll className={`text-center mb-12 sm:mb-14 md:mb-20 ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-outfit mb-4">
        <span className="bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-1 sm:px-0">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
      </div>
    </AnimateOnScroll>
  );
}
