import React from 'react';

const Recipe = (props) => {
  const { strMeal, strMealThumb } = props.list;
  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h5>{strMeal}</h5>
    </div>
  );
};

export default Recipe;
