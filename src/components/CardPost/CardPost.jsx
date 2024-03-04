import { useState, useEffect } from 'react';
import Card from './Card';

function CardPost() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://rolling-api.vercel.app/2-7/recipients/2304/',
      );
      const json = await data.json();
      setPosts(json);
    };
    fetchData(posts);
  }, []);

  return (
    <div>
      {posts?.recentMessages.map((item) => (
        <Card key={item.id} item={item} /> //빨간색 에러 해결
      ))}
      ;
    </div>
  );
}

export default CardPost;
