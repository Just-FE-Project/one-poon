import { ICommentParameter } from '@/card-detail/types/parameter';
import { ICommentView } from '@/card-detail/types/view';
import { createContext } from 'react';

interface State {
  commentList?: ICommentView[];
  onCreate: (data: ICommentView) => void;
  onUpdate: (data: ICommentParameter) => void;
  onDelete: (id: number) => void;
}

export { Context as CardDetailCommentContext };

const Context = createContext<State>({
  onCreate: () => {},
  onUpdate: () => {},
  onDelete: () => {}
});
