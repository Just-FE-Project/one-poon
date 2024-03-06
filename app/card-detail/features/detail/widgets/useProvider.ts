import { useContext } from 'react';
import { CardDetailContext } from './context';

export { useProvider as useCardDetailProvider };
const useProvider = () => {
  const { cardDetail, onUpdate, onDelete } = useContext(CardDetailContext);
  return {
    cardDetail,
    onDelete,
    onUpdate
  };
};
