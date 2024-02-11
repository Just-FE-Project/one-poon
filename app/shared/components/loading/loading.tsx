import { forwardRef, HTMLAttributes } from 'react';

import { ComponentColor, ComponentSize } from '@/shared/types/component';
import { cn } from '@/shared/utils/className';

interface IProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
  size?: ComponentSize;
  color?: ComponentColor;
}

export const Loading = forwardRef<HTMLSpanElement, IProps>(
  ({ size = 'md', variant = 'spinner', color, className, ...props }, ref) => {
    const classes = cn('loading', className, {
      'loading-spinner': variant === 'spinner',
      'loading-dots': variant === 'dots',
      'loading-ring': variant === 'ring',
      'loading-ball': variant === 'ball',
      'loading-bars': variant === 'bars',
      'loading-infinity': variant === 'infinity',
      'loading-xs': size === 'xs',
      'loading-sm': size === 'sm',
      'loading-md': size === 'md',
      'loading-lg': size === 'lg',
      'text-primary': color === 'primary',
      'text-secondary': color === 'secondary',
      'text-accent': color === 'accent',
      'text-info': color === 'info',
      'text-success': color === 'success',
      'text-warning': color === 'warning',
      'text-error': color === 'error',
      'text-ghost': color === 'ghost',
      'text-neutral': color === 'neutral'
    });

    return <span {...props} ref={ref} className={classes} />;
  }
);

Loading.displayName = 'Loading';
