import CardOverview from './CardOverview';
import styles from './Carousel.module.scss';
import ButtonArrow from '../Button/ButtonArrow/ButtonArrow';
import { useEffect, useRef, useState } from 'react';

export default function Carousel({ CardListName, recipients }) {
  const [moveWidth, setMoveWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${moveWidth}px)`;
    }
  }, [moveWidth]);

  const handleNext = () => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.getBoundingClientRect().x;
      setMoveWidth(moveWidth + carouselWidth);
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{CardListName}</h1>
      <div className={styles.content} ref={carouselRef}>
        {recipients &&
          recipients.map((recipient) => (
            <CardOverview key={recipient.id} recipient={recipient} />
          ))}
        <ButtonArrow
          className={styles.rightBtn}
          direction={'right'}
          onClick={() => handleNext()}
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
