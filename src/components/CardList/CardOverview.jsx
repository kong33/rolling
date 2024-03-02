import Reactions from './Reactions';
import styles from './CardOverview.module.scss';

const CardOverview = ({ recipient }) => {
  const {
    backgroundColor,
    backgroundImageURL,
    messageCount,
    name,
    topReactions,
    recentMessages: visitors,
  } = recipient;

  const visitorCount = visitors.length - 3 > 0 ? visitors.length - 3 : null;

  const background = backgroundImageURL ? backgroundImageURL : backgroundColor;

  return (
    <article className={styles.content} style={{ backgroundColor: background }}>
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
            <div></div>
          )}
          {visitorCount && <p>{visitorCount}</p>}
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
};

export default CardOverview;
