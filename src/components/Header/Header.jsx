import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="header-btn">롤링 페이퍼 만들기</div>
      </header>
    </>
  );
}

export default Header;
