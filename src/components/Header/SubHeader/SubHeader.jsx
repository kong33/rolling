import ArrowDown from '../../../assets/svg/ArrowDown.jsx';
import ArrowUp from '../../../assets/svg/ArrowUp.jsx';
import styles from './SubHeader.module.scss';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Reactions from '../../CardList/Reactions.jsx';
import { LoadingPage } from '../../../pages/LoadingPage';
import EmoziToggleBox from './EmoziToggleBox.jsx';
import AddEmoziBtn from './AddEmoziBtn.jsx';
import { TEAM } from '../../../constants';
import ShareToggleBtn from './ShareToggleBtn.jsx';

export default function SubHeader() {
  // Emozi 토글 상태 관리
  const [showEmozi, setShowEmozi] = useState(false);

  // 토글 박스 DOM 참조용 Ref
  const showEmoziRef = useRef();

  const { recipientId } = useParams();

  // Recipient 데이터
  const { data: recipientData, isLoading } = useFetch(
    `/${TEAM}/recipients/${recipientId}/`,
  );

  // 데이터 로드 이후에 렌더링

  if (isLoading || !recipientData) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  const { name, messageCount, topReactions, recentMessages } = recipientData;

  // Emozi 토글 핸들러 함수
  const openEmoziToggle = () => {
    showEmoziRef.current.style.display = 'block';
    setShowEmozi(true);
  };

  const closeEmoziToggle = () => {
    showEmoziRef.current.style.display = 'none';
    setShowEmozi(false);
  };

  return (
    <header>
      <nav className={styles.bottomNav}>
        {/* To. 000 */}
        <section className={styles.section}>
          <div className={styles.toName}>To. {name}</div>
        </section>
        <section className={styles.section}>
          {/* 작성자 프로필 사진 */}
          <div
            className={`${styles.profileImageContainer} ${styles[`imageCount${recentMessages.length}`]}`}
          >
            {recentMessages.map((sender, i) => (
              <img
                className={`${styles[`visitorImage-${i + 1}`]}`}
                key={sender.id}
                src={sender.profileImageURL}
              />
            ))}
            {messageCount - 3 > 0 ? (
              <div className={styles.visitorCount}>+{messageCount - 3}</div>
            ) : (
              <div></div>
            )}
          </div>
          {/* 00명이 작성했어요 */}
          <div className={styles.postNumbers}>
            <span className={styles.countBold}>{messageCount}</span>
            명이 작성했어요!
          </div>
          <div className={styles.line}></div>
          {/* 이모지 상위 3개 보여주기 */}
          <Reactions reactions={topReactions} />
          {/* 이모지 더 보기 버튼 */}
          {topReactions.length ? (
            showEmozi ? (
              <div onClick={closeEmoziToggle}>
                <ArrowUp />
              </div>
            ) : (
              <div className={styles.toggleBtn} onClick={openEmoziToggle}>
                <ArrowDown />
              </div>
            )
          ) : (
            <div></div>
          )}
          {/* 이모지 토글 박스 */}
          <div className={styles.emoziToggleBox} ref={showEmoziRef}>
            <EmoziToggleBox
              team={TEAM}
              recipientId={recipientId}
              close={closeEmoziToggle}
            />
          </div>
          {/* 이모지 추가 버튼 */}
          <AddEmoziBtn />
          <div className={styles.line}></div>
          {/* 공유 토글 박스 */}
          <ShareToggleBtn />
        </section>
      </nav>
    </header>
  );
}
