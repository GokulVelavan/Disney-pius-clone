import React from "react";
import "./Viewers.css";
import img1 from "../images/viewers-disney.png";
import img2 from "../images/viewers-marvel.png";
import img3 from "../images/viewers-national.png";
import img4 from "../images/viewers-pixar.png";
import img5 from "../images/viewers-starwars.png";
import video1 from "../videos/1564674844-disney.mp4";
import video2 from "../videos/1564676115-marvel.mp4";
import video3 from "../videos/1564676296-national-geographic.mp4";
import video4 from "../videos/1564676714-pixar.mp4";
import video5 from "../videos/1608229455-star-wars.mp4";
function Viewers() {
  return (
    <div className="viewers_box">
      <div className="viewers">
        <img src={img1} className="viewers_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video1} />
        </video>
      </div>
      <div className="viewers">
        <img src={img2} className="viewers_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video2} />
        </video>
      </div>
      <div className="viewers">
        <img src={img3} className="viewers_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video3} />
        </video>
      </div>
      <div className="viewers">
        <img src={img4} className="viewers_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video4} />
        </video>
      </div>
      <div className="viewers">
        <img src={img5} className="viewers_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video5} />
        </video>
      </div>
    </div>
  );
}

export default Viewers;
