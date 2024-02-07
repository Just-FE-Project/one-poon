'use client';

import { Button } from '@/shared/components/button/button';
import { Loading } from '@/shared/components/loading/loading';
import { Avatar } from '@/shared/components/avatar/avatar';
import Badge from '@/shared/components/badge/badge';
import { useState } from 'react';
import { Modal } from '@/shared/components/modal/modal';
import Divider from '@/shared/components/divider/divider';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      {/* 버튼테스트 */}
      <Button className="btn-primary">Primary</Button>
      <Divider />
      {/* 로딩 스피너 테스트 */}
      <Loading color={'primary'} size={'lg'} />
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
      <Avatar letters="user1" color="primary" border online shape="circle" />
      <br />
      <Avatar color="secondary" border offline shape="square">
        <span>user2</span>
      </Avatar>
      <Divider />

      {/* 배지 테스트 */}
      <Badge className="badge-secondary">배지</Badge>
      <br />
      <Button>
        Inbox
        <Badge className="badge-secondary">배지</Badge>
      </Button>
      <Divider />
      {/* 모달 사용 테스트 */}
      <button className="btn" onClick={() => setIsModalOpen(true)}>
        모달 열기
      </button>
      <Modal isOpen={isModalOpen} position="middle">
        <Modal.Header>모달 제목</Modal.Header>
        <Modal.Body>모달 내용</Modal.Body>
        <Modal.Actions>
          <button className="btn" onClick={() => setIsModalOpen(false)}>
            닫기
          </button>
        </Modal.Actions>
      </Modal>
      <Divider />
    </main>
  );
}
