import Style from './Card.module.scss';

function CardPost() {
  return (
    <article className={Style.cardBox}>
      {/* 카드프로필 */}
      <div className={Style.cardProfileBox}>
        <div className={Style.cardProfile}>
          <p className={Style.cardImage}></p>
          <div className={Style.cardInfo}>
            <div className={Style.cardName}>
              <p>From. 이름</p>
            </div>
            <div className={Style.cardBadge}>
              <p>뱃지</p>
            </div>
          </div>
        </div>
      </div>

      {/* 카드내용 */}
      <div className={Style.cardContentBox}>
        <div className={Style.cardContent}>
          <p>
            코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
            하세요!
          </p>
        </div>
        <p className={Style.cardDate}>2023.07.08</p>
      </div>
    </article>
  );
}

export default CardPost;
