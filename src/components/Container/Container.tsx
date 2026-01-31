import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container component with standardized max-width
 * Max width: 1440px
 * Horizontal padding: 0px (parent sections handle padding)
 */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-0 ${className}`}>
      {children}
    </div>
  );
}
