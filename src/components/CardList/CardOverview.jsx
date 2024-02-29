import Reactions from './Reactions.jsx';
import styles from './CardOverview.module.scss';

const CardOverview = ({ recipient }) => {
  return (
    <article className={styles.content}>
      <div className={styles.profile}>
        <h1 className={styles.name}>To. {recipient.name}</h1>
        {/* 이미지들 추가 예정 - profile 3개만 보이고 나머지 count로 표시 */}
        <p className={styles.text}>
          <span className={styles.count}>{recipient.messageCount}명</span>이
          작성했어요!
        </p>
      </div>
      <div>
        <Reactions Reactions={recipient.topReactions} />
      </div>
    </article>
  );
};

export default CardOverview;
