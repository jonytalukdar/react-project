import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const Header = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=b')
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, []);

  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Seacrh</button>
      </form>
      {recipe.map((list) => (
        <Recipe></Recipe>
      ))}
    </div>
  );
};

export default Header;
