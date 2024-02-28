// import { useState } from 'react';

const CardOverview = () => {
  // 임시 경로 fetch("https://rolling-api.vercel.app/2-7/recipients/")
  // 로딩 기능 구현하고싶은데 방법 알아보기
  // const [data, setData] = useState({
  //   id: null,
  //   name: null,
  //   backgroundColor: 'beige',
  //   backgroundImageURL: null,
  //   createdAt: null,
  //   messageCount: 0,
  //   recentMessages: [],
  //   topReactions: [],
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await useFetch("/2-7/recipients/");
  //       setData(result.results)
  //     } catch (error) {
  //       console.error(error);
  //       console.log("서버와의 통신에 문제가 생겼습니다. (fetch 확인)")
  //     }
  //   }

  //   fetchData();
  // })

  return (
    <article>
      <div>
        <div>{/* user profile 렌더링 */}</div>
        <div>{/* 페이퍼를 남긴 users의 profiles 렌더링 */}</div>
        <div>{/* 페이퍼를 남긴 users의 count를 렌더링 */}</div>
      </div>
      <div>{/* 이모지 count */}</div>
    </article>
  );
};

export default CardOverview;
