import { useState } from 'react';

import { cardDetailUpdateLogic } from '@/card-detail/utils';
import { AvatarProfile } from '@/shared/components/avatar-profile/avatarProfile';
import { Chip, Chips, IChipItem } from '@/shared/components/chips/chips';
import { DivideBar } from '@/shared/components/divide-bar/divideBar';
import { ProgressBar } from '@/shared/components/progress-bar/progressBar';
import { useCardDetailProvider } from '../widgets/useProvider';

export { Content as CardDetailContent };
const Content = () => {
  const { cardDetail, onUpdate } = useCardDetailProvider();
  const [chipItems, setChipItems] = useState([
    { text: '잘했어요', isActive: false, count: cardDetail?.well_done_count },
    { text: '정신차려요', isActive: false, count: cardDetail?.wake_up_count }
  ]);
  const handleChipClick = (index: number, item: IChipItem) => {
    const newChipItems = chipItems.map((item, idx) => {
      if (idx === index) {
        return { ...item, isActive: !item.isActive };
      }
      return item;
    });
    setChipItems(newChipItems);
    cardDetailUpdateLogic({ item, cardDetail, onUpdate });
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <AvatarProfile name={cardDetail?.users?.nickname} createdAt={cardDetail?.created_at} />
        <div className="flex flex-col justify-center">
          <p className="align-middle text-2xl font-bold">{cardDetail?.amount.toLocaleString()}원</p>
        </div>
      </div>
      <ProgressBar targetAmount={cardDetail?.users?.target_amount} currentAmount={cardDetail?.users?.current_amount} />
      <div className="mt-6 flex min-h-52 flex-col gap-4">
        <p className="text-3xl font-bold">{cardDetail?.title}</p>
        <p className="text-md">{cardDetail?.description}</p>
      </div>
      <div className="flex flex-col gap-3 pb-3">
        <p className="p-2 text-gray-400">{cardDetail?.view_count ?? 0}명이 봤어요</p>
        <Chips>
          {chipItems.map((item, index) => (
            <Chip
              item={item}
              key={`${item.text}-${index}`}
              color="neutral"
              size="lg"
              onChipClick={() => handleChipClick(index, item)}
            />
          ))}
        </Chips>
      </div>
      <DivideBar />
    </div>
  );
};
