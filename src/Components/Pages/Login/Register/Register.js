import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Form, Button } from "react-bootstrap";
import auth from "../../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import '../../../Shared/CustomCss/Custom.css'
import { useRef } from "react";

const Register = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef= useRef('');
  const navigate= useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    if(user){
      console.log("user", user);
     }

    const handleFormRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        navigate("/login")  
    }
  return (
    <div className="container w-25 mx-auto my-5">
      <h2 className="custom-text-color text-center mt-2 mb-3">-  Please Register  -</h2>
      <Form onSubmit={handleFormRegister} >
          <Form.Group className="mb-3">
        <Form.Control type="text" ref={nameRef} placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" ref={passwordRef} placeholder="Password" />
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
