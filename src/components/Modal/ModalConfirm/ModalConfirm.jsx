import { forwardRef, useImperativeHandle, useState } from 'react';
import styles from './ModalConfirm.module.scss';
import Modal from '../Modal';
import { Button } from '../../Button';

const ModalConfirm = forwardRef(({ message, onClick }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        open,
        close,
      };
    },
    [],
  );

  const handleClick = async () => {
    if (typeof onClick === 'function') {
      await onClick();
    }
    close();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal close={close}>
      <div className={styles.container}>
        <div className={styles.body}>{message}</div>
        <div className={styles.footer}>
          <Button size="sm" onClick={handleClick}>
            확인
          </Button>
          <Button size="sm" styleType="outlined56" onClick={close}>
            취소
          </Button>
        </div>
      </div>
    </Modal>
  );
});

ModalConfirm.displayName = 'ModalConfirm';

export default ModalConfirm;
