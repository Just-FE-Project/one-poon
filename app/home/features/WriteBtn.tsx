import { useState } from 'react';

import WriteModal from '@/home/components/modal/WriteModal';

export const WriteBtn = () => {
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  const handleWriteModal = () => {
    setIsWriteModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-end pr-[40px]">
        <div
          className="size-lg fixed bottom-[40px] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50%] bg-primary
            text-white"
          onClick={() => {
            setIsWriteModalOpen(true);
          }}>
          +
        </div>
      </div>
      <WriteModal open={isWriteModalOpen} onClick={handleWriteModal} />
    </>
  );
};
