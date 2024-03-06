import { useLocation, useParams } from 'react-router-dom';
import styles from './CardPostListPage.module.scss';
import { useEffect, useState } from 'react';
import CardPostList from '../../components/CardPost/CardPostList';

/* 
작업 1
1) 들어온 아이디를 가져옴
2) 가져온 아이디를 fetch로 요청보냄
3) fetch에서 가져온 데이터를 recipientInfo에 넣음
*/

/* 
작업 2
1) fetch로 메세지 리스트를 받아옴
2) 받아온 메세지 리스트를 messages에 넣음
3) CardPostList items에 messages를 넣음
*/
function CardPostListPage() {
  // 존재하지 않는 recipientId로 들어왔을 때 내보내기 위함.
  // https://rolling-api.vercel.app/2-7/recipients/2298/
  // TODO: recipientId가 존재할 때는 { id: 2298, ... } 넘어온다.
  // recipientId가 존재하지 않을 때는 { "detail": "Not found." } 넘어온다.
  const { recipientId } = useParams();
  const { pathname } = useLocation();
  const [recipientInfo, setRecipientInfo] = useState(null);
  const [messages, setMessages] = useState(null);

  const isEdit = pathname.split('/')[3] === 'edit' ? true : false;
  console.log('isEdit', isEdit);

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(
        `https://rolling-api.vercel.app/2-7/recipients/${recipientId}/`,
      );
      const json = await response.json();
      console.log(recipientInfo);
      setRecipientInfo(json);
    };
    getInfo();
  }, [recipientId]);

  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch(
        `https://rolling-api.vercel.app/2-7/recipients/${recipientId}/messages/`,
      );
      const json = await response.json();
      setMessages(json.results);
    };
    getMessages();
  }, [recipientId]);

  return (
    <>
      <h1 className={styles.container}>CardPostListPage</h1>
      {/* TODO: CardPostList 만들기 */}
      <CardPostList items={messages} />
    </>
  );
}

export default CardPostListPage;
