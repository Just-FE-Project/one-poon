'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Avatar } from '@/shared/components/avatar/avatar';
import Badge from '@/shared/components/badge/badge';
import { Button } from '@/shared/components/button/button';
import Divider from '@/shared/components/divider/divider';
import { Loading } from '@/shared/components/loading/loading';
import { Modal } from '@/shared/components/modal/modal';

import WriteModal from './list/WriteModal';
import { Chip, Chips } from './shared/components/chips/chips';
import { ProgressBar } from './shared/components/progress-bar/progressBar';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
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

  // 다빈 - 지웅이랑 합치기 전이라 버튼 임시로 만들어서 뷰 그림
  const handleWriteModal = () => {
    setIsWriteModalOpen(false);
  };

  return (
    <main>
      {/* 버튼테스트 */}
      <Button size="wide" className="btn-primary" disabled>
        Primary
      </Button>
      <Divider />
      {/* 로딩 스피너 테스트 */}
      <Loading color={'neutral'} size={'lg'} />
      <Loading variant={'ball'} color={'secondary'} size={'lg'} />
      <br />
      <Loading variant={'dots'} size={'lg'} />
      <br />
      <Loading variant={'ring'} size={'lg'} />
      <br />
      <Divider />
      {/* 아바타 테스트 */}

      <Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <br />
      <Avatar letters="user1" color="primary" online shape="circle" />
      <br />
      <Avatar color="secondary" border offline shape="square">
        <span>user2</span>
      </Avatar>
      <Divider />

      {/* 배지 테스트 */}
      <Badge color="primary">배지</Badge>
      <br />
      <Button>
        Inbox
        <Badge color="info">배지</Badge>
      </Button>
      <Divider />
      {/* 모달 사용 테스트 */}
      <button className="btn" onClick={() => setIsModalOpen(true)}>
        모달 열기
      </button>
      <Link href="/card-detail">카드 상세</Link>
      <Modal open={isModalOpen} position="middle">
        <Modal.Header>모달 제목</Modal.Header>
        <Modal.Body>모달 내용</Modal.Body>
        <Modal.Actions>
          <button className="btn" onClick={() => setIsModalOpen(false)}>
            닫기
          </button>
        </Modal.Actions>
      </Modal>
      <Divider />
      {/* Chips 테스트 */}
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 justify-start py-12">
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
          </div>
        </div>
      </div>
      <Divider />

      <div>dabin test</div>

      <button className="btn" onClick={() => setIsWriteModalOpen(true)}>
        모달 열기
      </button>
      <WriteModal open={isWriteModalOpen} onClick={handleWriteModal} />

    </main>
  );
}
