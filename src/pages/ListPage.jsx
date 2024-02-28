import CardList from '../components/CardList/CardList.jsx';
import Header from '../components/Header/Header.jsx';

function ListPage() {
  return (
    <>
      <Header />
      <CardList CardName={'인기 롤링 페이퍼 🔥'} />
      <CardList CardName={'최근에 만든 롤링 페이퍼 💜'} />
      {/* 버튼 추가 예정 */}
    </>
  );
}

export default ListPage;
