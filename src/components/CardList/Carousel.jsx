import CardOverview from './CardOverview';
import styles from './Carousel.module.scss';
import ButtonArrow from '../Button/ButtonArrow/ButtonArrow';
import { useState } from 'react';

export default function Carousel({ CardListName, recipients }) {
  const LIMIT = 4;
  const [offset, setOffset] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [isPrev, setIsPrev] = useState(false);
  const items = recipients.filter(
    (item, i) => `${offset}` <= i && i < `${offset + LIMIT}`,
  );

  const handleNextLoad = () => {
    setOffset((prevOffset) => prevOffset + 1);
    offset + LIMIT >= recipients.length - 1 && setIsNext(false);
    offset >= 0 && setIsPrev(true);
  };

  const handlePrevLoad = () => {
    setOffset((prevOffset) => prevOffset - 1);
    offset <= 1 && setIsPrev(false);
    offset < recipients.length + 1 - LIMIT && setIsNext(true);
  };

  // const loopCarousel = [
  //   recipients[recipients.length - 1],
  //   ...recipients,
  //   recipients[0],
  // ];

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     handleNextLoad();
  //   }, 500);
  //   return () => clearTimeout(interval);
  // });

  // const ceroselStyle = { transform: `translateX(-304px)` };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{CardListName}</h1>
      <div className={styles.content}>
        {recipients &&
          items.map((recipient) => (
            <CardOverview key={recipient.id} recipient={recipient} />
          ))}

        {isPrev && (
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
            onClick={handleNextLoad}
          />
        )}
      </div>
    </section>
  );
}
