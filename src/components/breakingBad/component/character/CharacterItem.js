import React from 'react';

const CharacterItem = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.img} alt="" />
    </div>
  );
};

export default CharacterItem;
