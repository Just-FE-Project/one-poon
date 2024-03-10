import { useContext } from 'react';
import { CardDetailCommentContext } from './context';

export { useProvider as useCommentProvider };
const useProvider = () => {
  const { commentList, onCreate, onDelete, onUpdate } = useContext(CardDetailCommentContext);
  return {
    commentList,
    onCreate,
    onDelete,
    onUpdate
  };
};
