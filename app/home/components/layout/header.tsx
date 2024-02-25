import { BellRingingIcon, MagnifyingGlassIcon, UserIcon } from '@/assets';

export const Header = () => {
  return (
    <header
      className="fixed left-0 right-0 top-0 m-auto flex h-[100px] max-w-[768px] justify-between border-b border-l border-r
        border-gray-default border-b-gray-300 bg-white px-[10px] pb-2">
      <p className="flex items-end text-5xl font-bold">한푼한푼</p>
      <div className="flex items-end gap-[32px]">
        <UserIcon className="cursor-pointer" />
        <MagnifyingGlassIcon className="cursor-pointer" />
        <BellRingingIcon className="cursor-pointer" />
      </div>
    </header>
  );
};
