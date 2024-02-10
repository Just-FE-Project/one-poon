import { InputHTMLAttributes } from 'react';

import { ComponentSize } from '@/shared/types/component';
import { cn } from '@/shared/utils/className';

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: ComponentSize;
  variant?: 'bordered' | 'ghost';
}

const Input = ({ id, label, className, variant = 'bordered', size = 'md', ...props }: IProps) => {
  const classes = cn('input', className, {
    'input-xs': size === 'xs',
    'input-sm': size === 'sm',
    'input-md': size === 'md',
    'input-lg': size === 'lg',
    'input-bordered': variant === 'bordered',
    'input-ghost': variant === 'ghost'
  });
  return (
    <label className="form-control w-full max-w-xs" htmlFor={id}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input className={classes} id={id} {...props} />
    </label>
  );
};

export default Input;
