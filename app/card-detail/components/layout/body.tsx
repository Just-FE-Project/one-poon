import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Body = ({ children }: Props) => {
  return <div className="flex flex-col pt-6">{children}</div>;
};
