import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';

import { ComponentColor, ComponentShape, ComponentSize } from '@/shared/types/component';
import { classVarianceAuthority, cn, VariantProps } from '@/shared/utils/className';

const ImageVariants = classVarianceAuthority('', {
  variants: {
    border: {
      true: 'ring ring-offset-base-100 ring-offset-2',
    },
    borderColor: {
      accent: 'ring-accent',
      error: 'ring-error',
      info: 'ring-info',
      neutral: 'ring-neutral',
      primary: 'ring-primary',
      secondary: 'ring-secondary',
      success: 'ring-success',
      warning: 'ring-warning',
    },
    shape: {
      square: 'rounded-btn',
      circle: 'rounded-full',
    },
    size: {
      lg: 'w-32 h-32',
      md: 'w-24 h-24',
      sm: 'w-14 h-14',
      xs: 'w-10 h-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const PlaceholderVariants = classVarianceAuthority('', {
  variants: {
    color: {
      accent: 'bg-accent text-accent-content',
      error: 'bg-error text-error-content',
      info: 'bg-info text-info-content',
      neutral: 'bg-neutral text-neutral-content',
      primary: 'bg-primary text-primary-content',
      secondary: 'bg-secondary text-secondary-content',
      success: 'bg-success text-success-content',
      warning: 'bg-warning text-warning-content',
    },
    border: {
      true: 'ring ring-offset-base-100 ring-offset-2',
    },
    borderColor: {
      accent: 'ring-accent',
      error: 'ring-error',
      info: 'ring-info',
      neutral: 'ring-neutral',
      primary: 'ring-primary',
      secondary: 'ring-secondary',
      success: 'ring-success',
      warning: 'ring-warning',
    },
    shape: {
      square: 'rounded-btn',
      circle: 'rounded-full',
    },
    size: {
      lg: 'w-32 h-32 text-3xl',
      md: 'w-24 h-24 text-xl',
      sm: 'w-14 h-14',
      xs: 'w-10 h-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface IProps
  extends PropsWithChildren<
    Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
      VariantProps<typeof ImageVariants> &
      VariantProps<typeof PlaceholderVariants>
  > {
  className?: string;
  src?: string;
  letters?: string;
  size?: ComponentSize;
  shape?: ComponentShape;
  color?: Exclude<ComponentColor, 'ghost'>;
  border?: boolean;
  borderColor?: Exclude<ComponentColor, 'ghost'>;
  online?: boolean;
  offline?: boolean;
  innerClassName?: string;
}
const isSingleStringChild = (children?: ReactNode) => {
  return (
    children &&
    Children.count(children) === 1 &&
    isValidElement(children) &&
    typeof children.props.children === 'string'
  );
};

export const Avatar = forwardRef<HTMLDivElement, IProps>(
  (
    {
      size,
      src,
      letters,
      shape,
      color,
      border,
      borderColor,
      className,
      innerClassName,
      online,
      offline,
      children,
      ...props
    },
    ref
  ) => {
    const customImgDimension = typeof size === 'number' ? { width: size, height: size } : {};

    const renderAvatarContents = () => {
      if (src) {
        return (
          <div
            className={cn(
              innerClassName,
              ImageVariants({
                border,
                borderColor,
                shape,
                size,
              }),
              className
            )}
            style={customImgDimension}
          >
            <img src={src} />
          </div>
        );
      } else if (letters || isSingleStringChild(children)) {
        return (
          <div
            className={cn(
              innerClassName,
              PlaceholderVariants({
                color,
                border,
                borderColor,
                shape,
                size,
              }),
              className
            )}
            style={customImgDimension}
          >
            <span>{letters ? letters : children}</span>
          </div>
        );
      } else if (Children.count(children) === 1) {
        console.log('222');
        const firstChild = Children.only(children) as ReactElement;
        return cloneElement(firstChild, {
          className: cn(
            ImageVariants({
              border,
              borderColor,
              shape,
              size,
            }),
            firstChild.props.className
          ),
          style: { ...customImgDimension, ...firstChild.props.style },
        });
      } else {
        return (
          <div
            className={ImageVariants({
              border,
              borderColor,
              shape,
              size,
            })}
            style={customImgDimension}
          >
            {children}
          </div>
        );
      }
    };

    return (
      <div
        aria-label="Avatar photo"
        {...props}
        className={cn({ avatar: true, online: online, offline: offline, placeholder: !src })}
        ref={ref}
      >
        {renderAvatarContents()}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
