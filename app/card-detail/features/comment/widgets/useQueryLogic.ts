import { cardDetailRepository } from '@/card-detail/repository/repository';
import { useCardDetailState } from '@/card-detail/state/useState';

export { useQueryLogic as useCardDetailCommentQueryLogic };

const useQueryLogic = () => {
  const id = useCardDetailState(state => state.id);
  const { data: commentList } = cardDetailRepository.useCommentGet(id!);
  const { run: onCreate } = cardDetailRepository.useCommentCreate(id!);
  const { run: onUpdate } = cardDetailRepository.useCommentUpdate(id!);
  const { run: onDelete } = cardDetailRepository.useCommentDelete(id!);

  return {
    commentList,
    onCreate,
    onUpdate,
    onDelete
  };
};
