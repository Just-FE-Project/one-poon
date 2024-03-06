'use client';
import { ActivityMissionZone } from '@/my/features/activityMissionZone';

import { MissionProgress } from './features/missionProgress';

const tempMissionData: {
  title: string;
  type: 'money' | 'popular' | 'comment' | 'like';
  progress: {
    current: number;
    total: number;
  };
  status: 'ongoing' | 'completed';
}[] = [
  { title: '좋아요 받기', type: 'like', progress: { current: 5, total: 10 }, status: 'ongoing' },
  { title: '댓글 쓰기', type: 'comment', progress: { current: 5, total: 10 }, status: 'ongoing' },
  { title: '인기글 조회하기', type: 'popular', progress: { current: 5, total: 10 }, status: 'ongoing' },
  {
    title: '목표금액 보다 적은 소비 하기',
    type: 'money',
    progress: { current: 250000, total: 500000 },
    status: 'ongoing'
  }
];

export default function Mission() {
  return (
    <>
      <header></header>
      <div className="flex flex-col gap-4 px-4 py-10">
        <span className="text-lg font-bold">jiwoong님의 2월 활동 미션</span>
        <span className="text-md">미션을 완료하고, 더 높은 레벨로 성장하세요!</span>
      </div>
      <div className="h-1 w-full bg-gray-200"></div>
      <ActivityMissionZone size="lg"></ActivityMissionZone>
      <div className="h-1 w-full bg-gray-200"></div>
      {tempMissionData.map(mission => (
        <MissionProgress
          key={mission.title}
          title={mission.title}
          type={mission.type}
          progress={mission.progress}
          status={mission.status}
        />
      ))}
    </>
  );
}
