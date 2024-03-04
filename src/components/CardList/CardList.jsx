import CardOverview from './CardOverview';
import styles from './CardList.module.scss';
import ButtonArrow from '../Button/ButtonArrow/ButtonArrow';
import { useRef, useState } from 'react';

export default function CardList({ CardListName, recipients }) {
  const LIMIT = 4;
  const [offset, setOffset] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [isPrev, setIsPrev] = useState(false);
  const myRef = useRef(null);
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

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{CardListName}</h1>
      <div className={styles.content} ref={myRef}>
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

CardList;
