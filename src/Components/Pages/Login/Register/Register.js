import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Form, Button } from "react-bootstrap";
import auth from "../../../../firebase.init";
import { Link } from "react-router-dom";
import '../../../Shared/CustomCss/Custom.css'

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    if(user){
        console.log("user", user);
     }

    const handleFormRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);  
    }
  return (
    <div className="container w-25 mx-auto my-5">
      <h2 className="custom-text-color text-center mt-2 mb-3">-  Please Register  -</h2>
      <Form onSubmit={handleFormRegister} >
          <Form.Group className="mb-3">
        <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button variant=" mx-auto d-block mb-2" className="button-style w-100 text-light" type="submit">
          Submit
        </Button>
        <p>
          Already have an account?
          <Link
            to="/login"
            className="text-primary pe-auto text-decoration-none"
          >
            Please Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
