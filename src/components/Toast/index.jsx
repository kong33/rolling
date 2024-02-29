import { useRef } from 'react';
import close from '../../assets/images/close.svg';
import completed from '../../assets/images/completed.svg';
import styles from './Toast.module.scss';

function Toast() {
  const toastRef = useRef();

  const handleQuitToast = () => {
    toastRef.current.style.display = 'none';
  };

  return (
    <div className={styles.toast} ref={toastRef}>
      <div className={styles.left}>
        <img className={styles.completedBtn} src={completed} alt="completed" />
        <p className={styles.text}>URL이 복사 되었습니다.</p>
      </div>
      <div className={styles.right}>
        <img
          className={styles.quitBtn}
          onClick={handleQuitToast}
          src={close}
          alt="close"
        />
      </div>
    </div>
  );
}

export default Toast;
