import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <div className="m-auto h-full min-h-dvh w-1/3 shadow-md">{children}</div>;
};
