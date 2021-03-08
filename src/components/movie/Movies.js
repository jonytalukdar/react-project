import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AllMovies from './AllMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = `3f9425ec52f446c46cdbd847041c2b07`;
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, []);
  return (
    <Container>
      <div className="row">
        {movies.map((movie) => (
          <AllMovies movie={movie}></AllMovies>
        ))}
      </div>
    </Container>
  );
};

export default Movies;
