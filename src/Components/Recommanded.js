import React from "react";
import "./Recommanded.css";

import { useDispatch, useSelector } from "react-redux";
import { setRecommanded } from "../Slices/MovieSlice";
import { Link } from "react-router-dom";
function Recommanded() {
  const dispatch = useDispatch();
  const recommand = useSelector(setRecommanded);
  return (
    <div className="Recommanded_box">
      <h4>Recommended for You</h4>

      <div className="recommanded_content">
        {recommand &&
          recommand.map((movie, key) => (
            <div className="recomanded_con" key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img
                  src={movie.cardImg}
                  alt={movie.title}
                  className="recomanded_img "
                />
              </Link>
            </div>
          ))}
        {/* <div className="recomanded_con">
          <img src={img2} className="recomanded_img " />
        </div>
        <div className="recomanded_con">
          <img src={img2} className="recomanded_img " />
        </div>
        <div className="recomanded_con">
          <img src={img2} className="recomanded_img " />
        </div>
        <div className="recomanded_con">
          <img src={img2} className="recomanded_img " />
        </div>
       */}
      </div>
    </div>
  );
}

export default Recommanded;
