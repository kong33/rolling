import CardOverview from './CardOverview';
import styles from './Carousel.module.scss';
import ButtonArrow from '../Button/ButtonArrow/ButtonArrow';

export default function Carousel({ CardListName, recipients, handleClick }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{CardListName}</h1>
      <div className={styles.content}>
        {recipients &&
          recipients.map((recipient) => (
            <CardOverview key={recipient.id} recipient={recipient} />
          ))}
        <ButtonArrow
          className={styles.rightBtn}
          direction={'right'}
          onClick={() => handleClick()}
        />
        {/* {isPrev && (
          <ButtonArrow
            className={styles.leftBtn}
            direction={'left'}
            onClick={handlePrevLoad}
          />
        )}
        {isNext && (
          <ButtonArrow
            className={styles.rightBtn}
            direction={'right'}
            onClick={() => {
              myCarousel();
            }}
          />
        )} */}
      </div>
    </section>
  );
}
