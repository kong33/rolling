import Carousel from '../../components/CardList/Carousel';
import styles from './ListPage.module.scss';
import useFetch from '../../hooks/useFetch';
import { Button } from '../../components/Button/';
import LoadingPage from '../LoadingPage/LoadingPage';
import CardList from '../../components/CardList/CardList';

// 안된것들
// 로딩페이지 미구현 - 채민님
// CardList 애니매이션 - carousel ?
// 버튼 미구현
// 반응형 미구현
// 무한스크롤? 가능함?

export default function ListPage() {
  const LIMIT = 8;
  const teamOption = `4-22`;
  const query = `?limit=${LIMIT}&offset=0`;
  const { data, isLoading } = useFetch(`/${teamOption}/recipients/${query}`);
  // const { recipientsSortedLike, isSortedLikeLoading } = useFetch(
  //   `/${teamOption}/recipients/${query}&sort=like`,
  // );

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  const recipients = data ? data.results : null;

  // const handleClick = () => {
  //   setOffset((prevOffset) => prevOffset + 1);
  // };

  const hotItems = [...recipients];

  return (
    <main className={styles.container}>
      <>
        <div>
          <Carousel
            CardListName={'인기 롤링 페이퍼 🔥'}
            recipients={hotItems}
          />
        </div>
        {/* <div>
          <Carousel
            CardListName={'최근에 만든 롤링 페이퍼 💜'}
            recipients={recipients}
          />
        </div> */}
        <div>
          <CardList CardListName={`전체 롤링페이퍼`} recipients={recipients} />
        </div>
        <Button className={styles.myButton} size={'md'}>
          나도 만들어보기
        </Button>
      </>
    </main>
  );
}
