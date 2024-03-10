import { useMemo } from 'react';
import { CardDetailContext } from './context';
import { useCardDetailQueryLogic } from './useQueryLogic';

interface IProps {
  children: React.ReactNode;
}

export { Provider as CardDetailProvider };

const Provider = ({ children }: IProps) => {
  const { cardDetail, onUpdate, onDelete } = useCardDetailQueryLogic();
  const value = useMemo(
    () => ({
      cardDetail,
      onUpdate,
      onDelete
    }),
    [cardDetail, onUpdate, onDelete]
  );
  return <CardDetailContext.Provider value={value}>{children}</CardDetailContext.Provider>;
};
