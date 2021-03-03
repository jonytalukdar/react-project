import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './header.css';

const Header = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals));
  }, [query]);

  const updateChange = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div>
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateChange} />
        <button type="submit">Seacrh</button>
      </form>
      <div className="header">
        {recipe.map((list) => (
          <Recipe list={list}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Header;
