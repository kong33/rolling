import styles from './Reactions.module.scss';

export default function Reactions({ reactions }) {
  return (
    <div className={styles.container}>
      {reactions.map(({ id, emoji, count }) => (
        <div className={styles.content} key={id}>
          <p className={styles.emoji}>{emoji}</p>
          <p className={styles.count}>{count}</p>
        </div>
      ))}
    </div>
  );
}
