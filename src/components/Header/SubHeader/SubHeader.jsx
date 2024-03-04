import ArrowDown from '../../../assets/svg/ArrowDown.jsx';
import Add24 from '../../../assets/svg/Add24.jsx';
import Share24 from '../../../assets/svg/Share24.jsx';
import styles from './SubHeader.module.scss';
import { useRef, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Toast from '../../../components/Toast/Toast';
import Button from '../../Button/Button/Button.jsx';
import handleShareKakao from '../../../utils/handleShareKakao';
import Reactions from '../../CardList/Reactions.jsx';
import { LoadingPage } from '../../../pages/LoadingPage';

export default function SubHeader() {
  // Toast 팝업 상태 관리
  const [toast, setToast] = useState(false);

  // Emozi 토글 상태 관리
  const [showEmozi, setShowEmozi] = useState(false);

  // 공유 버튼 토글 상태 관리
  const [showShare, setShowShare] = useState(false);

  // 토글 박스 DOM 참조용 Ref
  const showEmoziRef = useRef();
  const showShareRef = useRef();

  // Recipient 데이터
  const { data, isLoading } = useFetch('/2-7/recipients/2304/');

  // 데이터 로드 이후에 렌더링
  if (isLoading || !data) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  const { name, messageCount, topReactions, recentMessages } = data;

  // URL 공유 핸들러 함수
  const handleShareURL = () => {
    // 클립보드에 URL 복사
    navigator.clipboard.writeText(window.location.href);
    // Toast 상태 변경
    setToast(true);
  };

  // Emozi 토글 핸들러 함수
  const handleToggleEmozi = () => {
    if (!showEmozi) {
      showEmoziRef.current.style.display = 'block';
      setShowEmozi(true);
    } else {
      showEmoziRef.current.style.display = 'none';
      setShowEmozi(false);
    }
  };

  // 공유 버튼 토글 핸들러 함수
  const handleToggleShare = () => {
    if (!showShare) {
      showShareRef.current.style.display = 'block';
      setShowShare(true);
    } else {
      showShareRef.current.style.display = 'none';
      setShowShare(false);
    }
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
          <div className={styles.profileImageContainer}>
            {recentMessages.map((sender, i) => (
              <img
                className={`${styles[`visitorImage-${i + 1}`]}`}
                key={sender.id}
                src={sender.profileImageURL}
              />
            ))}
            <div className={styles.visitorCount}>+{messageCount - 3}</div>
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
          <div className={styles.toggleBtn} onClick={handleToggleEmozi}>
            <ArrowDown />
          </div>
          {/* 이모지 토글 박스 */}
          <div
            className={`${styles.showEmozi} ${styles.toggleBox}`}
            ref={showEmoziRef}
          >
            <div className={styles.row}>
              <div className={styles.emoziBtn}>👍24</div>
              <div className={styles.emoziBtn}>👍24</div>
              <div className={styles.emoziBtn}>👍24</div>
              <div className={styles.emoziBtn}>👍24</div>
            </div>
            <div className={styles.row}>
              <div className={styles.emoziBtn}>👍24</div>
              <div className={styles.emoziBtn}>👍24</div>
              <div className={styles.emoziBtn}>👍24</div>
              <div className={styles.emoziBtn}>👍24</div>
            </div>
          </div>
          {/* 이모지 추가 버튼 */}
          <Button
            type="button"
            styleType="outlined36"
            className={`${styles.addEmoziBtn} ${styles.btn}`}
          >
            <Add24 />
            추가
          </Button>
          <div className={styles.line}></div>
          {/* 공유 토글 버튼 */}
          <div onClick={handleToggleShare}>
            <Button type="button" styleType="outlined36">
              <Share24 />
            </Button>
          </div>

          {/* 공유 토글 박스 */}
          <div
            className={`${styles.showShare} ${styles.toggleBox}`}
            ref={showShareRef}
          >
            <div className={styles.shareBox} onClick={handleShareKakao}>
              카카오톡 공유
            </div>
            <div className={styles.shareBox} onClick={handleShareURL}>
              URL 공유
            </div>
          </div>
          {toast && <Toast setToast={setToast} />}
        </section>
      </nav>
    </header>
  );
}
