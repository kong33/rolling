import style from './CardPostList.module.scss';
import CardPost from './CardPost';

function CardPostList({ items }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardList}>
        {items?.map((item) => (
          <CardPost key={item.id} item={item} /> //빨간색 에러 해결
        ))}
      </div>
    </div>
  );
}

export default CardPostList;
