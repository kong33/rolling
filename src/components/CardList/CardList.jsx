import CardOverview from './CardOverview';
import styles from './CardList.module.scss';

export default function CardList({ CardListName, recipients }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{CardListName}</h1>
      <div className={styles.content}>
        {recipients.map((recipient) => (
          <CardOverview key={recipient.id} recipient={recipient} />
        ))}
      </div>
    </section>
  );
}
