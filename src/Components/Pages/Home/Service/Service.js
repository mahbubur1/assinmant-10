import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../../Shared/CustomCss/Custom.css";

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div class="col shadow px-0 bg-body rounded">
      <div class="card h-100">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body" >
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            {description}
          </p>
        </div>
        <h5 className="ps-4">Price: {price}</h5>
        <div >
          <Button className="button-style w-100">
            <Link className="text-decoration-none text-light" to="/checkout">
              Checkout
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
