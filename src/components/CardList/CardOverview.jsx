import Reactions from './Reactions';
import styles from './CardOverview.module.scss';

export default function CardOverview({ recipient }) {
  const {
    backgroundColor,
    backgroundImageURL,
    messageCount,
    name,
    topReactions,
    recentMessages: visitors,
  } = recipient;

  const bgStyle = {
    background: backgroundImageURL
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${backgroundImageURL})`
      : backgroundColor,
    color: backgroundImageURL ? '#FFF' : 'inherit',
  };

  const visitorCount = visitors.length - 3 > 0 ? visitors.length - 3 : null;

  return (
    <article className={styles.content} style={bgStyle}>
      <div className={styles.profile}>
        <h1 className={styles.name}>To. {name}</h1>
        <div className={styles.profileImageContainer}>
          {visitors.length > 0 ? (
            visitors.map((visitor, i) => (
              <img
                className={`${styles[`visitorImage-${i + 1}`]}`}
                key={visitor.id}
                src={visitor.profileImageURL}
              />
            ))
          ) : (
            <div>저는 친구가 없답니다!</div>
          )}
          {visitors.length - 3 > 0 && (
            <p className={styles.visitorCount}>+{visitorCount}</p>
          )}
        </div>
        <p className={styles.text}>
          <span className={styles.count}>{messageCount}명</span>이 작성했어요!
        </p>
      </div>
      <div>
        <Reactions reactions={topReactions} />
      </div>
    </article>
  );
}
