import { useState } from 'react';

import { AvatarProfile } from '@/shared/components/avatar-profile/avatarProfile';
import { Chip, Chips } from '@/shared/components/chips/chips';
import { DivideBar } from '@/shared/components/divide-bar/divideBar';
import { ProgressBar } from '@/shared/components/progress-bar/progressBar';

export { Content as CardDetailContent };
const Content = () => {
  const [chipItems, setChipItems] = useState([
    { text: '잘했어요', isActive: false },
    { text: '정신차려요', isActive: false }
  ]);

  const handleChipClick = (index: number) => {
    const newChipItems = chipItems.map((item, idx) => {
      if (idx === index) {
        return { ...item, isActive: !item.isActive };
      }
      return item;
    });
    setChipItems(newChipItems);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <AvatarProfile />
        <div className="flex flex-col justify-center">
          <p className="align-middle text-2xl font-bold">40,000원</p>
        </div>
      </div>
      <ProgressBar value={50} targetAmount={500000} currentAmount={250000} />
      <div className="mt-6 flex min-h-52 flex-col gap-4">
        <p className="text-3xl font-bold">경복궁역 근처에 로또 산 사람 나야 나</p>
        <p className="text-md">1등 당첨되면 뭐 살까? ㅊㅊ좀</p>
      </div>
      <div className="flex flex-col gap-3 pb-3">
        <p className="p-2 text-gray-400">20명이 봤어요</p>
        <Chips>
          {chipItems.map((item, index) => (
            <Chip
              item={item}
              key={`${item.text}-${index}`}
              color="neutral"
              size="lg"
              onChipClick={() => handleChipClick(index)}
            />
          ))}
        </Chips>
      </div>
      <DivideBar />
    </div>
  );
};
