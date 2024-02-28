// import { useState, useEffect } from 'react';
// import Reactions from 'Reactions';

// const CardOverview = () => {
//   // 임시 경로 fetch("https://rolling-api.vercel.app/2-7/recipients/")
//   // 로딩 기능 구현하고싶은데 방법 알아보기
//   const [data, setData] = useState({
//     id: null,
//     name: null,
//     backgroundColor: 'beige',
//     backgroundImageURL: null,
//     createdAt: null,
//     messageCount: 0,
//     recentMessages: [],
//     topReactions: [],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await useFetch('/2-7/recipients/');
//         setData(result.results);
//       } catch (error) {
//         console.error(error);
//         console.log('서버와의 통신에 문제가 생겼습니다. (fetch 확인)');
//       }
//     };

//     fetchData();
//   });

//   return (
//     <article>
//       <div>
//         <h1>To. {data.name} 님</h1>
//         {/* 이미지들 추가 예정 */}
//         <p>{data.messageCount}명이 작성했어요!</p>
//       </div>
//       <div>
//         {/* topReactions에서 top3만 렌더링 해야할것 같음 */}
//         <Reactions Reactions={data.topReactions} />
//         <Reactions Reactions={data.topReactions} />
//         <Reactions Reactions={data.topReactions} />
//       </div>
//     </article>
//   );
// };

// export default CardOverview;
