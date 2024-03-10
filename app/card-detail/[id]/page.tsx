'use client';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { cardDetailLayouts } from '../components/layout';
import { CardDetailAppBar } from '../features/detail/components/card-detail-app-bar';
import { CardDetailDetailWidget } from '../features/detail/widgets/widget';
import { useCardDetailState } from '../state/useState';

const Index = () => {
  const { Layout, Body } = cardDetailLayouts;
  const queryClient = new QueryClient();
  const setId = useCardDetailState(state => state.setId);
  const pathname = usePathname();

  useEffect(() => {
    setId(Number(pathname.split('/').at(-1)));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <CardDetailAppBar />
        <Body>
          <CardDetailDetailWidget />
        </Body>
      </Layout>
    </QueryClientProvider>
  );
};

export default Index;
