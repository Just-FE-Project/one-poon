import { cardDetailRepository } from '@/card-detail/repository/repository';
import { useCardDetailState } from '@/card-detail/state/useState';
import { generateDropdownList } from '@/card-detail/utils/constants';
import { AppBar } from '@/shared/components/app-bar/appBar';
import { Dropdown } from '@/shared/components/dropdown/dropdown';
import { LeftArrow } from '@/shared/components/left-arrow/leftArrow';

export const CardDetailAppBar = () => {
  const id = useCardDetailState(state => state.id);
  const { run: onDelete } = cardDetailRepository.useCardDetailDelete(id);
  const onUpdate = () => {};
  return (
    <AppBar
      leftChildren={<LeftArrow onClick={() => window.history.back()} />}
      rightChildren={<Dropdown itemList={generateDropdownList({ actions: { onDelete, onUpdate } })} />}
    />
  );
};
