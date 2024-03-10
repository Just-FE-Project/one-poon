import Image from 'next/image';

import CommentIcon from '@/assets/comment-ico.png';
import LikeIcon from '@/assets/like-ico.png';
import MoneyIcon from '@/assets/money-ico.png';
import PopularIcon from '@/assets/popular-ico.png';

const iconTypes = {
  money: MoneyIcon,
  popular: PopularIcon,
  comment: CommentIcon,
  like: LikeIcon
};

interface IProps {
  title: string;
  type: 'money' | 'popular' | 'comment' | 'like';
  progress: {
    current: number;
    total: number;
  };
  status: 'ongoing' | 'completed';
}

export function MissionProgress({ title, type, progress, status }: IProps) {
  const IconComponent = iconTypes[type];
  return (
    <div className="flex items-center justify-between gap-2 px-4 py-6">
      <div className="flex grow items-center gap-4">
        {IconComponent && <Image src={IconComponent} className="w-14" alt="미션 아이콘" />}
        <div className="flex grow flex-col">
          <span className="text-lg font-bold">{title}</span>
          <div className={`flex gap-2 ${type === 'money' ? 'mt-1 flex-col items-start' : 'items-center'}`}>
            <progress
              className={`progress progress-error h-2 w-[120px]`}
              value={progress.current}
              max={progress.total}></progress>
            <div className="flex items-center gap-1 font-bold text-gray-400">
              {type === 'money' ? (
                <>
                  <span>{progress.current.toLocaleString('ko-KR')}원</span>
                  <span>/</span>
                  <span>{progress.total.toLocaleString('ko-KR')}원</span>
                </>
              ) : (
                <>
                  <span>{progress.current}</span>
                  <span>/</span>
                  <span>{progress.total}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <span className="rounded-2xl bg-gray-200 px-2 py-1 text-xs font-bold">
        {status === 'ongoing' ? '진행중' : '완료'}
      </span>
    </div>
  );
}
