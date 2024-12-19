'use client';

import { ReactNode, useRef, useEffect } from 'react';
import './Dialog.css';

export type DialogProps = {
  children?: ReactNode;
};

export default function Dialog({ children }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    dialogRef.current?.close();
  };

  const handleShow = () => {
    // Fallback for browsers that don't support View Transitions:
    if (!document.startViewTransition) {
      dialogRef.current?.showModal();
      return;
    }

    // With View Transitions:
    const transition = document.startViewTransition(() => dialogRef.current?.showModal());
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    const handleBackdropClick = (event: MouseEvent) => {
      if (dialog && event.target === dialog) {
        handleClose();
      }
    };

    dialog?.addEventListener('click', handleBackdropClick);
    return () => {
      dialog?.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  return (
    <>
      <dialog id="dialog" className="dialog" ref={dialogRef}>
        {children}
        {/* <button className="close" onClick={handleClose}>
          close
        </button> */}
      </dialog>

      <div className="cursor-pointer" onClick={handleShow}>
        {children}
      </div>
    </>
  );
}
