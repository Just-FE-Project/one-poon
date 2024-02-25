import Image from 'next/image';
import { useState } from 'react';

import { AppBar } from '@/shared/components/app-bar/appBar';
import { Modal } from '@/shared/components/modal/modal';
import { XIcon } from '@/shared/components/x-icon/x-icon';

import cameraIcon from '../../public/camera.svg';
import rightArrow from '../../public/right-arrow.svg';
import ThemeModal from './ThemeModal';

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
      <Modal open={open} position="middle" boxStyle="max-w-[768px] max-h-dvh h-dvh">
        <Modal.Header className="">
          <AppBar
            leftChildren={<XIcon onClick={onClick} />}
            centerChildren={'한푼한푼 글쓰기'}
            rightChildren={<button onClick={() => onClick()}>완료</button>}
          />
        </Modal.Header>
        <Modal.Body className="flex flex-col pt-[45px]">
          <div className="flex h-[50px] flex-row items-center justify-between">
            <div>게시글의 주제를 선택해주세요.</div>
            {/* <RightIcon /> */}
            <div className="text-gray flex-none">
              <button className="btn btn-square btn-ghost w-6" onClick={handleToggleTHemeModal}>
                <Image src={rightArrow} alt="right arrow icon"></Image>
              </button>
            </div>
          </div>
          <hr className="relative left-[-21px] w-[768px]" />
          <div className="h-[50px]">
            <p className="flex h-[50px] items-center">금액</p>
          </div>
          <hr className="relative left-[-21px] w-[768px]" />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <input className="pt-[20px] font-bold" placeholder="제목을 입력하세요"></input>
              <textarea className="pt-[20px]" placeholder="현명한 소비였는지 질문이나 이야기를 해보세요"></textarea>
            </div>
            <div>
              {/* <img alt="image" className="mb-5" /> */}
              <div className="relative mb-4 h-[80px] w-[80px] rounded-md bg-gray-500">
                <input className="absolute right-2 top-2 h-[20px] w-[20px] rounded-full border bg-white" />
              </div>
              <hr className="relative left-[-21px] w-[768px]" />
              <span className="flex h-[50px] items-center gap-2">
                <div className="text-gray flex-none">
                  <button className="btn btn-square btn-ghost w-6" onClick={() => {}}>
                    <Image src={cameraIcon} alt="camera icon" />
                  </button>
                </div>
                사진
              </span>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Actions>
        <button className="btn" onClick={() => onClick()}>
          완료
        </button>
      </Modal.Actions> */}
        <ThemeModal open={isOpenThemeModal} onClick={handleToggleTHemeModal} />
      </Modal>
    </>
  );
};

export default WriteModal;
