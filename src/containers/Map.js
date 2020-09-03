import React from "react";
import { ReactComponent as MapContent } from "../map.svg";
import styled from "styled-components";
import { get } from "../api/Request";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      colors: [],
    };
  }
  componentDidMount() {
    get("/emotion/prefectures").then((res) => {
      this.setState({
        colors: res,
      });
      this.setColors();
    });
  }
  render() {
    const MapArea = styled.div`
      position: absolute;
      top: 110px;
      left: 0%;
    `;
    return (
      <MapArea>
        <MapContent id="MapStyle" width="600px" height="600px" />
      </MapArea>
    );
  }

  setColors() {
    this.state.colors.map((color) => {
      document
        .getElementById("MapStyle")
        .getElementById(color.Prefecture)
        .setAttribute("fill", color.Color);
    });
  }
}

export default Map;
