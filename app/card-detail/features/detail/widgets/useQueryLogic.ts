import { cardDetailRepository } from '@/card-detail/repository/repository';
import { useCardDetailState } from '@/card-detail/state/useState';

export { useQueryLogic as useCardDetailQueryLogic };
const useQueryLogic = () => {
  const id = useCardDetailState(state => state.id);
  const { data: cardDetail } = cardDetailRepository.useCardDetailGet(id!);
  const { run: onUpdate } = cardDetailRepository.useCardDetailUpdate(id!);
  const { run: onDelete } = cardDetailRepository.useCardDetailDelete(id!);

  return {
    cardDetail,
    onUpdate,
    onDelete
  };
};
