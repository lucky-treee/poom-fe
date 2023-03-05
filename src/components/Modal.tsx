import React from 'react';
import ReactDom from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { open, onClose, children } = props;

  const modalRoot = document.querySelector('#modal');

  if (!modalRoot) return null;

  const handleModalClose = () => onClose && onClose();

  const stopPropagateChildEvent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return ReactDom.createPortal(
    <div
      className={`absolute top-0 left-0 overflow-hidden w-screen h-screen flex justify-center items-center z-50 bg-[#00000040] ${
        open ? '' : 'hidden'
      }`}
      onClick={handleModalClose}
    >
      <div onClick={stopPropagateChildEvent}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
