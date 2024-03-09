// import Carousel from '../../components/CardList/Carousel';
import styles from './ListPage.module.scss';
import useFetch from '../../hooks/useFetch';
import { Button } from '../../components/Button/';
import LoadingPage from '../LoadingPage/LoadingPage';
import CardList from '../../components/CardList/CardList';
import EmblaCarousel from '../../components/CardList/EmblaCarousel/EmblaCarousel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 안된것들
// 하단 버튼 기능 미구현
// navigation
// 반응형 미구현
// 무한스크롤

export default function ListPage() {
  const LIMIT = 8;
  const teamOption = `4-22`;
  const query = `?limit=${LIMIT}&offset=0`;
  const [offset, setOffset] = useState(0);
  const navigatePostPage = useNavigate();
  const { data: dataSortedCreateAt, isLoading } = useFetch(
    `/${teamOption}/recipients/${query}`,
  );
  const { data: dataSortedLike, isSortedLikeLoading } = useFetch(
    `/${teamOption}/recipients/${query}&sort=like`,
  );
  const { data: totalData, isTotalDataLoading } = useFetch(
    `/${teamOption}/recipients/?limit=${LIMIT}&offset=${offset}`,
  );

  if (
    isLoading ||
    isSortedLikeLoading ||
    isTotalDataLoading ||
    !dataSortedCreateAt ||
    !dataSortedLike ||
    !totalData
  ) {
    return <LoadingPage />;
  }

  const hotItems = dataSortedLike ? dataSortedLike.results : null;
  const newItems = dataSortedCreateAt ? dataSortedCreateAt.results : null;
  const EmblaCarouselOptions = {
    loop: true,
  };

  const handleBottomBtnClick = () => {
    navigatePostPage(`/post`);
  };

  const handleScroll = () => {
    setOffset((prevOffset) => prevOffset + `${LIMIT}`);
  };

  return (
    <main className={styles.container}>
      <EmblaCarousel
        slides={hotItems}
        options={EmblaCarouselOptions}
        CarouselName={'인기 롤링 페이퍼 🔥'}
      />
      <EmblaCarousel
        slides={newItems}
        options={EmblaCarouselOptions}
        CarouselName={'최근에 만든 롤링 페이퍼 ⭐️'}
      />
      <CardList
        data={totalData}
        CardListName={'전체 롤링 페이퍼 💜'}
        onScroll={handleScroll}
      />
      <div className={styles.ButtonBg}>
        <Button
          className={styles.myButton}
          size={'md'}
          onClick={() => handleBottomBtnClick()}
        >
          나도 만들어보기
        </Button>
      </div>
    </main>
  );
}
