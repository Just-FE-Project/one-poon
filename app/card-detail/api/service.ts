import supabase from '../../../supabase';
import { ICardDetailParameter, ICommentParameter } from '../types/parameter';

export const supabaseGetCardDetail = async (id: number) => {
  const { data, error } = await supabase.from('post').select('*, users(*)').eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Post를 가져올 수 없습니다.');
  }

  if (data.length === 0) {
    throw new Error('해당 ID의 Post가 존재하지 않습니다.');
  }

  return data[0];
};

export const supabaseUpdateCardDetail = async (data: ICardDetailParameter) => {
  const { error } = await supabase.from('post').update(data).eq('id', data.id);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Post를 업데이트 할 수 없습니다.');
  }
};

export const supabaseDeleteCardDetail = async (postId: number) => {
  const { error } = await supabase.from('post').delete().eq('id', postId);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Post를 가져올 수 없습니다.');
  }
};

export const supabaseGetComment = async (postId: number) => {
  const { data, error } = await supabase.from('comment').select('*, users(*)').eq('post_id', postId);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 comment를 가져올 수 없습니다.');
  }
  
  return data;
};

export const supabaseUpdateComment = async (data: ICommentParameter) => {
  const { error } = await supabase.from('comment').update(data).eq('id', data.id);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Post를 가져올 수 없습니다.');
  }
};

export const supabaseCreateComment = async (data: ICommentParameter) => {
  const { error } = await supabase.from('post').insert(data);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Post를 가져올 수 없습니다.');
  }
};

export const supabaseDeleteComment = async (commentId: number) => {
  const { error } = await supabase.from('post').delete().eq('id', commentId);

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Post를 가져올 수 없습니다.');
  }
};
