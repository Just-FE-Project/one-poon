import { ICommentView } from '@/card-detail/types/view';
import { generateDropdownList } from '@/card-detail/utils/constants';
import { AvatarProfile } from '@/shared/components/avatar-profile/avatarProfile';
import { Dropdown } from '@/shared/components/dropdown/dropdown';
import { useCommentProvider } from '../widgets/useProvider';

export { CommentDetail as CardDetailCommentCommentDetail };

interface IProps {
  item: ICommentView;
}
const CommentDetail = ({ item }: IProps) => {
  const { onDelete, onUpdate } = useCommentProvider();
  return (
    <div className="flex flex-col gap-3 border-b-2">
      <div className="flex justify-between">
        <AvatarProfile size="sm" name={item?.users?.nickname} createdAt={item?.created_at} />
        <Dropdown size="sm" itemList={generateDropdownList({ actions: { onDelete, onUpdate } })} />
      </div>
      <p className="min-h-10 pl-16">{item?.description}</p>
    </div>
  );
};
