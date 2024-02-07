import { PropsWithChildren } from 'react';

import { classVarianceAuthority, cn, type VariantProps } from '@/shared/utils/className';

const BadgeVariants = classVarianceAuthority('badge medium-12-cap', {
  variants: {
    variant: {
      outline: 'badge-outline',
    },
    size: {
      xs: 'badge-xs',
      sm: 'badge-sm',
      md: 'badge-md',
      lg: 'badge-lg',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

interface IProps extends PropsWithChildren<VariantProps<typeof BadgeVariants>> {
  className?: string;
}

const Badge = ({ variant, size, className, children }: IProps) => {
  return <span className={cn(BadgeVariants({ variant, size }), className)}>{children}</span>;
};

export default Badge;
