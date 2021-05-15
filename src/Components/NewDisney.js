import React from "react";
import "./Recommanded.css";
import { setNewDisney } from "../Slices/MovieSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function NewDisney() {
  const dispatch = useDispatch();
  const newdisney = useSelector(setNewDisney);
  return (
    <div className="Recommanded_box">
      <h4>NewDisney Movies</h4>
      <div className="recommanded_content">
        {newdisney &&
          newdisney.map((movie, key) => (
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
        </div> */}
      </div>
    </div>
  );
}

export default NewDisney;
