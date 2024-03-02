import styles from './Reactions.module.scss';

const Reactions = ({ reactions }) => {
  // const sortedReactions = reactions.sort((a, b) => b.count - a.count);
  // const top3 = sortedReactions.filter((item, i) => i < 3 && item);

  return (
    <div className={styles.container}>
      {reactions.map((item) => (
        <div className={styles.content} key={item.id}>
          <p className={styles.emoji}>{item.emoji}</p>
          <p className={styles.count}>{item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Reactions;
