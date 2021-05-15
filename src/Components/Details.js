import React from "react";
import "./Details.css";
import img1 from "../images/play-icon-black.png";
import img2 from "../images/play-icon-white.png";
import img3 from "../images/group-icon.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "./Firebase";
function Details() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
  return (
    <div className="details">
      <div className="details_container">
        <img
          className="details_img"
          alt={detailData.title}
          src={detailData.backgroundImg}
        />
      </div>
      <div className="title_img_container">
        <img
          className="title_img"
          alt={detailData.title}
          src={detailData.titleImg}
        />
      </div>
      <div className="details_content_cotainer">
        <div className="details_content">
          <button className="details_button">
            <img src={img1} />
            <span className="details_span">PLAY</span>
          </button>

          <button className="trailer_button">
            <img src={img2} className="trailer_img" />
            <span className="details_span">TRAILER</span>
          </button>
          <div className="plus">
            <span />
            <span />
          </div>
          <div className="gropuwatch_container">
            <div className="gropuwatch">
              <img src={img3} className="gropuwatch_img" />
            </div>
          </div>
        </div>
        <div className="subtitles">{detailData.subTitle}</div>
        <div className="description">{detailData.description}</div>
      </div>
    </div>
  );
}

export default Details;
