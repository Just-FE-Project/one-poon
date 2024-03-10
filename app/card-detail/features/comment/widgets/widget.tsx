import { Suspense } from 'react';
import { CardDetailCommentComment } from '../components/comment';
import { CardDetailCommentProvider } from './provider';

export { Widget as CardDetailCommentWidget };

const Widget = () => {
  return (
    <Suspense fallback={null}>
      <CardDetailCommentProvider>
        <CardDetailCommentComment />
      </CardDetailCommentProvider>
    </Suspense>
  );
};
