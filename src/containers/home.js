import React from "react";
import styled from "styled-components";
import "./home.css";
import AddPage from "./add.js";
import Map from "./Map.js";

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
        <Map />
        <AddPage />
      </HomeArea>
    );
  }
}

export default Home;
