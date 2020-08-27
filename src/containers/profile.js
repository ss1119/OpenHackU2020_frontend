import React from "react";
import "./profile.css";
import "./home.css";
import styled from "styled-components";
import AddPage from "./add.js";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const HomeArea = styled.div`
      width: 375px;
      height: 812px;
    `;
    return (
      <HomeArea>
        <div className="title_back">
          <div className="title_area"></div>
          <div className="title_text">title</div>
        </div>
        <div className="under_back">
          <div className="under_back_rectangle"></div>
          <div className="under_back_ellipse"></div>
        </div>
        <AddPage />
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/Button/家のアイコン素材_白.png`}
            className="home_button"
            alt="home"
          ></img>
        </Link>
        <img
          src={`${process.env.PUBLIC_URL}/Button/横顔アイコン_グレー.png`}
          className="profile_button"
          alt="profile"
        ></img>
      </HomeArea>
    );
  }
}

export default Home;
