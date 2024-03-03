import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

function ModalPortal({ children }) {
  return createPortal(children, document.getElementById('modal'));
}

function Modal({ close, children }) {
  const modalRef = useRef(null);

  useClickOutside(modalRef, close);

  return (
    <ModalPortal>
      <div className={styles.overlay}>
        <div className={styles.modal} ref={modalRef}>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}

export default Modal;
