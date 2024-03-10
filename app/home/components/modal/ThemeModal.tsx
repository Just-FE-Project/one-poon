import Image from 'next/image';

import rightArrow from '@/assets/arrow-right.png';

type Props = {
  open: boolean;
  onClick: () => void;
};

const THEME_LIST = ['합리적 소비', '멍청비용', '자린고비'];
const ThemeModal = ({ open, onClick }: Props) => {
  return (
    <div className="drawer z-10">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" checked={open} onChange={onClick} />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4">
          <Image src={rightArrow} width="10" height="10" alt="right arrow icon" />
        </label>
      </div>

      <div
        style={{
          transform: open ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.3s ease-in-out',
          borderRadius: '30px'
        }}
        className="fixed bottom-0 left-0 h-[20vh] w-full rounded-sm bg-base-200 p-4 text-base-content">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu">
          {THEME_LIST.map((theme, i) => (
            <li key={`${theme}-${i}`} className="mx-auto" onClick={onClick}>
              <a>{theme}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeModal;
