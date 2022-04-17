import React from "react";
import { Card, Button } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            {name}
          </Card.Title>
          <Card.Text>
              {description}
          </Card.Text>
          <Card.Title>
              Price: {price}
          </Card.Title>
          <Button variant="primary">Checkout</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Service;
