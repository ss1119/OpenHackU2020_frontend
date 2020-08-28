import React from "react";
import "./home.css";
import "./signUp.css";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <div className="title_back">
          <div className="title_area"></div>
          <div className="title_text">title</div>
        </div>
        <div className="under_back">
          <div className="under_back_rectangle"></div>
          <div className="under_back_ellipse"></div>
        </div>
        <div className="signup_back">
          <div className="signup_area">
            <div className="signup_flame">
              <img
                src={`${process.env.PUBLIC_URL}/Button/人物アイコン.png`}
                className="signupman_icon"
                alt="sign up"
              ></img>
              <div className="signup_title">sign up</div>
            </div>
            <input
              name="Name"
              type="text"
              placeholder="your name"
              className="signup_form"
            ></input>
            <Link to="/home">
              <div className="OK_button">
                <div className="OK_button_text">OK</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
