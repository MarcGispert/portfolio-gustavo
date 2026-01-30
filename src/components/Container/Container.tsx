import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container component with standardized max-width and padding
 * Max width: 1440px
 * Horizontal padding: 48px (both mobile and desktop)
 */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-12 ${className}`}>
      {children}
    </div>
  );
}
