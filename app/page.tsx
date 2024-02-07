import { Button } from '@/shared/components/button/button';
import { Loading } from '@/shared/components/loading/loading';
import { Avatar } from '@/shared/components/avatar/avatar';

export default function Home() {
  return (
    <main>
      {/* 버튼테스트 */}
      <Button className="btn-primary">Primary</Button>
      {/* 로딩 스피너 테스트 */}
      <Loading color={'primary'} size={'lg'} />
      <Loading variant={'ball'} color={'secondary'} size={'lg'} />
      <br />
      <Loading variant={'dots'} size={'lg'} />
      <br />
      <Loading variant={'ring'} size={'lg'} />
      <br />
      <br />
      {/* 배지 테스트 */}
      <Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <br />
      <Avatar letters="user1" color="primary" border online shape="circle" />
      <br />
      <Avatar color="secondary" border offline shape="square">
        <span>user2</span>
      </Avatar>
    </main>
  );
}
