import React from 'react';
import "../CustomCss/Custom.css"
import logo from "../../Images/logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='d-inline-block w-100 mt-5 light-color-background  text-secondary'>
            <div className='d-flex'>

            
          <div className='my-5 mx-auto'>
              <img src={logo} alt="" />
              <p className='pt-3'>World Class Photography Centre</p>
          </div>
          <div className='my-5 mx-auto'>
              <h4>Link</h4>
              <Link className='text-decoration-none text-secondary' to="/home">HOME</Link>
              <br />
              <Link className='text-decoration-none text-secondary' to="/blogs">BLOGS</Link>
              <br />
              <Link className='text-decoration-none text-secondary' to="/register">REGISTER</Link>
              <br />
              <Link className='text-decoration-none text-secondary' to="/login">LOGIN</Link>
              </div>
              </div>
             <p className='text-center pb-5'><small>&copy;copyright All content by MAHBUB PHOTOGRAPHY</small></p>
        </div>
    );
};

export default Footer;