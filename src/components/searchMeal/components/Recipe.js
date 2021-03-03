import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Recipe = (props) => {
  const { strMeal, strMealThumb } = props.list;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
