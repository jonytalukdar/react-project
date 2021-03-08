import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3f9425ec52f446c46cdbd847041c2b07`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          className="img-fluid"
          src={`https://image.tmdb.org/t/p/w1280/${movies.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="col-md-6">
        <h2>Title : {movies.title}</h2>
        <h3> Language : {movies.original_language}</h3>
        <h3>Popularity : {movies.popularity}</h3>
        <h3>Realase Date : {movies.release_date}</h3>
        <p>OverView : {movies.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
