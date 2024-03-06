import { cardDetailMutation } from '../api/mutation';
import { cardDetailQuery } from '../api/query';
import { ICardDetailParameter, ICommentParameter } from '../types/parameter';

export const cardDetailRepository = {
  useCardDetailGet: (id: number) => {
    const { data } = cardDetailQuery.useCardDetailGet(id);
    return {
      data
    };
  },

  useCardDetailUpdate: (postId: number) => {
    const { mutate } = cardDetailMutation.useCardDetailUpdate(postId);
    return {
      run: (data: ICardDetailParameter) => mutate(data)
    };
  },

  useCardDetailDelete: (postId: number) => {
    const { mutate } = cardDetailMutation.useCardDetailDelete(postId);
    return {
      run: () => mutate()
    };
  },

  useCommentGet: (postId: number) => {
    const { data } = cardDetailQuery.useCommentGet(postId);
    return {
      data
    };
  },

  useCommentCreate: (postId: number) => {
    const { mutate } = cardDetailMutation.useCommentCreate(postId);
    return {
      run: (data: ICommentParameter) => mutate(data)
    };
  },

  useCommentUpdate: (postId: number) => {
    const { mutate } = cardDetailMutation.useCommentUpdate(postId);
    return {
      run: (data: ICommentParameter) => mutate(data)
    };
  },

  useCommentDelete: (postId: number) => {
    const { mutate } = cardDetailMutation.useCommentDelete(postId);
    return {
      run: (commentId: number) => mutate(commentId)
    };
  }
};
