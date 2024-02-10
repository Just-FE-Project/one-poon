import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode
} from 'react';

import { ComponentColor, ComponentShape, ComponentSize } from '@/shared/types/component';
import { cn } from '@/shared/utils/className';

interface IProps extends PropsWithChildren<Omit<HTMLAttributes<HTMLDivElement>, 'color'>> {
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
      size = 'md',
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
    const containerClasses = cn('avatar', className, {
      online: online,
      offline: offline,
      placeholder: !src
    });

    const imgClasses = cn(innerClassName, {
      'ring ring-offset-base-100 ring-offset-2': border,
      'ring-accent': borderColor === 'accent',
      'ring-error': borderColor === 'error',
      'ring-info': borderColor === 'info',
      'ring-neutral': borderColor === 'neutral',
      'ring-primary': borderColor === 'primary',
      'ring-secondary': borderColor === 'secondary',
      'ring-success': borderColor === 'success',
      'ring-warning': borderColor === 'warning',
      'rounded-btn': shape === 'square',
      'rounded-full': shape === 'circle',
      'w-32 h-32': size === 'lg',
      'w-24 h-24': size === 'md',
      'w-14 h-14': size === 'sm',
      'w-10 h-10': size === 'xs'
    });

    const placeholderClasses = cn(innerClassName, {
      'bg-neutral-focus': !color,
      'text-neutral-content': !color || color === 'neutral',
      'bg-accent': color === 'accent',
      'bg-error': color === 'error',
      'bg-info': color === 'info',
      'bg-neutral': color === 'neutral',
      'bg-primary': color === 'primary',
      'bg-secondary': color === 'secondary',
      'bg-success': color === 'success',
      'bg-warning': color === 'warning',
      'text-accent-content': color === 'accent',
      'text-error-content': color === 'error',
      'text-info-content': color === 'info',
      'text-primary-content': color === 'primary',
      'text-secondary-content': color === 'secondary',
      'text-success-content': color === 'success',
      'text-warning-content': color === 'warning',
      'ring ring-offset-base-100 ring-offset-2': border,
      'ring-accent': borderColor === 'accent',
      'ring-error': borderColor === 'error',
      'ring-info': borderColor === 'info',
      'ring-neutral': borderColor === 'neutral',
      'ring-primary': borderColor === 'primary',
      'ring-secondary': borderColor === 'secondary',
      'ring-success': borderColor === 'success',
      'ring-warning': borderColor === 'warning',
      'rounded-btn': shape === 'square',
      'rounded-full': shape === 'circle',
      'w-32 h-32 text-3xl': size === 'lg',
      'w-24 h-24 text-xl': size === 'md',
      'w-14 h-14': size === 'sm',
      'w-10 h-10': size === 'xs'
    });

    const customImgDimension = typeof size === 'number' ? { width: size, height: size } : {};

    const renderAvatarContents = () => {
      if (src) {
        return (
          <div className={imgClasses} style={customImgDimension}>
            <img src={src} alt="프로필 이미지" />
          </div>
        );
      } else if (letters || isSingleStringChild(children)) {
        return (
          <div className={placeholderClasses} style={customImgDimension}>
            <span>{letters ? letters : children}</span>
          </div>
        );
      } else if (Children.count(children) === 1) {
        const firstChild = Children.only(children) as ReactElement;
        return cloneElement(firstChild, {
          className: cn(imgClasses, firstChild.props.className),
          style: { ...customImgDimension, ...firstChild.props.style }
        });
      } else {
        return (
          <div className={imgClasses} style={customImgDimension}>
            {children}
          </div>
        );
      }
    };

    return (
      <div aria-label="Avatar photo" {...props} className={containerClasses} ref={ref}>
        {renderAvatarContents()}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
