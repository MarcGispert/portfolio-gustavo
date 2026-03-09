import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  subtitle?: string;
}

export function ProjectCard({ title, category, image, link, subtitle }: ProjectCardProps) {
  return (
    <Link
      to={link}
      className="group relative block h-full w-full overflow-hidden"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient overlay (always visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-6 md:p-8">
        <h3 className="font-sans text-[24px] font-semibold leading-normal text-white md:text-[28px] lg:text-[32px]">
          {title}
        </h3>
        {subtitle && (
          <p className="font-sans text-[16px] font-normal text-white/80 md:text-[18px]">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}
