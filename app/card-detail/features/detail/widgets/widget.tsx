import { Suspense } from 'react';
import { CardDetailCommentWidget } from '../../comment/widgets/widget';
import { CardDetailCategory } from '../components/category';
import { CardDetailContent } from '../components/content';
import { cardDetailDetailLayout } from '../components/layout';
import { CardDetailProvider } from './provider';

export { Widget as CardDetailDetailWidget };

const Widget = () => {
  const { Layout } = cardDetailDetailLayout;
  return (
    <Suspense fallback={null}>
      <CardDetailProvider>
        <Layout>
          <CardDetailCategory />
          <CardDetailContent />
          <CardDetailCommentWidget />
        </Layout>
      </CardDetailProvider>
    </Suspense>
  );
};
