import { useParams } from 'react-router-dom';
import styles from './CardPostListPage.module.scss';
import { useEffect, useState } from 'react';

/* 
작업 1
1) 들어온 아이디를 가져옴
2) 가져온 아이디를 fetch로 요청보냄
3) fetch에서 가져온 데이터를 recipientInfo에 넣음
*/
function CardPostListPage() {
  // 존재하지 않는 recipientId로 들어왔을 때 내보내기 위함.
  // https://rolling-api.vercel.app/2-7/recipients/2298/
  // TODO: recipientId가 존재할 때는 { id: 2298, ... } 넘어온다.
  // recipientId가 존재하지 않을 때는 { "detail": "Not found." } 넘어온다.
  const { recipientId } = useParams();
  const [recipientInfo, setRecipientInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(
        `https://rolling-api.vercel.app/2-7/recipients/${recipientId}/`,
      );
      const json = await response.json();
      setRecipientInfo(json);
      console.log(recipientInfo);
    };
    getInfo();
  }, []);

  return (
    <>
      <h1 className={styles.container}>CardPostListPage</h1>
    </>
  );
}

export default CardPostListPage;
