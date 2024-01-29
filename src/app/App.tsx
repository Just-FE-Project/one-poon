import { useState } from 'react';

import viteLogo from '/vite.svg';
import Modal from '@/shared/components/modal/modal';

function App() {
  const [count, setCount] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank" rel="noreferrer"></a>
      </div>

      <h1>Vite + React</h1>

      <div className="bold-20-title card h-[200px] bg-primary-normal">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

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
    </>
  );
}

export default App;
