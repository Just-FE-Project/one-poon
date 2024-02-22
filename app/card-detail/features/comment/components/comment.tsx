import { CardDetailCommentCommentDetail } from './comment-detail';
import { CardDetailCommentNoResult } from './no-result';

export { Comment as CardDetailCommentComment };

const Comment = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold">댓글 2</p>
      <CardDetailCommentCommentDetail />
      <CardDetailCommentCommentDetail />
      <CardDetailCommentCommentDetail />
      <CardDetailCommentCommentDetail />
      <CardDetailCommentCommentDetail />
      <CardDetailCommentNoResult />
    </div>
  );
};
