import { AppBar } from '@/shared/components/app-bar/appBar';
import { Modal } from '@/shared/components/modal/modal';

interface IProps {
  isModalOpen: boolean;
  handleModalClose: () => void;
}

export function ProfileEditModal({ isModalOpen, handleModalClose }: IProps) {
  return (
    <Modal open={isModalOpen} position="middle" boxStyle="w-full h-full max-h-fit rounded-none">
      <Modal.Header>
        <AppBar
          centerChildren={'프로필 수정'}
          rightChildren={<button onClick={() => handleModalClose()}>완료</button>}
        />
      </Modal.Header>
      <Modal.Body>모달 내용</Modal.Body>
      <Modal.Actions></Modal.Actions>
    </Modal>
  );
}
