import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: IProps) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};
