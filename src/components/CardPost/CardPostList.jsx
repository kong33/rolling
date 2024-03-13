import styles from './CardPostList.module.scss';
import CardPlus from './CardPlus';
import CardPost from './CardPost';

function CardPostList({ items, onDelete, onAdd, onClick }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardList}>
        {onAdd && <CardPlus onAdd={onAdd} />}
        {items?.map((item) => (
          <CardPost
            key={item.id}
            item={item}
            onDelete={onDelete}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default CardPostList;
