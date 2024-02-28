import logo from '../../assets/images/logo.svg';
import arrowDown from '../../assets/images/arrow_down.svg';
import add24 from '../../assets/images/add-24.svg';
import share24 from '../../assets/images/share-24.svg';
import styles from './Header.module.scss';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const handleShareKakao = () => {
  window.Kakao.Share.sendCustom({
    templateId: 104815,
    templateArgs: {
      title: 'Rolling Paper로 마음을 전해봐요',
      description: '평상시 고마웠던 지인에게 마음을 표현해봐요',
    },
  });
};

const handleShareURL = () => {
  navigator.clipboard.writeText(window.location.href);
};

function Header() {
  const showEmoziRef = useRef();
  const showShareRef = useRef();

  const handleToggleEmozi = (e) => {
    e.target.classList.toggle('isOpen');

    console.log(e.target.classList.value);

    const isOpen = e.target.classList.contains('isOpen');

    if (isOpen) {
      showEmoziRef.current.style.display = 'block';
    } else {
      showEmoziRef.current.style.display = 'none';
    }
  };

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
    <header>
      <nav-top>
        <div>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <Link to="/post">
          <div className={styles.btn}>롤링 페이퍼 만들기</div>
        </Link>
      </nav-top>
      <nav-bottom>
        <section>
          <div className={styles.toName}>To. Ashley Kim</div>
        </section>
        <section>
          <div className={styles.postNumbers}>23명이 작성했어요!</div>
          <div className={styles.line}></div>
          <div className={styles.emoziBtns}>
            <div className={styles.emoziBtn}>👍24</div>
            <div className={styles.emoziBtn}>😍16</div>
            <div className={styles.emoziBtn}>🎉10</div>
          </div>
          <div className={styles.toggleBtn}>
            <img onClick={handleToggleEmozi} src={arrowDown} alt="arrow-down" />
          </div>
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
          <div className={`${styles.addEmoziBtn} ${styles.btn}`}>
            <img src={add24} alt="add-24" />
            추가
          </div>
          <div className={styles.line}></div>
          <div className={`${styles.shareBtn} ${styles.btn}`}>
            <img onClick={handleToggleShare} src={share24} alt="share btn" />
          </div>
          <div
            className={`${styles.showShare} ${styles.toggleBox}`}
            ref={showShareRef}
          >
            <div className={styles.shareKakao} onClick={handleShareKakao}>
              카카오톡 공유
            </div>
            <div className={styles.shareURL} onClick={handleShareURL}>
              URL 공유
            </div>
          </div>
        </section>
      </nav-bottom>
    </header>
  );
}

export default Header;
