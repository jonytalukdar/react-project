import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div>
      <form>
        <input
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="Search Character"
          autoFocus
          value={text}
        />
      </form>
    </div>
  );
};

export default Search;
