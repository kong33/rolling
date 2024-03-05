import Add24 from '../../../assets/svg/Add24';
import Button from '../../Button/Button/Button';
import styles from './AddEmoziBtn.module.scss';

export default function AddEmoziBtn() {
  return (
    <div>
      <Button
        type="button"
        styleType="outlined36"
        className={`${styles.addEmoziBtn} ${styles.btn}`}
      >
        <Add24 />
        추가
      </Button>
    </div>
  );
}
