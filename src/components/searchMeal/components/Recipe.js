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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem impedit
          vel modi.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
