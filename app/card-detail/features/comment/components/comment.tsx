import { useCommentProvider } from '../widgets/useProvider';
import { CardDetailCommentCommentDetail } from './comment-detail';
import { CardDetailCommentNoResult } from './no-result';

export { Comment as CardDetailCommentComment };

const Comment = () => {
  const { commentList } = useCommentProvider();
  const isListEmpty = commentList?.length === 0;
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold">댓글 {commentList?.length}</p>
      {isListEmpty && <CardDetailCommentNoResult />}
      {!isListEmpty && commentList?.map(item => <CardDetailCommentCommentDetail item={item} key={item.id} />)}
    </div>
  );
};
