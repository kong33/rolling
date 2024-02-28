import logo from '../../assets/images/logo.svg';
import styles from './Header.module.scss';

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
  return (
    <header>
      <nav-top>
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={styles.btn}>롤링 페이퍼 만들기</div>
      </nav-top>
      <nav-bottom>
        <section>
          <div className={styles.toName}>To. Ashley Kim</div>
        </section>
        <section>
          <div className={styles.postNumbers}>23명이 작성했어요!</div>
          <div className={styles.emoziBtns}>이모지s</div>
          <div className={`${styles.addEmoziBtn} ${styles.btn}`}>:) 추가</div>
          <div
            className={`${styles.shareBtn} ${styles.btn}`}
            onClick={handleShareKakao}
          >
            Kakao 공유
          </div>
        </section>
      </nav-bottom>
    </header>
  );
}

export default Header;
