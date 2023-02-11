import React from 'react';
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Banner() {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="banner">
      <div>
        <img src="./img/banners/banner.jpg" alt="" />
      </div>
      <div>
        <img src="./img/banners/banner02.jpg" alt="" />
      </div>
      <div>
        <img src="./img/banners/banner03.jpg" alt="" />
      </div>
    </Slider>
  )
}

export default Banner
