import { forwardRef, useImperativeHandle, useState } from 'react';
import styles from './ModalCardInfo.module.scss';
import Modal from '../Modal';
import { Button } from '../../Button';
import { Avatar } from '../../Avatar';
import { BadgeRelation } from '../../Badge';
import { formatDate } from '../../../utils/dateFormatter';

const ModalCardInfo = forwardRef(({ card }, ref) => {
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

  if (!isOpen) {
    return null;
  }

  return (
    <Modal close={close}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.info}>
            <div className={styles.profile}>
              <Avatar src={card?.profileImageURL} alt={card?.sender} />
            </div>
            <div className={styles.infoText}>
              <div className={styles.sender}>
                From. <span>{card?.sender}</span>
              </div>
              <div className={styles.relationship}>
                <BadgeRelation relationship={card?.relationship} />
              </div>
            </div>
          </div>
          <div className={styles.time}>{formatDate(card?.createdAt)}</div>
        </header>
        <div className={styles.body}>{card?.content}</div>
        <footer className={styles.footer}>
          <Button styleType="primary40" size="sm" onClick={close}>
            확인
          </Button>
        </footer>
      </div>
    </Modal>
  );
});

ModalCardInfo.displayName = 'ModalCardInfo';

export default ModalCardInfo;
