import { ActivityMissionZone } from './features/activityMissionZone';
import { BudgetTracker } from './features/budgetTracker';
import { ProfileInfo } from './features/ProfileInfo';
import { UserPostsList } from './features/userPostsList';

export default function MyPage() {
  return (
    <>
      <header></header>
      <ProfileInfo />
      <div className="h-1 w-full bg-gray-200"></div>
      <BudgetTracker />
      <div className="h-1 w-full bg-gray-200"></div>
      <ActivityMissionZone title="티끌 모아 태산" />
      <div className="h-1 w-full bg-gray-200"></div>
      <UserPostsList />
    </>
  );
}
