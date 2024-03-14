import Image from 'next/image';
import { useState } from 'react';

import { AppBar } from '@/shared/components/app-bar/appBar';
import { Modal } from '@/shared/components/modal/modal';

import ThemeModal from './ThemeModal';
// 수정
type propsModal = {
  onClick: (state?: boolean) => void;
  open: boolean;
};

const WriteModal = ({ onClick, open }: propsModal) => {
  const [isOpenThemeModal, setIsOpenThemeModal] = useState(false);

  const handleToggleTHemeModal = () => {
    setIsOpenThemeModal(prev => !prev);
  };

  return (
    <>
      <Modal open={open} position="middle" boxStyle="max-w-[768px] w-full max-h-dvh h-dvh overflow-hidden">
        <div className="p-[10px]">
          <AppBar
            leftClassName={'left-0'}
            leftChildren={
              <button
                className="btn btn-square btn-ghost"
                onClick={() => {
                  onClick();
                  handleToggleTHemeModal();
                }}>
                <Image src={'/x-mark.svg'} width={20} height={20} alt="close icon" />
              </button>
            }
            centerChildren={'한푼한푼 글쓰기'}
            rightChildren={
              <button
                onClick={() => {
                  onClick();
                  handleToggleTHemeModal();
                }}>
                완료
              </button>
            }
          />
        </div>
        <Modal.Header className="flex flex-col pt-[27px]">
          <div className="flex h-[50px] flex-row items-center justify-between">
            <div>게시글의 주제를 선택해주세요.</div>
            <div className="text-gray flex-none">
              <ThemeModal open={isOpenThemeModal} onClick={handleToggleTHemeModal} />
            </div>
          </div>
          <hr className="relative left-[-21px] w-[768px]" />
          <div className="h-[50px]">
            <input className="h-[50px] w-full font-bold outline-none" placeholder="금액"></input>
          </div>
          <hr className="relative left-[-21px] w-[768px]" />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <input className="h-[50px] font-bold outline-none" placeholder="제목을 입력하세요"></input>
              <textarea
                className="h-[400px] resize-none outline-none"
                placeholder="현명한 소비였는지 질문이나 이야기를 해보세요"></textarea>
            </div>
            <div>
              <div className="relative mb-4 h-[80px] w-[80px] rounded-md bg-gray-500">
                <input className="absolute right-2 top-2 h-[20px] w-[20px] rounded-full border bg-white" />
              </div>
              <hr className="relative left-[-21px] w-[768px]" />
              <span className="flex h-[50px] items-center gap-2">
                <div className="text-gray flex-none">
                  <button className="btn btn-square btn-ghost" onClick={() => {}}>
                    <Image src={'/camera.svg'} width={20} height={20} alt="camera icon" />
                  </button>
                </div>
                사진
              </span>
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default WriteModal;
