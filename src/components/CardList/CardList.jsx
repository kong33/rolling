import { useEffect, useState } from 'react';
import CardOverview from './CardOverview.jsx';
import styles from './CardList.module.scss';
import useFetch from '../../hooks/useFetch.js';
import arrowLeft from '../../assets/images/arrow_left.svg';
import arrowRight from '../../assets/images/arrow_right.svg';

const CardList = ({ CardListName }) => {
  const data = useFetch('/2-7/recipients/').results;
  const [recipients, setRecipients] = useState([]);
  const sortedRecipients = recipients.sort(
    (a, b) => b.messageCount - a.messageCount,
  );
  const top4Recipients = sortedRecipients.filter((item, i) => i < 4 && item);

  // 4개만 렌더링하기
  // 버튼 클릭하면 다음거 렌더링하기
  // 조건은 생성일자와 messageCount

  useEffect(() => {
    if (data) {
      setRecipients(data);
    }
  }, [data]);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{CardListName}</h1>
      <div className={styles.content}>
        {top4Recipients.map((recipient) => (
          <CardOverview key={recipient.id} recipient={recipient} />
        ))}
        <img className={styles.arrowLeft} src={arrowLeft} />
        <img className={styles.arrowRight} src={arrowRight} />
      </div>
    </section>
  );
};

export default CardList;
