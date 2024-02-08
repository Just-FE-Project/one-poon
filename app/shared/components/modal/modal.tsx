import { PropsWithChildren } from 'react';

import { classVarianceAuthority, cn, type VariantProps } from '@/shared/utils/className';

const ModalVariants = classVarianceAuthority('modal', {
  variants: {
    position: {
      top: 'modal-top',
      bottom: 'modal-bottom',
      middle: 'modal-middle'
    }
  },
  defaultVariants: {
    position: 'middle'
  }
});

interface IProps extends PropsWithChildren<VariantProps<typeof ModalVariants>> {
  isOpen: boolean;
  className?: string;
}

export const Modal = ({ children, isOpen, position, className }: IProps) => {
  if (!isOpen) return null;

  return (
    <dialog className={cn(ModalVariants({ position }), className)} open>
      <div className="modal-box">{children}</div>
    </dialog>
  );
};

interface IModalHeaderProps extends PropsWithChildren {
  className?: string;
}

const ModalHeader = ({ className, children }: IModalHeaderProps) => (
  <h3 className={cn('text-lg font-bold', className)}>{children}</h3>
);

interface IModalBodyProps extends PropsWithChildren {
  className?: string;
}

const ModalBody = ({ className, children }: IModalBodyProps) => <p className={cn('py-4', className)}>{children}</p>;

interface IModalActionsProps extends PropsWithChildren {
  className?: string;
}

const ModalActions = ({ className, children }: IModalActionsProps) => (
  <div className={cn('modal-action', className)}>{children}</div>
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Actions = ModalActions;
