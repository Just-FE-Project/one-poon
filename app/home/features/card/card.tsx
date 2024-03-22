import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Chip, Chips } from '@/shared/components/chips/chips';

interface ICardProps {
  cardItem: {
    id: number;
    category: string;
    created_at: string;
    description: string;
    title: string;
    amount: number;
    image: string | null;
    user_id: string;
    user_public_id: string;
    view_count: number;
    wake_up_count: number;
    well_done_count: number;
  };
}

export const Card = ({
  cardItem: { id, amount, title, category, created_at, view_count, wake_up_count, well_done_count, description }
}: ICardProps) => {
  const [chipItems] = useState(() => [{ text: category ?? '멍청비용', isActive: false }]);

  const _price = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const router = useRouter();
  const detailHandler = () => {
    router.push(`/card-detail/${id}`);
  };

  return (
    <>
      <li
        className="flex h-[130px] cursor-pointer flex-col justify-between border-b border-b-gray-300 p-3"
        onClick={detailHandler}>
        <div className="flex h-[80%]">
          <div className="flex w-[80%] flex-col gap-2">
            <Chips>
              {chipItems.map((item, index) => (
                <Chip item={item} key={`${item.text}-${index}`} color="neutral" size="sm" />
              ))}
            </Chips>
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
          <p className="w-[20%] bg-gray-200">images</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-bold text-gray-600">{_price}</p>
          </div>
          <div className="flex items-center gap-[50px] text-sm text-gray-400">
            <div className="flex gap-[50px]">
              <p>작성일: {dayjs(created_at).format('YYYY년M월D일 hh:mm:ss')}</p>
              <p>조회수: {view_count}</p>
            </div>
            <div className="flex gap-2">
              <p>댓글 수: {wake_up_count} </p>
              <p>좋아요 {well_done_count}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
