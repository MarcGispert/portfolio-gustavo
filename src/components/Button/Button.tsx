import type { ComponentProps } from 'react';

type ButtonVariant = 'outline' | 'solid';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
}

const base = [
  'inline-flex items-center justify-center',
  'px-[62px] py-[22px]',      // Exact Figma tokens: 62px × 22px
  'border-2 border-white',     // token: primitives.borderWidth.button + primitives.color.white
  'font-sans font-normal text-[18px] uppercase leading-none', // token: desktop.typography.button (Montserrat 400 18px)
  'transition-colors duration-200',
  'disabled:opacity-50 disabled:cursor-not-allowed',
].join(' ');

const variants: Record<ButtonVariant, string> = {
  outline: 'bg-transparent text-white hover:bg-white hover:text-black',
  solid: 'bg-white text-black hover:bg-transparent hover:text-white',
};

export function Button({
  variant = 'outline',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
