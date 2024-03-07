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

/*
작업 3
1) /post/{id}와 /post/{id}/edit 페이지를 하나의 컴포넌트로 관리하기 위해서 useLocation으로 edit 여부를 확인
2) edit 페이지로 들어왔다면 isEdit을 true 그렇지 않다면 false로 관리
3) isEdit 여부에 따라서 CardPost의 삭제버튼 조건부 렌더링 작업
*/

function CardPostListPage() {
  // 존재하지 않는 recipientId로 들어왔을 때 내보내기 위함.
  // https://rolling-api.vercel.app/2-7/recipients/2298/
  // TODO: recipientId가 존재할 때는 { id: 2298, ... } 넘어온다.
  // recipientId가 존재하지 않을 때는 { "detail": "Not found." } 넘어온다.
  const { recipientId } = useParams();

  // edit 페이지의 컴포넌트를 따로 만들지 않고 CardPostListPage를 재사용 하기 위해서
  // 주소에서 edit을 가져오려고 한다.
  const { pathname } = useLocation();
  const isEdit = pathname.split('/')[3] === 'edit' ? true : false;
  console.log('isEdit', isEdit);

  const [recipientInfo, setRecipientInfo] = useState(null);
  const [messages, setMessages] = useState(null);

  // isEdit(true or false) 여부에 따라서 handleDelete에 function 또는 null을 부여
  // CardPost에서 "typeof onDelete === function"으로 휴지통 버튼을 조건부 렌더링
  const handleDelete = isEdit
    ? async (id) => {
        try {
          const response = await fetch(
            `https://rolling-api.vercel.app/4-22/messages/${id}/`,
            { method: 'DELETE' },
          );

          if (!response.ok) {
            throw new Error('삭제에 실패하였습니다.');
          }
        } catch (error) {
          console.error(error);
        }
      }
    : null;

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(
        `https://rolling-api.vercel.app/4-22/recipients/${recipientId}/`,
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
        `https://rolling-api.vercel.app/4-22/recipients/${recipientId}/messages/`,
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
      <CardPostList items={messages} onDelete={handleDelete} />
    </>
  );
}

export default CardPostListPage;
