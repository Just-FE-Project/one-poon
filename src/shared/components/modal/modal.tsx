import { ReactNode, useState } from 'react';

interface IProps {
  children: ReactNode;
  title: string;
  openButtonText: string;
  closeButtonText: string;
  classNames?: {
    modal?: string;
    title?: string;
    closeButton?: string;
    openButton?: string;
  };
}

export const Modal = ({ children, title, openButtonText, closeButtonText, classNames }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className={`btn ${classNames?.openButton}`} onClick={openModal}>
        {openButtonText}
      </button>

      {isOpen && (
        <dialog className={`modal modal-bottom sm:modal-middle ${classNames?.modal}`} open>
          <div className="modal-box">
            <h3 className={`text-lg font-bold ${classNames?.title}`}>{title}</h3>
            <p className="py-4">{children}</p>
            <div className="modal-action">
              <button className={`btn ${classNames?.title}`} onClick={closeModal}>
                {closeButtonText}
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};
