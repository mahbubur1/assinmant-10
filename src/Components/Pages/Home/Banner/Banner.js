import React from "react";
import { Carousel } from "react-bootstrap";

import BannerImage1 from "../../../Images/Banner/wedding (2).png";
import BannerImage2 from "../../../Images/Banner/sea.png";
import BannerImage3 from "../../../Images/Banner/studio.jpg";

const Banner = () => {
  return (
    <Carousel style={{marginBottom: '80px'}}>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={BannerImage1} alt="First slide" />
        <Carousel.Caption>
          <h3>WEDDING</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={BannerImage2} alt="Second slide" />
        <Carousel.Caption>
          <h3>TRAVEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={BannerImage3} alt="Third slide" />
        <Carousel.Caption>
          <h3>PROFESSIONAL PHOTOSHOOT</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
