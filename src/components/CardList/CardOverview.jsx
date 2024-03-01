import Reactions from './Reactions.jsx';
import styles from './CardOverview.module.scss';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch.js';

const CardOverview = ({ recipient }) => {
  const [senders, setSenders] = useState([]);
  const data = useFetch(`/2-7/recipients/${recipient.id}/`).recentMessages;

  useEffect(() => {
    if (data) {
      setSenders(data);
    }
  }, [data]);

  useEffect(() => {
    if (senders.length > 0) {
      // senders 배열이 업데이트되었을 때 senders를 createdAt 기준으로 정렬합니다.
      const sortedSenders = [...senders].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

      // 상위 3개의 sender를 선택합니다.
      const senderPreview = sortedSenders.slice(0, 3);

      // 선택된 sender를 상태에 설정합니다.
      setSenders(senderPreview);
    }
  }, [senders]);

  return (
    <article className={styles.content}>
      <div className={styles.profile}>
        <h1 className={styles.name}>To. {recipient.name}</h1>
        <div className={styles.profileImageContainer}>
          {senders.map((item) => (
            <img
              className={styles.profileImage}
              key={item.id}
              src={item.profileImageURL}
            />
          ))}
        </div>
        <p className={styles.text}>
          <span className={styles.count}>{recipient.messageCount}명</span>이
          작성했어요!
        </p>
      </div>
      <div>
        <Reactions Reactions={recipient.topReactions} />
      </div>
    </article>
  );
};

export default CardOverview;
