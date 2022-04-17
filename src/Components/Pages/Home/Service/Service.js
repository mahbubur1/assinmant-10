import React from "react";
import { Card, Button,Col } from "react-bootstrap";
import '../../../Shared/CustomCss/Custom.css'

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <Col sm>
      <Card>
        <Card.Img variant="top" className="w-100" src={img} />
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
          <Button className="button-style">Checkout</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
