import React, { useMemo } from 'react';
import { CardDetailCommentContext } from './context';
import { useCardDetailCommentQueryLogic } from './useQueryLogic';

interface IProps {
  children: React.ReactNode;
}

export { Provider as CardDetailCommentProvider };
const Provider = ({ children }: IProps) => {
  const { commentList, onCreate, onUpdate, onDelete } = useCardDetailCommentQueryLogic();
  const value = useMemo(
    () => ({
      commentList,
      onCreate,
      onUpdate,
      onDelete
    }),
    [commentList, onCreate, onUpdate, onDelete]
  );
  return <CardDetailCommentContext.Provider value={value}>{children}</CardDetailCommentContext.Provider>;
};
