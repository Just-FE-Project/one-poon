import { useCallback, useEffect, useState } from 'react';

import { postApi } from '@/home/api/api';

import { Card } from './card';

export const Cards = () => {
  const [cards, setCards] = useState<any[]>([]);

  const fetchPosts = useCallback(async () => {
    try {
      const data = await postApi.getPost();

      setCards(data);
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      {cards.length > 0 && (
        <ul>
          {cards.map(item => (
            <Card key={item.id} cardItem={item} />
          ))}
        </ul>
      )}
    </>
  );
};
