import { Button } from '@/shared/components/button/button';
import { Loading } from '@/shared/components/loading/loading';
import { Avatar } from '@/shared/components/avatar/avatar';
import Badge from '@/shared/components/badge/badge';

export default function Home() {
  return (
    <main>
      {/* 버튼테스트 */}
      <Button className="btn-primary">Primary</Button>
      <div className="my-10"></div>
      {/* 로딩 스피너 테스트 */}
      <Loading color={'primary'} size={'lg'} />
      <Loading variant={'ball'} color={'secondary'} size={'lg'} />
      <br />
      <Loading variant={'dots'} size={'lg'} />
      <br />
      <Loading variant={'ring'} size={'lg'} />
      <br />
      <br />
      {/* 아바타 테스트 */}
      <div className="my-10"></div>

      <Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <br />
      <Avatar letters="user1" color="primary" border online shape="circle" />
      <br />
      <Avatar color="secondary" border offline shape="square">
        <span>user2</span>
      </Avatar>
      {/* 배지 테스트 */}
      <div className="my-10"></div>
      <Badge className="badge-secondary">배지</Badge>

      <Button>
        Inbox
        <Badge className="badge-secondary">배지</Badge>
      </Button>
    </main>
  );
}
