import styles from './CardPostList.module.scss';
import PlusIcon from '../../assets/svg/Plus';

function CardPlus({ cardPlus }) {
  return (
    <article className={styles.cardPost}>
      <button className={styles.plusIcon} onClick={() => cardPlus()}>
        <PlusIcon />
      </button>
    </article>
  );
}

export default CardPlus;
