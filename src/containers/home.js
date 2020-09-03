import React from "react";
import styled from "styled-components";
import "./home.css";
import AddPage from "./add.js";
import Map from "./Map.js";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isNotZoom: true,
    };
  }

  zoom() {
    document.getElementById("MapStyle").setAttribute("width", "5000px");
    document.getElementById("MapStyle").setAttribute("height", "5000px");
    //this.setState({
    //  isNotZoom: !this.state.isNotZoom,
    //});
  }

  render() {
    const HomeArea = styled.div`
      width: 375px;
      height: 812px;
    `;
    return (
      <HomeArea>
        <Map />
        <div className="title_back">
          <div className="title_area">
            <div className="title_text">title</div>
          </div>
        </div>
        <div className="under_back">
          <div className="under_back_rectangle">
            <div className="under_back_ellipse"></div>
            <Link to="/home">
              <img
                src={`${process.env.PUBLIC_URL}/Button/家のアイコン素材_グレー.png`}
                className="home_button"
                alt="home"
              ></img>
            </Link>
            <Link to="/profile">
              <img
                src={`${process.env.PUBLIC_URL}/Button/横顔アイコン_白.png`}
                className="profile_button"
                alt="profile"
              ></img>
            </Link>
          </div>
          {this.state.isNotZoom ? (
            <div className="zoom_button">
              <img
                src={`${process.env.PUBLIC_URL}/Button/拡大アイコン.png`}
                className="zoom_button_icon"
                alt="zoom"
                onClick={() => this.zoom()}
              ></img>
            </div>
          ) : null}
        </div>
        <AddPage />
      </HomeArea>
    );
  }
}

export default Home;
