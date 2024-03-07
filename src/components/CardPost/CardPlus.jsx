import styles from './CardPostList.module.scss';
import PlusIcon from '../../assets/svg/Plus';

function CardPlus({ onAdd }) {
  return (
    <article className={styles.cardPost}>
      <button className={styles.plusIcon} onClick={onAdd}>
        <PlusIcon />
      </button>
    </article>
  );
}

export default CardPlus;
