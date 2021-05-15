import React from "react";
import "./Recommanded.css";
import { setTrending } from "../Slices/MovieSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Trending() {
  const dispatch = useDispatch();
  const trending = useSelector(setTrending);
  return (
    <div className="Recommanded_box">
      <h4>Trending</h4>
      <div className="recommanded_content">
        {trending &&
          trending.map((movie, key) => (
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

export default Trending;
