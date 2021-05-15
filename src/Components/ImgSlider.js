import React from "react";
import "./ImgSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../images/slider-badging.jpg";
import img2 from "../images/slider-badag.jpg";
import img3 from "../images/slider-scale.jpg";
import img4 from "../images/slider-scales.jpg";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="slider">
      <div className="wrap">
        <a className="tag">
          <img src={img1} />
        </a>
      </div>

      <div className="wrap">
        <a className="tag">
          <img src={img2} />
        </a>
      </div>

      <div className="wrap">
        <a className="tag">
          <img src={img3} />
        </a>
      </div>

      <div className="wrap">
        <a className="tag">
          <img src={img4} />
        </a>
      </div>
    </Slider>
  );
}

export default ImgSlider;
