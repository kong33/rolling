import logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';

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
          <div className={`${styles.shareBtn} ${styles.btn}`}>sharing</div>
        </section>
      </nav-bottom>
    </header>
  );
}

export default Header;
