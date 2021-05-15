import React from "react";
import "./Login.css";
import top from "../images/cta-logo-one.svg";
import bottom from "../images/cta-logo-two.png";

function Login() {
  return (
    <div className="container">
      <div className="content">
        <div className="logo_container">
          <img src={top} alt="top_logo" className="top_logo" />
          <a className="butt">GET ALL THERE</a>
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img src={bottom} alt="bottom_logo" className="bottom_logo" />
        </div>

        <div className="bgimg"></div>
      </div>
    </div>
  );
}

export default Login;
