import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './CardPostListPage.module.scss';
import { useEffect, useRef, useState } from 'react';
import CardPostList from '../../components/CardPost/CardPostList';
import { Button } from '../../components/Button';
import { ModalCardInfo, ModalConfirm } from '../../components/Modal';
import useMutate from '../../hooks/useMutate';
import { TEAM } from '../../constants';

function CardPostListEditPage() {
  const { recipientId } = useParams();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const isEdit = pathname.split('/')[3] === 'edit' ? true : false;

  const modalConfirmRef = useRef(null);
  const modalCardInfoRef = useRef(null);

  const LIMIT = isEdit ? 6 : 5;
  const [offset, setOffset] = useState(0);

  const { data: recipientInfo, mutate: getRecipientInfo } = useMutate(
    `/${TEAM}/recipients/${recipientId}/`,
    'GET',
  );
  const [messages, setMessages] = useState([]);

  const handleCardPostDelete = isEdit
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
    navigate(`${pathname}/edit`);
  };

  const handleCardOverviewDelete = () => {
    modalConfirmRef.current?.setInfo({
      message: '정말 삭제하시겠습니다?',
      onClick: async () => {
        try {
          const response = await fetch(
            `https://rolling-api.vercel.app/4-22/recipients/${recipientId}/`,
            { method: 'DELETE' },
          );

          if (!response.ok) {
            throw new Error('삭제에 실패하였습니다.');
          }
          navigate(`/list`);
        } catch (error) {
          console.error(error);
        }
      },
    });
    modalConfirmRef.current?.open();
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

  const handleMessagesLoad = async () => {
    try {
      const response = await fetch(
        `https://rolling-api.vercel.app/4-22/recipients/${recipientId}/messages/?limit=${LIMIT}&offset=${offset}`,
      );
      if (!response.ok) {
        throw new Error('메세지 리스트를 받아오지 못했습니다.');
      }
      const json = await response.json();

      if (offset === 0) {
        setMessages(json.results);
      } else {
        setMessages((preMessages) => [...preMessages, ...json.results]);
      }
    } catch (error) {
      console.error(error);
      navigate('/list');
    }
  };

  const handleMessagesLoadMore = () => {
    setOffset(LIMIT + offset);
  };

  useEffect(() => {
    getRecipientInfo();
  }, [recipientId]);

  useEffect(() => {
    handleMessagesLoad();
  }, [recipientId, offset]);

  return (
    <>
      <div
        className={`${styles.background} ${styles[recipientInfo?.backgroundColor]}`}
        style={{ backgroundImage: `url(${recipientInfo?.backgroundImageURL})` }}
      />
      <div>
        {isEdit ? (
          <Button type="button" onClick={handleCardOverviewDelete} size="sm">
            삭제하기
          </Button>
        ) : (
          <Button type="button" onClick={handleEditButtonClick} size="sm">
            편집하기
          </Button>
        )}
        <CardPostList
          items={messages}
          onDelete={handleCardPostDelete}
          onAdd={handleCardAddButtonClick}
          onClick={handleInfoOpen}
        />
      </div>
      <Button type="button" onClick={handleMessagesLoadMore} size="md">
        더보기
      </Button>
      <ModalCardInfo ref={modalCardInfoRef} />
      <ModalConfirm ref={modalConfirmRef} />
    </>
  );
}

export default CardPostListEditPage;
