import CardList from '../../components/CardList/CardList';
import styles from './ListPage.module.scss';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/Button/Button/Button';
import LoadingPage from '../LoadingPage/LoadingPage';

// 안된것들
// 로딩페이지 미구현
// message count 미구현
// background color 미구현
// CardList 애니매이션 미구현 behavior: 'smooth',
// 버튼 미구현
// 반응형 미구현
// 무한스크롤? 가능함?
// ArrowBtn svg 작업?

export default function ListPage() {
  const { data, isLoading } = useFetch(`/2-7/recipients/`);

  if (isLoading || !data) {
    return <LoadingPage />;
  }

  const recipients = data ? data.results : null;
  const hotRecipients = [...recipients].sort(
    (a, b) => b.reactionCount - a.reactionCount,
  );
  const newRecipients = [...recipients].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  return (
    <main className={styles.container}>
      <>
        <div>
          <CardList
            CardListName={'인기 롤링 페이퍼 🔥'}
            recipients={hotRecipients}
          />
        </div>
        <div>
          <CardList
            CardListName={'최근에 만든 롤링 페이퍼 💜'}
            recipients={newRecipients}
          />
        </div>
        <Button className={styles.myButton} size={'md'}>
          나도 만들어보기
        </Button>
      </>
    </main>
  );
}
