import Reactions from './Reactions.jsx';
import styles from './CardOverview.module.scss';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch.js';

const CardOverview = ({ recipient }) => {
  const [senders, setSenders] = useState([]);
  const data = useFetch(`/2-7/recipients/${recipient.id}/`).recentMessages;

  useEffect(() => {
    // 데이터 로딩이 완료되면 senders 배열로 업데이트
    if (data) {
      setSenders(data);
    }
  }, [data]);

  useEffect(() => {
    if (senders.length > 0) {
      // senders 배열이 업데이트되었을 때 senders를 createdAt 기준으로 정렬
      const sortedSenders = [...senders].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

      const senderPreview = sortedSenders.filter((item, i) => i < 3 && item);

      // 선택된 sender를 상태에 설정합니다.
      setSenders(senderPreview);
    }
    // 아래 dependency값에서 에러가나는데 어떤값을 넣어야할지 모르겠습니다.
    // sender를 넣으면 무한호출됨
  }, []);

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
          {/* 표현된 profileImege를 제외한 나머지 인원을 count로 추가 렌더링 필요 */}
          {/* profileImageContainer의 요소들이 reative하게 16xp 간격으로 곂쳐진 style 추가 필요 */}
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
