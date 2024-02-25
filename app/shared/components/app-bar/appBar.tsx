import React from 'react';

type Props = {
  leftChildren?: React.ReactNode;
  centerChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
};

export const AppBar = ({ leftChildren, centerChildren, rightChildren }: Props) => {
  return (

    <div className="navbar fixed left-0 top-0 mt-1 justify-between bg-base-100 px-4 shadow-md">
      {leftChildren}
      {centerChildren}
      {rightChildren}
    </div>
  );
};