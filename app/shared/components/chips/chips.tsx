import { HTMLAttributes, memo } from 'react';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import { ComponentSize } from '@/shared/types/component';
import { cn } from '@/shared/utils/className';

interface IChipItem {
  text: string | number;
  isActive: boolean;
}

interface IChipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  item: IChipItem;
  onChipClick: () => void;
  size?: ComponentSize;
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

const getChipClasses = (isActive: boolean, size: ComponentSize, className?: string) => {
  const baseClasses =
    'flex items-center justify-center rounded-full border border-neutral font-medium text-neutral bg-white cursor-pointer';
  const activeClasses = isActive ? 'bg-neutral text-white' : '';
  const sizeClasses = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'mx-1 px-3 py-1 text-sm',
    md: 'mx-1.5 px-5 py-2 text-md',
    lg: 'mx-2 px-7 py-3 text-lg'
  }[size];
  return cn(baseClasses, activeClasses, sizeClasses, className);
};

export const Chip = memo(({ className, item, onChipClick, size = 'md' }: IChipProps) => {
  const classes = getChipClasses(item.isActive, size, className);
  return (
    <button className={classes} onClick={onChipClick} aria-pressed={item.isActive}>
      <div>{item.text}</div>
    </button>
  );
});

Chip.displayName = 'Chip';
