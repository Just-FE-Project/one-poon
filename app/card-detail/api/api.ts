import {
  supabaseCreateComment,
  supabaseDeleteCardDetail,
  supabaseDeleteComment,
  supabaseGetCardDetail,
  supabaseGetComment,
  supabaseUpdateCardDetail,
  supabaseUpdateComment
} from './service';

export const cardDetailApi = {
  getCardDetail: supabaseGetCardDetail,
  updateCardDetail: supabaseUpdateCardDetail,
  deleteCardDetail: supabaseDeleteCardDetail,
  getComment: supabaseGetComment,
  createComment: supabaseCreateComment,
  updateComment: supabaseUpdateComment,
  deleteComment: supabaseDeleteComment
};
