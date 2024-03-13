import styles from './CardPostList.module.scss';
import { ButtonPlus } from '../Button';

function CardPlus({ onAdd }) {
  return (
    <article className={styles.cardPost}>
      <ButtonPlus className={styles.plusIcon} onClick={onAdd} />
    </article>
  );
}

export default CardPlus;
