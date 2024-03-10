import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Avatar } from '../avatar/avatar';
import ko from 'dayjs/locale/ko';

interface IProps {
  src?: string;
  size?: 'md' | 'lg' | 'sm' | 'xs';
  name?: string;
  createdAt?: string;
}

export const AvatarProfile = ({ size = 'md', createdAt, name }: IProps) => {
  dayjs.extend(relativeTime);
  dayjs.locale(ko);
  return (
    <div className="flex gap-3">
      <Avatar size={size} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" shape="circle" />
      <div className={`flex flex-col justify-center ${size === 'md' ? 'gap-2' : 'gap-1'}`}>
        <p className={`${size === 'md' ? 'text-lg' : 'text-sm'} font-bold`}>{name}</p>
        <p className="text-xs text-gray-500">{dayjs(createdAt).fromNow()}</p>
      </div>
    </div>
  );
};
