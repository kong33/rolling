// import Carousel from '../../components/CardList/Carousel';
import styles from './ListPage.module.scss';
import useFetch from '../../hooks/useFetch';
import { Button } from '../../components/Button/';
import LoadingPage from '../LoadingPage/LoadingPage';
// import CardList from '../../components/CardList/CardList';
import EmblaCarousel from '../../components/CardList/EmblaCarousel/EmblaCarousel';

// 안된것들
// CardList 애니매이션 - carousel ? 라이브러리 사용
// 버튼 미구현
// 반응형 미구현
// 무한스크롤? 가능함?

export default function ListPage() {
  const LIMIT = 8;
  const teamOption = `2-7`;
  const query = `?limit=${LIMIT}&offset=0`;
  const { data, isLoading } = useFetch(`/${teamOption}/recipients/${query}`);
  const { data: dataSortedLike, isSortedLikeLoading } = useFetch(
    `/${teamOption}/recipients/${query}&sort=like`,
  );

  if (isLoading || isSortedLikeLoading || !data || !dataSortedLike) {
    return <LoadingPage />;
  }

  const hotItems = dataSortedLike ? dataSortedLike.results : null;
  const newItems = data ? data.results : null;
  const EmblaCarouselOptions = {
    loop: true,
  };

  return (
    <main className={styles.container}>
      <EmblaCarousel slides={hotItems} options={EmblaCarouselOptions} />
      <EmblaCarousel slides={newItems} options={EmblaCarouselOptions} />
      <Button className={styles.myButton} size={'md'}>
        나도 만들어보기
      </Button>
    </main>
  );
}
