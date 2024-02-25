import { AvatarProfile } from '@/shared/components/avatar-profile/avatarProfile';
import { Dropdown } from '@/shared/components/dropdown/dropdown';

export { CommentDetail as CardDetailCommentCommentDetail };
const CommentDetail = () => {
  return (
    <div className="flex flex-col gap-3 border-b-2">
      <div className="flex justify-between">
        <AvatarProfile size="sm" />
        <Dropdown size="sm" />
      </div>
      <p className="min-h-10 pl-16">여기 댓글이요</p>
    </div>
  );
};
