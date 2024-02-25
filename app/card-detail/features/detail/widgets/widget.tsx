import { CardDetailCommentComment } from '../../comment/components/comment';
import { CardDetailCategory } from '../components/category';
import { CardDetailContent } from '../components/content';
import { cardDetailDetailLayout } from '../components/layout';

export { Widget as CardDetailDetailWidget };

const Widget = () => {
  const { Layout } = cardDetailDetailLayout;
  return (
    <Layout>
      <CardDetailCategory />
      <CardDetailContent />
      <CardDetailCommentComment />
    </Layout>
  );
};
