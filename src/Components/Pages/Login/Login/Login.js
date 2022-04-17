import React from "react";
import { Form,Button  } from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../../Shared/CustomCss/Custom.css'

const Login = () => {
  return (
    <div className="container w-25 mx-auto my-5">
      <h2 className="custom-text-color text-center mt-2 mb-3">-  Please Login   -</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="mx-auto d-block mb-2" className="button-style w-100 text-light" type="submit">
          Login
        </Button>
      </Form>
      <p>
        New to Mahbub Photography?
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget Password?
        <button
          className="btn btn-link text-primary pe-auto text-decoration-none"
        >
          Reset Password
        </button>
      </p>
    </div>
  );
};

export default Login;
