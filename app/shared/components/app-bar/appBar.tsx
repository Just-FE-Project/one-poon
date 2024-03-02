import React from 'react';

interface IProps {
  leftChildren?: React.ReactNode;
  centerChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
};

export const AppBar = ({ leftChildren, centerChildren, rightChildren }: IProps) => {
  return (
    <div className="navbar fixed top-0 -translate-x-[1px] w-[768px] justify-between bg-base-100 px-4 shadow-sm">
      {leftChildren}
      {centerChildren}
      {rightChildren}
    </div>
  );
};
