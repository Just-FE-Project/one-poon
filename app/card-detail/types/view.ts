export interface ICardDetailView {
  id: number;
  title: string;
  description: string;
  image: string;
  amount: number;
  well_done_count: number;
  wake_up_count: number;
  created_at: string;
  category: string;
  users: IUserView;
  view_count: number;
}

export interface ICommentView {
  id: number;
  description: string;
  created_at: string;
  user_id: string;
  users: IUserView;
  post_id: number;
}

export interface IUserView {
  id: string;
  created_at: string;
  nickname: string;
  profile_image: string;
  current_amount: number;
  target_amount: number;
}