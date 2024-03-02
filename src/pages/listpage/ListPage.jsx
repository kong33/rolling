import CardList from '../../components/CardList/CardList';
import styles from './ListPage.module.scss';
import useFetch from '../../hooks/useFetch';

export default function ListPage() {
  const { data, isLoading } = useFetch(`/2-7/recipients/`);
  console.log(data);

  if (isLoading || !data) {
    return (
      <div>
        <span>로딩중입니다.</span>
      </div>
    );
  }

  const recipients = data ? data.results : null;
  const hotRecipients = [...recipients].sort(
    (a, b) => b.reactionCount - a.reactionCount,
  );
  const newRecipients = [...recipients].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
  console.log(newRecipients);

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
        <button>나도 만들어보기(수정필요)</button>
      </>
    </main>
  );
}
