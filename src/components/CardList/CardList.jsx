// import { useEffect, useState } from 'react';
// import CardOverview from './CardOverview.jsx';
// import styles from './CardList.module.scss';
// import useFetch from '../../hooks/useFetch.js';
// import arrowLeft from '../../assets/images/arrow_left.svg';
// import arrowRight from '../../assets/images/arrow_right.svg';

// const LIMIT = 4;

// const CardList = ({ CardListName }) => {
//   const [recipients, setRecipients] = useState([]);
//   const [offset, setOffset] = useState(0);
//   const [hasNext, setHasNext] = useState(false);
//   // sort=like가 어떤식으로 동작하는지 모르겠습니다. messageCount 기준으로 정렬할수는 없을까요?
//   const query = `?sort=like&offset=${offset}&limit=${LIMIT}`;
//   const data = useFetch(`/2-7/recipients/${query}`).results;

//   // 오프셋 or 커서 기반 페이지네이션?

//   // data 로딩 완료시 작업 수행
//   useEffect(() => {
//     if (data) {
//       // const sortedRecipients = data.sort(
//       //   (a, b) => b.messageCount - a.messageCount,
//       // );
//       setRecipients(data);
//       setHasNext(data.next !== null);
//     }
//   }, [data, query]);

//   const handleNextPage = () => {
//     setOffset((prevOffset) => prevOffset + LIMIT);
//   };

//   const handlePrevPage = () => {
//     if (offset >= LIMIT) {
//       setOffset((prevOffset) => prevOffset - LIMIT);
//     }
//   };

//   return (
//     <section className={styles.container}>
//       <h1 className={styles.title}>{CardListName}</h1>
//       <div className={styles.content}>
//         {recipients.map((recipient) => (
//           <CardOverview key={recipient.id} recipient={recipient} />
//         ))}
//         {offset > 0 && (
//           <img
//             className={styles.arrowLeft}
//             onClick={handlePrevPage}
//             src={arrowLeft}
//           />
//         )}
//         {/* data.next값이 null이어도 버튼이 사라지지 않음 */}
//         {hasNext && (
//           <img
//             className={styles.arrowRight}
//             onClick={handleNextPage}
//             src={arrowRight}
//           />
//         )}
//       </div>
//     </section>
//   );
// };

// export default CardList;
