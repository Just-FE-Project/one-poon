import React from 'react';

interface IProps {
  children: React.ReactNode;
};

export const Body = ({ children }: IProps) => {
  return <div className="flex flex-col pt-[80px]">{children}</div>;
};
