import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AllMovies = ({ movie }) => {
  const { id, title, backdrop_path } = movie;
  return (
    <div className="col-md-4 my-2">
      <Card>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllMovies;
