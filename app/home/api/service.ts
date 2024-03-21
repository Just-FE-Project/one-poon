import supabase from '../../../supabase';

export const supabaseGetPost = async () => {
  const { data, error } = await supabase.from('post').select('*');

  if (error) {
    console.log(error);
    throw new Error('Supabase에서 Post를 가져올 수 없습니다.');
  }

  return data;
};
