import React from 'react';

interface IProps {
  children: React.ReactNode;
};

export const Layout = ({ children }: IProps) => {
  return <div className="h-full min-h-dvh shadow-md">{children}</div>;
};
