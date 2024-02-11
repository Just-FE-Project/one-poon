import { HTMLAttributes } from 'react';

import { ComponentColor, ComponentSize } from '@/shared/types/component';
import { cn } from '@/shared/utils/className';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'outline';
  outline?: boolean;
  size?: ComponentSize;
  color?: ComponentColor;
  responsive?: boolean;
}

const Badge = ({ variant, size, color, outline, responsive, className, children }: IProps) => {
  const classes = cn('badge', className, {
    'badge-lg': size === 'lg',
    'badge-md': size === 'md',
    'badge-sm': size === 'sm',
    'badge-xs': size === 'xs',
    'badge-outline': variant === 'outline' || outline,
    'badge-neutral': color === 'neutral',
    'badge-primary': color === 'primary',
    'badge-secondary': color === 'secondary',
    'badge-accent': color === 'accent',
    'badge-ghost': color === 'ghost',
    'badge-info': color === 'info',
    'badge-success': color === 'success',
    'badge-warning': color === 'warning',
    'badge-error': color === 'error',
    'badge-xs md:badge-sm lg:badge-md xl:badge-lg': responsive
  });

  return <span className={classes}>{children}</span>;
};

export default Badge;
