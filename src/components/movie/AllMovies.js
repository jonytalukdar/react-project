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
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllMovies;
