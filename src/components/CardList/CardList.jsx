import CardOverview from './CardOverview';
import styles from './CardList.module.scss';
import ButtonArrow from '../Button/ButtonArrow/ButtonArrow';
// import ArrowLeft from '../../assets/svg/ArrowLeft';
// import ArrowRight from '../../assets/svg/ArrowRight';

export default function CardList({ CardListName, recipients }) {
  // const handleNextLoad

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{CardListName}</h1>
      <div className={styles.content}>
        {recipients &&
          recipients.map((recipient) => (
            <CardOverview key={recipient.id} recipient={recipient} />
          ))}
        <ButtonArrow className={styles.leftBtn} direction={'left'} />
        <ButtonArrow className={styles.rightBtn} direction={'right'} />
      </div>
    </section>
  );
}

CardList;
