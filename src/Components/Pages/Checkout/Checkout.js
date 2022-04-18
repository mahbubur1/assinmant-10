import React from 'react';
import { Form, Button } from "react-bootstrap";
import "../../Shared/CustomCss/Custom.css"

const Checkout = () => {
    return (
        <div className="container w-50 mx-auto my-5">
      <div className="shadow-lg p-5  bg-body rounded">
      <h2 className="custom-text-color text-center mt-2 mb-3">-  Please Inter Your Info  -</h2>
      <Form>
          <Form.Group className="mb-3">
        <Form.Control type="text"placeholder="Your Name" />
        </Form.Group>
          <Form.Group className="mb-3">
        <Form.Control type="text"placeholder="Your Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password"  placeholder="Password" />
        </Form.Group>
        <Button variant=" d-block mb-2" className="button-style w-75 text-light mx-auto" type="submit">
          submit
        </Button>
        </Form>
        </div>
        </div>
    );
};

export default Checkout;