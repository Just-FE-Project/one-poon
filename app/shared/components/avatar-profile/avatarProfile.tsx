import { Avatar } from '../avatar/avatar';

interface IProps {
  src?: string;
  size?: 'md' | 'lg' | 'sm' | 'xs';
  name?: string;
  createdAt?: string;
};

export const AvatarProfile = ({ size = 'md', createdAt, name }: IProps) => {
  return (
    <div className="flex gap-3">
      <Avatar size={size} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" shape="circle" />
      <div className={`flex flex-col justify-center ${size === 'md' ? 'gap-2' : 'gap-1'}`}>
        <p className={`${size === 'md' ? 'text-lg' : 'text-sm'} font-bold`}>{name}</p>
        <p className="text-xs text-gray-500">{createdAt}</p>
      </div>
    </div>
  );
};
