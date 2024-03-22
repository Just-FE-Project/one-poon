import { useState } from 'react';

import { Chip, Chips } from '@/shared/components/chips/chips';

import { useCardDetailProvider } from '../widgets/useProvider';

export { Category as CardDetailCategory };

const Category = () => {
  const { cardDetail } = useCardDetailProvider();
  const [chipItems, setChipItems] = useState(() => [{ text: cardDetail?.category ?? '멍청비용', isActive: false }]);
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
    <Chips>
      {chipItems.map((item, index) => (
        <Chip
          item={item}
          key={`${item.text}-${index}`}
          color="neutral"
          size="sm"
          onChipClick={() => handleChipClick(index)}
        />
      ))}
    </Chips>
  );
};
