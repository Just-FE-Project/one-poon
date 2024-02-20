import { HTMLAttributes, memo } from 'react';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import { ComponentColor, ComponentSize } from '@/shared/types/component';
import { cn } from '@/shared/utils/className';

interface IChipItem {
  text: string | number;
  isActive: boolean;
}

interface IChipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  item: IChipItem;
  onChipClick: () => void;
  size?: ComponentSize;
  color?: ComponentColor;
}

interface IChipsProps {
  children: React.ReactNode;
  className?: string;
}

export const Chips = ({ children, className }: IChipsProps) => {
  const ref = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref);
  const classes = cn('overflow-x-hidden select-none whitespace-nowrap flex w-full', className);

  return (
    <div className={classes} {...events} ref={ref}>
      {children}
    </div>
  );
};

const getChipClasses = (
  isActive: boolean,
  size: ComponentSize = 'md',
  color: ComponentColor = 'neutral',
  className?: string
) => {
  const baseClasses = 'flex items-center justify-center rounded-full font-medium cursor-pointer';

  return cn(baseClasses, className, {
    'mx-0.5 px-2 py-0.5 text-xs': size === 'xs',
    'mx-1 px-3 py-1 text-sm': size === 'sm',
    'mx-1.5 px-5 py-2 text-md': size === 'md',
    'mx-2 px-7 py-3 text-lg': size === 'lg',
    [`bg-${color} text-white`]: isActive,
    [`text-${color} bg-white border`]: !isActive
  });
};

export const Chip = memo(({ className, item, onChipClick, size, color }: IChipProps) => {
  const classes = getChipClasses(item.isActive, size, color, className);
  return (
    <button
      className={classes}
      onClick={onChipClick}
      aria-pressed={item.isActive}
      style={{ borderColor: 'currentColor' }}>
      <div>{item.text}</div>
    </button>
  );
});

Chip.displayName = 'Chip';