import CardList from '../../components/CardList/CardList';
import styles from './ListPage.module.scss';
import useFetch from '../../hooks/useFetch';

function ListPage() {
  const data = useFetch(`/2-11/recipients/`);
  const { results } = data;

  return (
    <>
      <main className={styles.container}>
        <div>
          <CardList CardListName={'인기 롤링 페이퍼 🔥'} data={results} />
        </div>
        <div>
          <CardList
            CardListName={'최근에 만든 롤링 페이퍼 💜'}
            data={results}
          />
        </div>
        <button>나도 만들어보기(수정필요)</button>
      </main>
    </>
  );
}

export default ListPage;
