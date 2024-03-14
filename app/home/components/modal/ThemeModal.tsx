import Image from 'next/image';

type Props = {
  open: boolean;
  onClick: () => void;
};

const THEME_LIST = ['합리적 소비', '멍청비용', '자린고비'];
const ThemeModal = ({ open, onClick }: Props) => {
  return (
    <div
      className={`fixed bottom-0 left-0 h-[20vh] w-full rounded-[30px] bg-base-200 p-4 text-base-content transition-transform duration-300
        ease-in-out ${open ? 'translate-y-0' : 'translate-y-full'}`}>
      <Image
        src={'/down-arrow.svg'}
        className="mx-auto my-0 cursor-pointer"
        onClick={onClick}
        width={15}
        height={15}
        alt="close icon"
      />
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu">
        {THEME_LIST.map((theme, i) => (
          <li key={`${theme}-${i}`} className="mx-auto" onClick={onClick}>
            <a>{theme}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeModal;
