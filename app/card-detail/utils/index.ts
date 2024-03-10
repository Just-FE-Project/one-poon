import { IChipItem } from '@/shared/components/chips/chips';
import { ICardDetailView } from '../types/view';
import { ICardDetailParameter } from '../types/parameter';

interface IProps {
  item: IChipItem;
  cardDetail?: ICardDetailView;
  onUpdate: (data: ICardDetailParameter) => void;
}

export const cardDetailUpdateLogic = ({ item, cardDetail, onUpdate }: IProps) => {
  if (item.text === '잘했어요') {
    onUpdate({
      well_done_count: item.isActive ? cardDetail!.well_done_count - 1 : cardDetail!.well_done_count + 1,
      wake_up_count: cardDetail!.wake_up_count
    });
  } else {
    onUpdate({
      well_done_count: cardDetail!.well_done_count,
      wake_up_count: item.isActive ? cardDetail!.wake_up_count - 1 : cardDetail!.wake_up_count + 1
    });
  }
};
