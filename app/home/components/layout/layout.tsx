type TLayout = {
  children: React.ReactNode;
};

export const Layout = ({ children }: TLayout) => {
  return <div className="mt-[100px]">{children}</div>;
};
