import logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo"></img>
      </div>
      <div className={styles.btn}>롤링 페이퍼 만들기</div>
    </header>
  );
}

export default Header;
