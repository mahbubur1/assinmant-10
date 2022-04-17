import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Google from "../../../Images/social/google.png";
import Github from "../../../Images/social/github.png"

const SocialLogin = () => {
    const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    let errorMessage;
    if (error) {
        errorMessage= <p className='text-danger'>{error?.message} </p>
    }
    if (user) {
        navigate("/home")
    }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorMessage}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className='btn btn-secondary w-75 d-block mx-auto my-2'>
          <img style={{ width: "30px" }} src={Google} alt="" />
          <span className="px-2 text-light">Google Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className='btn btn-dark w-75 d-block mx-auto my-2'>
          <img style={{ width: "30px" }} src={Github} alt="" />
          <span className="px-2 text-light">Github Sign In</span>
        </button>
        
      </div>
    </div>
  );
};

export default SocialLogin;
