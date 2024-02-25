import { Modal } from '@/shared/components/modal/modal';

type Props = {
  open: boolean;
  onClick: () => void;
};

const THEME_LIST = ['합리적 소비', '멍청비용', '자린고비'];
const ThemeModal = ({ open, onClick }: Props) => {
  return (
    <Modal open={open} boxStyle="max-w-[768px] fixed bottom-0">
      <Modal.Header>
        게시글의 주제를 선택해주세요
        <span onClick={onClick} className="cursor-pointer">
          {' '}
          X
        </span>
      </Modal.Header>
      <Modal.Body>
        {THEME_LIST.map((theme, i) => (
          <li key={`${theme}-${i}`}>{theme}</li>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default ThemeModal;
