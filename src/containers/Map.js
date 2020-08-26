import React from "react";
import { ReactComponent as MapContent } from "../map.svg";

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
    return <MapContent id="MapStyle" />;
  }

  setColors() {
    document.getElementById("MapStyle").getElementById("OSAKA").style.fill =
      "#ff66ff";
  }
}

export default Map;
