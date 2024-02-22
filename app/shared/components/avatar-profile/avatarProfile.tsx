import { Avatar } from '../avatar/avatar';

type Props = {
  src?: string;
  size?: 'md' | 'lg' | 'sm' | 'xs';
};

export const AvatarProfile = ({ size = 'md' }: Props) => {
  return (
    <div className="flex gap-3">
      <Avatar size={size} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" shape="circle" />
      <div className={`flex flex-col justify-center ${size === 'md' ? 'gap-2' : 'gap-1'}`}>
        <p className={`${size === 'md' ? 'text-lg' : 'text-sm'} font-bold`}>Z밥 쿠키</p>
        <p className="text-xs text-gray-500">2일 전</p>
      </div>
    </div>
  );
};
