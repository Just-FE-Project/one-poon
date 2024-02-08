import { InputHTMLAttributes } from 'react';

import { classVarianceAuthority, cn, type VariantProps } from '@/shared/utils/className';

const InputVariants = classVarianceAuthority('input', {
  variants: {
    variant: {
      bordered: 'input-bordered',
      ghost: 'input-ghost'
    },
    size: {
      xs: 'input-xs',
      sm: 'input-sm',
      md: 'input-md',
      lg: 'input-lg'
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'bordered'
  }
});

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof InputVariants> {
  label?: string;
}

const Input = ({ id, label, className, variant, size, ...props }: IProps) => {
  return (
    <label className="form-control w-full max-w-xs" htmlFor={id}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input className={cn(InputVariants({ size, variant }), className)} id={id} {...props} />
    </label>
  );
};

export default Input;
