import { useSuspenseQuery } from '@tanstack/react-query';
import { cardDetailApi } from './api';

export const cardDetailQuery = {
  useCardDetailGet: (id: number) => {
    const { data } = useSuspenseQuery({
      queryKey: ['cardDetail', id],
      queryFn: () => cardDetailApi.getCardDetail(id)
    });

    return {
      data
    };
  },

  useCommentGet: (postId: number) => {
    const { data } = useSuspenseQuery({
      queryKey: ['comment', postId],
      queryFn: () => cardDetailApi.getComment(postId)
    });

    return {
      data
    };
  }
};
