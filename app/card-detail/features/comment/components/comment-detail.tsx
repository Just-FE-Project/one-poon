import { ICommentView } from '@/card-detail/types/view';
import { generateDropdownList } from '@/card-detail/utils/constants';
import { AvatarProfile } from '@/shared/components/avatar-profile/avatarProfile';
import { Dropdown } from '@/shared/components/dropdown/dropdown';
import { useState } from 'react';
import { useCommentProvider } from '../widgets/useProvider';

export { CommentDetail as CardDetailCommentCommentDetail };

interface IProps {
  item: ICommentView;
}
const CommentDetail = ({ item }: IProps) => {
  const { onDelete, onUpdate } = useCommentProvider();
  const [inputVal, setInputVal] = useState(item?.description);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 border-b-2">
      <div className="flex justify-between">
        <AvatarProfile size="sm" name={item?.users?.nickname} createdAt={item?.created_at} />
        {isEditOpen ? null : (
          <Dropdown
            size="sm"
            itemList={generateDropdownList({
              actions: {
                onDelete: () => onDelete(item?.id),
                onUpdate: () => setIsEditOpen(true)
              }
            })}
          />
        )}
      </div>
      {isEditOpen ? (
        <div className="flex gap-4 pb-2">
          <textarea
            value={inputVal}
            className="textarea textarea-bordered relative h-24 w-[90%] resize-none"
            onChange={e => setInputVal(e.target.value)}
          />
          <div className="flex items-center gap-3 pr-2">
            <button className="btn btn-warning" onClick={() => onUpdate({ id: item.id, description: inputVal })}>
              수정
            </button>
            <button className="btn" onClick={() => setIsEditOpen(false)}>
              취소
            </button>
          </div>
        </div>
      ) : (
        <p className="min-h-10 pl-16">{item?.description}</p>
      )}
    </div>
  );
};
