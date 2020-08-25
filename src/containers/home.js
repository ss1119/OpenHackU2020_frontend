import React from "react";
import "./home.css";
import AddPage from "./add.js";

class Home extends React.Component {
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
        <AddPage />
      </div>
    );
  }
}

export default Home;
