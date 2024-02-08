import { ButtonHTMLAttributes } from 'react';

import { classVarianceAuthority, cn, type VariantProps } from '@/shared/utils/className';

const ButtonVariants = classVarianceAuthority('btn', {
  variants: {
    size: {
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      wide: 'btn-wide',
      block: 'btn-block'
    },
    shape: {
      square: 'btn-square',
      circle: 'btn-circle'
    }
  },
  defaultVariants: {
    size: 'wide',
    shape: 'square'
  }
});

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {}

export const Button = ({ children, onClick, className, size, shape, ...props }: IProps) => {
  return (
    <button onClick={onClick} className={cn(ButtonVariants({ size, shape }), className)} {...props}>
      {children}
    </button>
  );
};
