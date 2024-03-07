import CardOverview from './CardOverview';
import styles from './Carousel.module.scss';
import ButtonArrow from '../Button/ButtonArrow/ButtonArrow';
// import { useState } from 'react';

export default function Carousel({ CardListName, recipients, handleClick }) {
  // const LIMIT = 4;
  // const [offset, setOffset] = useState(0);
  // const [isNext, setIsNext] = useState(true);
  // const [isPrev, setIsPrev] = useState(false);
  // const items = recipients.filter(
  //   (item, i) => `${offset}` <= i && i < `${offset + LIMIT}`,
  // );

  // const handleNextLoad = () => {
  //   setOffset((prevOffset) => prevOffset + 1);
  //   offset + LIMIT >= recipients.length - 1 && setIsNext(false);
  //   offset >= 0 && setIsPrev(true);
  // };

  // const handlePrevLoad = () => {
  //   setOffset((prevOffset) => prevOffset - 1);
  //   offset <= 1 && setIsPrev(false);
  //   offset < recipients.length + 1 - LIMIT && setIsNext(true);
  // };

  // const [moveWidth, setMoveWidth] = useState(0);
  // const [transform, setTransform] = useState(null);
  // const [isClickDisabled, setIsClickDisabled] = useState(false);

  // const items = [...recipients];
  // const loopNextItems = () => {
  //   const lastItem = items.shift();
  //   items.push(lastItem);
  // };

  // const handleNextCarosel = () => {
  //   setMoveWidth(-304);
  //   setTransform(`translateX(${moveWidth}px)`);
  //   setIsClickDisabled(true);

  //   setTimeout(() => {
  //     setTransform(`none`);
  //     loopNextItems();
  //     setMoveWidth(0);
  //     setIsClickDisabled(false);
  //   }, 700);
  // };

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
