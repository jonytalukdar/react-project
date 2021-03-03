import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const Header = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('biryani');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals));
  }, []);

  const updateChange = (e) => {
    setSearch(e.target.value);
    // console.log('helo');
    console.log(search);
  };

  return (
    <div>
      <form>
        <input type="text" value={search} onChange={updateChange} />
        <button type="submit">Seacrh</button>
      </form>
      {recipe.map((list) => (
        <Recipe list={list}></Recipe>
      ))}
    </div>
  );
};

export default Header;
