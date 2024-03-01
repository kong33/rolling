import Logo from '../../assets/svg/Logo.jsx';
import ArrowDown from '../../assets/svg/ArrowDown.jsx';
import Add24 from '../../assets/svg/Add24.jsx';
import Share24 from '../../assets/svg/Share24.jsx';
import styles from './Header.module.scss';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Toast from '../../components/Toast/Toast';
import Button from '../Button/Button/Button.jsx';

// 카카오톡 공유 핸들러 함수
const handleShareKakao = () => {
  window.Kakao.Share.sendCustom({
    templateId: 104815,
    templateArgs: {
      title: 'Rolling Paper로 마음을 전해봐요',
      description: '평상시 고마웠던 지인에게 마음을 표현해봐요',
    },
  });
};

function Header() {
  // Emozi 데이터 받아오기
  const reactionData = useFetch(
    '/2-7/recipients/2304/reactions/?limit=3',
  ).results;

  console.log(reactionData);
  // Toast 팝업 상태 관리
  const [toast, setToast] = useState(false);

  // 토글 박스 DOM 참조용 Ref
  const showEmoziRef = useRef();
  const showShareRef = useRef();

  // URL 공유 핸들러 함수
  const handleShareURL = () => {
    // 클립보드에 URL 복사
    navigator.clipboard.writeText(window.location.href);
    // Toast 상태 변경
    setToast(true);
  };

  // Emozi 토글 핸들러 함수
  const handleToggleEmozi = (e) => {
    e.target.classList.toggle('isOpen');

    const isOpen = e.target.classList.contains('isOpen');

    if (isOpen) {
      showEmoziRef.current.style.display = 'block';
    } else {
      showEmoziRef.current.style.display = 'none';
    }
  };

  // 공유 버튼 토글 핸들러 함수
  const handleToggleShare = (e) => {
    e.target.classList.toggle('isOpen');

    const isOpen = e.target.classList.contains('isOpen');

    if (isOpen) {
      showShareRef.current.style.display = 'block';
    } else {
      showShareRef.current.style.display = 'none';
    }
  };

  return (
    <header className={styles.header}>
      {/* 상단 Nav바 */}
      <nav className={styles.topNav}>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Link to="/post">
          <Button type="button" styleType="outlined40" className={styles.btn}>
            롤링 페이퍼 만들기
          </Button>
        </Link>
      </nav>
      <hr className={styles.line} />
      {/* 하단 Nav바 */}
      <nav className={styles.bottomNav}>
        {/* To. 000 */}
        <section className={styles.section}>
          <div className={styles.toName}>To. Ashley Kim</div>
        </section>
        <section className={styles.section}>
          {/* 00명이 작성했어요 */}
          <div className={styles.postNumbers}>23명이 작성했어요!</div>
          <div className={styles.line}></div>
          {/* 이모지 상위 3개 보여주기 */}
          <div className={styles.emoziBtns}>
            <div className={styles.emoziBtn}>👍24</div>
            <div className={styles.emoziBtn}>😍16</div>
            <div className={styles.emoziBtn}>🎉10</div>
          </div>
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
            <Button
              type="button"
              styleType="outlined36"
              className={`${styles.shareBtn} ${styles.btn}`}
            >
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

export default Header;
