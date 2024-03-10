import { useRouter } from 'next/navigation';

import { Chip, Chips } from '@/shared/components/chips/chips';

interface ICardProps {
  cardItem: {
    id: string;
    chips: { text: string; isActive: boolean }[];
    title: string;
    desc: string;
    price: number;
    images: string;
    like: number;
  };
}

export const Card = ({ cardItem: { id, chips, desc, like, price, title } }: ICardProps) => {
  const _price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
              {chips.map((item, index) => (
                <Chip item={item} key={`${item.text}-${index}`} color="neutral" size="sm" />
              ))}
            </Chips>
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
          <p className="w-[20%] bg-gray-200">images</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-bold text-gray-600">{_price}</p>
          </div>
          <div className="flex items-center gap-[200px] text-sm text-gray-400">
            <div className="flex gap-2">
              <p>작성일</p>
              <p>조회수</p>
            </div>
            <div className="flex gap-2">
              <p>댓글 수 </p>
              <p>좋아요 {like}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
