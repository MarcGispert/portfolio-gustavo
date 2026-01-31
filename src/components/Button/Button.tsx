import type { ComponentProps } from 'react';
import type { LucideIcon } from 'lucide-react';

type ButtonVariant = 'outline' | 'solid';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  icon?: LucideIcon;
}

const base = [
  'inline-flex items-center justify-center gap-2 md:gap-3',
  'px-6 py-4 md:px-[62px] md:py-[22px]',      // Responsive: mobile 24px/16px, desktop 62px/22px
  'max-w-full',                                // Prevent overflow
  'bg-transparent text-white',                 // New default: no border, transparent bg, white text
  'font-sans font-normal text-[14px] md:text-[18px] uppercase leading-none', // Responsive font size
  'transition-all duration-200',
  'hover:text-white/90 hover:bg-white/5',
  'active:text-white/80 active:bg-white/10',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white',
].join(' ');

const variants: Record<ButtonVariant, string> = {
  outline: 'border-2 border-white hover:bg-white hover:text-black',
  solid: 'border-2 border-white bg-white text-black hover:bg-transparent hover:text-white',
};

export function Button({
  variant,
  className = '',
  children,
  icon: Icon,
  ...props
}: ButtonProps) {
  const variantClass = variant ? variants[variant] : '';

  return (
    <button
      className={`${base} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
      {Icon && <Icon className="h-4 w-4 md:h-[18px] md:w-[18px] flex-shrink-0" />}
    </button>
  );
}
