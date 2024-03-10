import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cardDetailApi } from './api';
import { ICardDetailParameter, ICommentParameter } from '../types/parameter';

export const cardDetailMutation = {
  useCardDetailUpdate: (postId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: ICardDetailParameter) => cardDetailApi.updateCardDetail(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['cardDetail', postId] });
      }
    });

    return {
      mutate
    };
  },

  useCardDetailDelete: (postId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: () => cardDetailApi.deleteCardDetail(postId),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['cardDetail', postId] });
      }
    });

    return {
      mutate
    };
  },

  useCommentCreate: (postId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: ICommentParameter) => cardDetailApi.createComment(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['comment', postId] });
      }
    });

    return {
      mutate
    };
  },

  useCommentUpdate: (postId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (data: ICommentParameter) => cardDetailApi.updateComment(data),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['comment', postId] });
      }
    });

    return {
      mutate
    };
  },

  useCommentDelete: (postId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
      mutationFn: (commentId: number) => cardDetailApi.deleteComment(commentId),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ['comment', postId] });
      }
    });

    return {
      mutate
    };
  }
};
