import CardOverview from './CardOverview';

// ListPage에서는 CardList component를 두번 렌더링 - 인기 롤링페이퍼, 최근에 만든 롤링 페이퍼
const CardList = (CardListName) => {
  return (
    <section>
      <h1>{CardListName}</h1>
      <div>
        <CardOverview />
        {/* CardOverview 조건부 렌더링 추가 예정 */}
      </div>
    </section>
  );
};

export default CardList;
