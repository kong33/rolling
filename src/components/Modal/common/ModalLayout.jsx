import styles from './ModalLayout.module.scss';

function ModalLayOut({ children }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}

export default ModalLayOut;
