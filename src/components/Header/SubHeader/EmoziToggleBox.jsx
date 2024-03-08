import useClickOutside from '../../../hooks/useClickOutside';
import useFetch from '../../../hooks/useFetch';
import { LoadingPage } from '../../../pages/LoadingPage';
import styles from './EmoziToggleBox.module.scss';
import { useRef } from 'react';

export default function EmoziToggleBox({ team, recipientId, close }) {
  const emoziToggleBoxRef = useRef();

  useClickOutside(emoziToggleBoxRef, close);

  // Reactions 데이터
  const { data: reactionData, isLoading } = useFetch(
    `/${team}/recipients/${recipientId}/reactions/?limit=0&offset=0`,
  );

  // 데이터 로드 이후에 렌더링
  if (isLoading || !reactionData) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  const { results: reactionList } = reactionData;

  return (
    <div
      className={`${styles.showEmozi} ${styles.toggleBox}`}
      ref={emoziToggleBoxRef}
    >
      {reactionList.map((reaction) => (
        <div className={styles.emoziBtn} key={reaction.id}>
          {reaction.emoji} {reaction.count}
        </div>
      ))}
    </div>
  );
}
