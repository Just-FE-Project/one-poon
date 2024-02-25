import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <div className="flex flex-col gap-10 p-4">{children}</div>;
};
