import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import welcome from "../../../Images/Fine-Art-Wedding-Photography001-768x1024-1.jpg";
import "../../../Shared/CustomCss/Custom.css"


const Welcome = () => {
  return (
    <div >
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6 col-12">
            <img src={welcome} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6 col-12">
            <div className="card-body">
              <h1 className="card-title">HELLO THERE!! WELCOME</h1>
              <h6 className="card-text mt-4">
              THANK YOU FOR VISITING MY WEBSITE AND EXPLORING MY WORK. YOU ARE ON ONE OF THE MOST EXCITING AND IMPORTANT JOURNEYS OF YOUR LIFE, HOW EXCITING! YOU HAVE COME TO A PLACE OF INSPIRATION, EXPERIENCE AND KNOWLEDGE. HOPEFULLY MY WORK CONNECTS WITH YOU ON MANY LEVELS - THANK YOU FOR VISITING!
              </h6>
              <Button className="button-style mt-5 ms-5">
                  <Link className="text-decoration-none text-light" to="/myphotography">GO TO MY PHOTOGRAPHY</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
