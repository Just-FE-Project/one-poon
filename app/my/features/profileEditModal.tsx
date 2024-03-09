import Image from 'next/image';
import { useState } from 'react';

import cameraIco from '@/assets/camera-ico.png';
import basicProfile from '@/assets/profile-basic.png';
import { AppBar } from '@/shared/components/app-bar/appBar';
import { LeftArrow } from '@/shared/components/left-arrow/leftArrow';
import { Modal } from '@/shared/components/modal/modal';
interface IProps {
  isModalOpen: boolean;
  handleModalClose: () => void;
}

export function ProfileEditModal({ isModalOpen, handleModalClose }: IProps) {
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Modal open={isModalOpen} position="middle" boxStyle="w-full h-full max-h-fit rounded-none pt-[56px]">
      <Modal.Header>
        <AppBar
          leftChildren={<LeftArrow onClick={handleModalClose} />}
          centerChildren={'프로필 수정'}
          rightChildren={<button onClick={handleModalClose}>완료</button>}
        />
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col items-center gap-10 pt-10">
          <div className="relative h-[120px] w-[120px]">
            {selectedImage ? (
              <Image
                src={selectedImage}
                className="max-h-full w-full overflow-hidden rounded-[50%] object-contain"
                width={120}
                height={120}
                alt="유저 프로필"
              />
            ) : (
              <Image
                src={basicProfile}
                className="max-h-full w-full overflow-hidden rounded-[50%] object-contain"
                alt="기본 프로필"
              />
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="imageInput" />
            <label htmlFor="imageInput" className="absolute bottom-[-4px] right-[-2px] w-[50px] cursor-pointer">
              <Image src={cameraIco} alt="프로필 변경 아이콘" />
            </label>
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <label htmlFor="nickName" className="text-lg font-bold">
              닉네임
            </label>
            <input type="text" id="nickName" className="input input-bordered w-full rounded-lg" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Actions></Modal.Actions>
    </Modal>
  );
}
