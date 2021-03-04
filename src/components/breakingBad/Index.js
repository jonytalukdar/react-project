import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from './component/character/Character';
import Header from './component/header/Header';

const Index = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setItem(result.data);
      setIsLoading(false);
    };
    fetchItem();
  }, []);
  return (
    <div className="container">
      <Header></Header>
      <Character isLoading={isLoading} items={items}></Character>
    </div>
  );
};

export default Index;
