import styles from './ListPage.module.scss';
import useFetch from '../../hooks/useFetch';
import { Button } from '../../components/Button';
import { LoadingPage } from '../LoadingPage/';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmblaCarousel, TotalCardList } from '../../components/CardList';
import { TEAM } from '../../constants';
// import Carousel from '../../components/CardList/Carousel'; - 연습용

// 안된것들
// 무한스크롤
// overview pattern rect 설정
// 에러페이지 추가

// 문제점
// visitorCount 렌더링 안됨
// background 3D

export default function ListPage() {
  const LIMIT = 8;
  const query = `?limit=${LIMIT}&offset=0`;
  const [offset, setOffset] = useState(0);
  const navigatePostPage = useNavigate();
  const { data: dataSortedCreateAt, isLoading } = useFetch(
    `/${TEAM}/recipients/${query}`,
  );
  const { data: dataSortedLike, isSortedLikeLoading } = useFetch(
    `/${TEAM}/recipients/${query}&sort=like`,
  );
  const { data: totalData, isTotalDataLoading } = useFetch(
    `/${TEAM}/recipients/?limit=${LIMIT}&offset=${offset}`,
  );
  const observer = useRef(null);
  const marker = useRef(null);

  const handleBottomBtnClick = () => {
    navigatePostPage(`/post`);
  };

  const handleScroll = () => {
    setOffset((prevOffset) => prevOffset + `${LIMIT}`);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleScroll();
        }
      });
    });

    if (marker.current) {
      observer.current.observe(marker.current);
    }

    return () => {
      if (marker.current) {
        observer.current.unobserve(marker.current);
      }
    };
  }, []);

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
    align: 'start',
    dragFree: true,
    loop: true,
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
      <TotalCardList
        data={totalData}
        CardListName={'전체 롤링 페이퍼 💜'}
        ref={marker}
      />
      <div className={styles.buttonBg}>
        <Button
          className={styles.myButton}
          size={'md'}
          type={'button'}
          onClick={() => handleBottomBtnClick()}
        >
          나도 만들어보기
        </Button>
      </div>
    </main>
  );
}
