import React from "react";
import { ReactComponent as MapContent } from "../map.svg";
import styled from "styled-components";

class Map extends React.Component {
  state = {
    lat: null,
    lng: null,
    colors: { prefecture: "TOKYO", color: "#ff66ff" },
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
      }
    );
    this.setColors();
  }
  render() {
    const MapArea = styled.div`
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0%);
      -webkit-transform: translate(-50%, 0%);
      -ms-transform: translate(-50%, 0%);
    `;
    return (
      <MapArea>
        <MapContent id="MapStyle" />
      </MapArea>
    );
  }

  setColors() {
    document.getElementById("MapStyle").getElementById("OSAKA").style.fill =
      "#ff66ff";
  }
}

export default Map;
