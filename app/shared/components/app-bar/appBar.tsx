import React from 'react';

interface IProps {
  leftChildren?: React.ReactNode;
  centerChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  leftClassName?: string;
}

export const AppBar = ({ leftChildren, centerChildren, rightChildren, leftClassName }: IProps) => {
  return (
    <div
      // className={`navbar fixed top-0 w-[768px] -translate-x-[1px] justify-between bg-base-100 px-4 shadow-sm ${leftClassName}`}>
      className={`navbar fixed top-0 w-[100%] -translate-x-[1px] justify-between bg-base-100 px-4 shadow-sm ${leftClassName}`}>
      {leftChildren}
      {centerChildren}
      {rightChildren}
    </div>
  );
};
