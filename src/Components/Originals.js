import React from "react";
import "./Recommanded.css";
import { setOriginals } from "../Slices/MovieSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Originals() {
  const dispatch = useDispatch();
  const original = useSelector(setOriginals);
  return (
    <div className="Recommanded_box">
      <h4>Originals</h4>
      <div className="recommanded_content">
        {original &&
          original.map((movie, key) => (
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
      </div>
    </div>
  );
}

export default Originals;
