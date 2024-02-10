import { ButtonHTMLAttributes } from 'react';

import { ComponentSize } from '@/shared/types/component';
import { cn } from '@/shared/utils/className';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ComponentSize | 'wide' | 'block';
  shape?: 'square' | 'circle';
}

export const Button = ({ children, onClick, className, size, shape, ...props }: IProps) => {
  const classes = cn('btn', className, {
    'btn-xs': size === 'xs',
    'btn-sm': size === 'sm',
    'btn-md': size === 'md',
    'btn-lg': size === 'lg',
    'btn-wide': size === 'wide',
    'btn-block': size === 'block',
    'btn-square': shape === 'square',
    'btn-circle': shape === 'circle'
  });

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};
