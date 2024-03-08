import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './CardPostListPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import CardPostList from '../../components/CardPost/CardPostList';
import { Button } from '../../components/Button';
import { ModalCardInfo, ModalConfirm } from '../../components/Modal';

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

/*
작업 4
1) handleDelete에 받아온 id로 fetch로 delete 구현 
2) fetch에 try~catch문으로 error 처리
(fetch문이 우선순위 그다음이 try~catch문)
3) 존재하지 않은 recipientId로 넘어오면 list로 내보냄 (useNavigate 추가)
*/

/*
작업 5
1) 삭제할때 넘어오는 id로 messages를 filter해서 setMessages로 리렌더링
2) 1)작업을 isDelete 상태로 의존성배열에 첨부해서 계속 messages를 fetch 받아오게 수정
*/

/*
작업 6
1) edit 페이지일때 카드추가버튼이 안보이게 HandleCardAddButtonClick 리팩토링
2) 삭제한 메세지를 제외한 다른 id의 메세지들을 리렌더딩
3) handleDelete의 이벤트버블링 방지추가
4) 카드를 클릭했을때 handleInfoOpen 추가
*/

function CardPostListPage() {
  // 존재하지 않는 recipientId로 들어왔을 때 내보내기 위함.
  // https://rolling-api.vercel.app/2-7/recipients/2298/
  // TODO: recipientId가 존재할 때는 { id: 2298, ... } 넘어온다.
  // recipientId가 존재하지 않을 때는 { "detail": "Not found." } 넘어온다.
  const { recipientId } = useParams();
  const navigate = useNavigate();

  // edit 페이지의 컴포넌트를 따로 만들지 않고 CardPostListPage를 재사용 하기 위해서
  // 주소에서 edit을 가져오려고 한다.
  const { pathname } = useLocation();
  const isEdit = pathname.split('/')[3] === 'edit' ? true : false;

  const modalConfirmRef = useRef(null);
  const modalCardInfoRef = useRef(null);

  const [recipientInfo, setRecipientInfo] = useState(null);
  const [messages, setMessages] = useState(null);

  // isEdit(true or false) 여부에 따라서 handleDelete에 function 또는 null을 부여
  // CardPost에서 "typeof onDelete === function"으로 휴지통 버튼을 조건부 렌더링
  const handleDelete = isEdit
    ? (id) => {
        modalConfirmRef.current?.setInfo({
          message: '정말 삭제하시겠습니까?',
          onClick: async () => {
            try {
              const response = await fetch(
                `https://rolling-api.vercel.app/4-22/messages/${id}/`,
                { method: 'DELETE' },
              );

              if (!response.ok) {
                throw new Error('삭제에 실패하였습니다.');
              }

              console.log(`${id}가 삭제되었습니다.`);

              setMessages((preMessages) =>
                preMessages.filter((message) => message.id !== id),
              );
            } catch (error) {
              console.error(error);
            }
          },
        });
        modalConfirmRef.current?.open();
      }
    : null;

  const handleEditButtonClick = () => {
    console.log('편집하기');
  };

  const handleRemoveButtonClick = () => {
    console.log('삭제하기');
  };

  const handleCardAddButtonClick = !isEdit
    ? () => {
        navigate(`/post/${recipientId}/messages`);
      }
    : null;

  const handleInfoOpen = (item) => {
    modalCardInfoRef.current?.setInfo(item);
    modalCardInfoRef.current?.open();
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(
          `https://rolling-api.vercel.app/4-22/recipients/${recipientId}/`,
        );
        if (!response.ok) {
          throw new Error('RecipientInfo를 받아오는데 실패했습니다.');
        }
        const json = await response.json();
        console.log(recipientInfo);
        setRecipientInfo(json);
      } catch (error) {
        console.error(error);
        navigate('/list');
      }
    };
    getInfo();
  }, [recipientId]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await fetch(
          `https://rolling-api.vercel.app/4-22/recipients/${recipientId}/messages/`,
        );
        if (!response.ok) {
          throw new Error('메세지 리스트를 받아오지 못했습니다.');
        }
        const json = await response.json();
        setMessages(json.results);
      } catch (error) {
        console.error(error);
        navigate('/list');
      }
    };
    getMessages();
  }, [recipientId]);

  return (
    <>
      <div className={styles.background}></div>
      <div>
        {isEdit ? (
          <Button onClick={handleRemoveButtonClick}>삭제하기</Button>
        ) : (
          <Button onClick={handleEditButtonClick}>편집하기</Button>
        )}
        <CardPostList
          items={messages}
          onDelete={handleDelete}
          onAdd={handleCardAddButtonClick}
          onClick={handleInfoOpen}
        />
      </div>
      <ModalCardInfo ref={modalCardInfoRef} />
      <ModalConfirm ref={modalConfirmRef} />
    </>
  );
}

export default CardPostListPage;
