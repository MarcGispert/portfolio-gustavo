import { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface ScrollPopProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

/**
 * ScrollPop component - Animates children when they enter the viewport
 *
 * Features:
 * - Fade in (opacity 0 → 1)
 * - Scale up (0.985 → 1)
 * - GPU-accelerated (transform-gpu)
 * - Respects prefers-reduced-motion
 * - Triggers once per element
 *
 * Usage:
 * <ScrollPop>
 *   <h2>Your heading</h2>
 * </ScrollPop>
 */
export function ScrollPop({
  children,
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = '',
}: ScrollPopProps) {
  const { ref, isInView } = useInView({
    threshold,
    rootMargin: '0px 0px -80px 0px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'scale(1)' : 'scale(0.985)',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
