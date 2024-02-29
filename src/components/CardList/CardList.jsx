import { useEffect, useState } from 'react';
import CardOverview from './CardOverview.jsx';

// ListPage에서는 CardList component를 두번 렌더링 - 인기 롤링페이퍼, 최근에 만든 롤링 페이퍼
const CardList = ({ CardListName }) => {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://rolling-api.vercel.app/2-7/recipients/',
        );
        const result = await response.json();
        setRecipients(result.results);
        console.log(result.results);
      } catch (error) {
        console.log('fetch확인');
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h1>{CardListName}</h1>
      <div>
        {recipients.map((recipient) => (
          <CardOverview key={recipient.id} recipient={recipient} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
