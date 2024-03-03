import style from './CardPost.module.scss';
import deleteIcon from '../../assets/images/deleted.svg';

function CardEdit({ item, editDelete }) {
  return (
    <article className={style.cardPost}>
      {/* 카드프로필 */}
      <div className={style.cardProfileBox}>
        <div className={style.cardProfile}>
          <img className={style.cardImage} src={item.profileImageURL} />
          <div className={style.cardInfo}>
            <div className={style.cardName}>
              <p>
                From.<span>{item.sender}</span>
              </p>
            </div>
            <div className={style.cardBadge}>
              <p>{item.relationship}</p>
            </div>
          </div>
        </div>

        <button className={style.deleteIcon} onClick={() => editDelete()}>
          <img src={deleteIcon} alt="휴지통 이미지" />
        </button>
      </div>

      {/* 카드내용 */}
      <div className={style.cardContentBox}>
        <div className={style.cardContent}>
          <p>{item.content}</p>
        </div>
        <p className={style.cardDate}>{item.createdAt}</p>
      </div>
    </article>
  );
}

export default CardEdit;
