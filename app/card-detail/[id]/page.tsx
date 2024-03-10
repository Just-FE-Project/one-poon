'use client';

import { AppBar } from '@/shared/components/app-bar/appBar';
import { Dropdown } from '@/shared/components/dropdown/dropdown';
import { LeftArrow } from '@/shared/components/left-arrow/leftArrow';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { cardDetailLayouts } from '../components/layout';
import { CardDetailDetailWidget } from '../features/detail/widgets/widget';
import { useCardDetailState } from '../state/useState';
import { generateDropdownList } from '../utils/constants';
import { cardDetailRepository } from '../repository/repository';
import { CardDetailAppBar } from '../features/detail/components/card-detail-app-bar';

const Index = () => {
  const { CardDetailLayout, Body } = cardDetailLayouts;
  const queryClient = new QueryClient();
  const setId = useCardDetailState(state => state.setId);
  const pathname = usePathname();

  useEffect(() => {
    setId(Number(pathname.split('/').at(-1)));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CardDetailLayout>
        <CardDetailAppBar />
        <Body>
          <CardDetailDetailWidget />
        </Body>
      </CardDetailLayout>
    </QueryClientProvider>
  );
};

export default Index;
