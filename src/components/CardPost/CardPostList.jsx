import styles from './CardPostList.module.scss';
import CardPlus from './CardPlus';
import CardPost from './CardPost';

function CardPostList({ items, onDelete, onAdd }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardList}>
        {onDelete || <CardPlus onAdd={onAdd} />}
        {items?.map((item) => (
          <CardPost key={item.id} item={item} onDelete={onDelete} /> //빨간색 에러 해결
        ))}
      </div>
    </div>
  );
}

export default CardPostList;
