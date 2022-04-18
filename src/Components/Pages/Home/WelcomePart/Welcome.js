import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import welcome from "../../../Images/Fine-Art-Wedding-Photography001-768x1024-1.jpg";
import "../../../Shared/CustomCss/Custom.css"


const Welcome = () => {
  return (
    <div >
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-6 col-12">
            <img src={welcome} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6 col-12">
            <div class="card-body">
              <h1 class="card-title">HELLO THERE!! WELCOME</h1>
              <h6 class="card-text mt-4">
              THANK YOU FOR VISITING MY WEBSITE AND EXPLORING MY WORK. YOU ARE ON ONE OF THE MOST EXCITING AND IMPORTANT JOURNEYS OF YOUR LIFE, HOW EXCITING! YOU HAVE COME TO A PLACE OF INSPIRATION, EXPERIENCE AND KNOWLEDGE. HOPEFULLY MY WORK CONNECTS WITH YOU ON MANY LEVELS - THANK YOU FOR VISITING!
              </h6>
              <Button className="button-style">
                  <Link className="text-decoration-none" to="/myphotography">MY PHOTOGRAPHY</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
