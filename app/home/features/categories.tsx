import { useState } from 'react';

import { Chip, Chips } from '@/shared/components/chips/chips';

export const Categories = () => {
  const [chipItems, setChipItems] = useState([
    { text: 'Chip 1', isActive: false },
    { text: 'Chip 2', isActive: false },
    { text: 'Chip 3', isActive: false },
    { text: 'Chip 4', isActive: false },
    { text: 'Chip 5', isActive: false },
    { text: 'Chip 6', isActive: false },
    { text: 'Chip 7', isActive: false },
    { text: 'Chip 8', isActive: false },
    { text: 'Chip 9', isActive: false },
    { text: 'Chip 10', isActive: false }
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
    <div className="border-b-gray-30] flex h-[70px] items-center border-b pl-3">
      <Chips>
        {chipItems.map((item, index) => (
          <Chip
            item={item}
            key={`${item.text}-${index}`}
            color="neutral"
            size="md"
            onChipClick={() => handleChipClick(index)}
          />
        ))}
      </Chips>
    </div>
  );
};
