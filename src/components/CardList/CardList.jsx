import { useEffect, useState } from 'react';
import CardOverview from './CardOverview.jsx';
// import useFetch from '../../hooks/useFetch.js';

const CardList = ({ CardListName }) => {
  const [recipients, setRecipients] = useState([]);

  // useEffect(() => {
  //   const getFetch = async () => {
  //     try {
  //       const data = await useFetch('/2-7/recipients/');
  //       setRecipients(data);
  //     } catch (error) {
  //       console.error('fetch 확인', error);
  //     }
  //   };
  //   getFetch();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://rolling-api.vercel.app/2-7/recipients/',
        );
        const result = await response.json();
        setRecipients(result.results);
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
