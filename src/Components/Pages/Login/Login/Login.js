import React, { useRef } from "react";
import { Form,Button  } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {Link, useNavigate,useLocation} from "react-router-dom";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import '../../../Shared/CustomCss/Custom.css'

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate= useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = event =>{
    event.preventDefault();
    const email= emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email,password);
  }
  return (
    <div className="container w-50 mx-auto my-5">
      <h2 className="custom-text-color text-center mt-2 mb-3">-  Please Login   -</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant=" d-block mb-2" className="button-style w-75 text-light mx-auto" type="submit">
          Login
        </Button>
      </Form>
      <p className="text-center">
        New to Mahbub Photography?   <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <p className="text-center">
        Forget Password?
        <button
          className="btn btn-link text-primary pe-auto text-decoration-none"
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
