import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="header-btn">롤링 페이퍼 만들기</div>
      </header>
    </>
  );
}

export default Header;
