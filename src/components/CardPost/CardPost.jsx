import styles from './CardPostList.module.scss';
import Deleted from '../../assets/svg/Deleted';
import { formatDate } from '../../utils/dateFormatter';

function CardPost({ item, onDelete }) {
  const { id, profileImageURL, sender, relationship, content, createdAt } =
    item;

  return (
    <article className={styles.cardPost}>
      {/* 카드프로필 */}
      <div className={styles.cardProfileBox}>
        <div className={styles.cardProfile}>
          <img className={styles.cardImage} src={profileImageURL} />
          <div className={styles.cardInfo}>
            <div className={styles.cardName}>
              <p>
                From.<span>{sender}</span>
              </p>
            </div>
            <div className={styles.cardBadge}>
              <p>{relationship}</p>
            </div>
          </div>
        </div>

        {typeof onDelete === 'function' && (
          // 실제로 삭제 버튼을 누른 CardPost를 알 수 있게 onDelete에 id를 넘겨줌
          <button className={styles.deleteIcon} onClick={() => onDelete(id)}>
            <Deleted />
          </button>
        )}
      </div>

      {/* 카드내용 */}
      <div className={styles.cardContentBox}>
        <div className={styles.cardContent}>
          <p>{content}</p>
        </div>
        <p className={styles.cardDate}>{formatDate(createdAt)}</p>
      </div>
    </article>
  );
}

export default CardPost;
