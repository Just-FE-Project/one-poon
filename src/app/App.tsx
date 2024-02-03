import { useState } from 'react';

import viteLogo from '/vite.svg';
import { Avatar } from '@/shared/components/avatar/avatar';
import Loading from '@/shared/components/loading/loading';

function App() {
  const [count, setCount] = useState(0);

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

      {/* Avatar 사용 테스트 */}
      <Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <br />
      <Avatar letters="user1" color="primary" border online shape="circle" />
      <br />
      <Avatar color="secondary" border offline shape="square">
        <span>user2</span>
      </Avatar>
      <br />
      <br />

      {/* 로딩 스피너 테스트 */}

      <Loading color={'primary'} size={'lg'} />

      <Loading variant={'ball'} color={'secondary'} size={'lg'} />

      <Loading variant={'dots'} size={'lg'} />

      <Loading variant={'ring'} size={'lg'} />
    </>
  );
}

export default App;
