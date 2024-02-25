'use client';

import { ReactNode } from 'react';

import { useDeviceType, useSetScreenHeight } from '@/shared/hooks';
import { cn } from '@/shared/utils/className';
interface IProps {
  children: ReactNode;
}

export const Main = ({ children }: IProps) => {
  const deviceType = useDeviceType();
  useSetScreenHeight();

  return (
    <main
      className={cn(
        'relative mx-auto min-h-screen w-screen max-w-[768px]',
        deviceType === 'desktop' ? 'border-l border-r border-gray-default' : ''
      )}>
      {children}
    </main>
  );
};
