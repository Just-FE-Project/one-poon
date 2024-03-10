import { ICardDetailParameter } from '@/card-detail/types/parameter';
import { ICardDetailView } from '@/card-detail/types/view';
import { createContext } from 'react';

interface State {
  cardDetail?: ICardDetailView;
  onUpdate: (data: ICardDetailParameter) => void;
  onDelete: (data: ICardDetailView) => void;
}

export { Context as CardDetailContext };

const Context = createContext<State>({
  onUpdate: () => {},
  onDelete: () => {}
});
