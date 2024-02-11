import { forwardRef, PropsWithChildren } from 'react';

import { cn } from '@/shared/utils/className';
interface IProps extends PropsWithChildren {
  className?: string;
  position?: 'top' | 'bottom' | 'middle';
  open?: boolean;
}
const ModalComponent = forwardRef<HTMLDialogElement, IProps>(
  ({ children, open, position = 'middle', className }, ref) => {
    const classes = cn('modal', className, {
      'modal-top': position === 'top',
      'modal-bottom': position === 'bottom',
      'modal-middle': position === 'middle',
      'modal-open': open
    });
    return (
      <dialog aria-label="Modal" open={open} aria-modal={open} className={classes} ref={ref}>
        <div className="modal-box">{children}</div>
      </dialog>
    );
  }
);
ModalComponent.displayName = 'ModalComponent';
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
export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions
});
