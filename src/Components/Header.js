import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../images/logo.svg";
import home from "../images/home-icon.svg";
import search from "../images/search-icon.svg";
import watch from "../images/watchlist-icon.svg";
import orig from "../images/original-icon.svg";
import movi from "../images/movie-icon.svg";
import serie from "../images/series-icon.svg";
import { auth, provider } from "./Firebase";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
} from "../Slices/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { signInUserInfo, signOutUserInfo } from "../Slices/UserSlice";
import { useHistory } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);
  const [user, setUser] = useState("");

  const handleclick = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          dispatch(
            signInUserInfo({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            })
          );
        })
        .catch((err) => alert(err.message));
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(signOutUserInfo());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  useEffect(() => {
    userName &&
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          history.push("/home");
        }
      });
  }, [userName]);

  return (
    <div className="header">
      <a className="header_wrapper">
        <img src={logo} alt="top_logo" className="header_logo" />
      </a>
      <div className="menu">
        <a className="menu_tag">
          <img src={home} className="menu_img" />
          <span className="meanu_span">HOME</span>
        </a>
        <a className="menu_tag">
          <img src={search} className="menu_img" />
          <span className="meanu_span">SEARCH</span>
        </a>
        <a className="menu_tag">
          <img src={watch} className="menu_img" />
          <span className="meanu_span">WATCHLIST</span>
        </a>
        <a className="menu_tag">
          <img src={orig} className="menu_img" />
          <span className="meanu_span">ORIGINALS</span>
        </a>
        <a className="menu_tag">
          <img src={movi} className="menu_img" />
          <span className="meanu_span">MOVIES</span>
        </a>
        <a className="menu_tag">
          <img src={serie} className="menu_img" />
          <span className="meanu_span">SERIES</span>
        </a>
      </div>
      {!userName ? (
        <div className="login_right">
          <h2 onClick={handleclick}>LOGIN</h2>
        </div>
      ) : (
        <div className="avatar_container">
          <div className="avatar">
            <img src={userPhoto} alt="avatar" className="avatar_img" />
          </div>
          <button onClick={handleclick} className="sign_out">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
