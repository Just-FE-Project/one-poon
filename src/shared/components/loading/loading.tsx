import { forwardRef, HTMLAttributes } from 'react';

import { ComponentSize } from '@/shared/types/component';
import { classVarianceAuthority, cn, VariantProps } from '@/shared/utils/className';

export type LoadingProps = {
  size?: ComponentSize;

  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'error' | 'ghost';

  variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
};

const LoadingVariants = classVarianceAuthority('loading', {
  variants: {
    variant: {
      spinner: 'loading-spinner ',

      dots: 'loading-dots ',

      ring: 'loading-ring ',

      ball: 'loading-ball ',

      bars: 'loading-bars ',

      infinity: 'loading-infinity ',
    },

    size: {
      xs: 'loading-xs',

      sm: 'loading-sm',

      md: 'loading-md',

      lg: 'loading-lg',
    },

    color: {
      primary: 'text-primary',

      secondary: 'text-secondary',

      accent: 'text-accent',

      info: 'text-info',

      success: 'text-success',

      warning: 'text-warning',

      error: 'text-error',

      ghost: 'text-ghost',
    },
  },

  defaultVariants: {
    variant: 'spinner',

    size: 'md',
  },
});

interface IProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof LoadingVariants> {
  className?: string;
}

const Loading = forwardRef<HTMLSpanElement, IProps>(
  ({ size, variant = 'spinner', color, className, ...props }, ref) => {
    return <span {...props} ref={ref} className={cn(LoadingVariants({ size, variant, color }), className)} />;
  },
);

Loading.displayName = 'Loading';

export default Loading;
