import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './component/header/Header';

const Index = () => {
  const [item, setItem] = useState([]);
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
      {item.map((list) => (
        <li>{list.name}</li>
      ))}
    </div>
  );
};

export default Index;
