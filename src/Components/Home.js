import React from "react";
import "./Home.css";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommanded from "./Recommanded";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import {
  setRecommanded,
  setNewDisney,
  setOriginals,
  setTrending,
  setMovies,
} from "../Slices/MovieSlice";
import { useEffect } from "react";
import { selectUserName } from "../Slices/UserSlice";
import db from "./Firebase";
function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommendeds = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommendeds = [...recommendeds, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommanded: recommendeds,
          newDidney: newDisneys,
          originals: originals,
          trending: trendings,
        })
      );
    });
  }, [userName]);

  return (
    <div className="home">
      <ImgSlider />
      <Viewers />
      <Recommanded />
      <NewDisney />
      <Originals />
      <Trending />
    </div>
  );
}

export default Home;
