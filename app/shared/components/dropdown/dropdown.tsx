import { DropDownItemListType } from '@/card-detail/types/domain';
import { VerticalDots } from '../vertical-dots/verticalDots';

interface IProps {
  itemList?: DropDownItemListType[];
  size?: 'md' | 'lg' | 'sm' | 'xs';
}

export const Dropdown = ({ size = 'md', itemList }: IProps) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 border-none bg-white shadow-none">
        <VerticalDots size={size} />
      </div>
      <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
        {itemList?.map(item => (
          <li key={item.text} onClick={item.action}>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
