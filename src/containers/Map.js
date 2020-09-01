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
      this.setColorsAndEvent();
    });
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

  async setColorsAndEvent() {
    this.state.colors.map((color) => {
      let element = document
        .getElementById("MapStyle")
        .getElementById(color.Prefecture);
      //色塗り
      element.setAttribute("fill", color.Color);
      //イベント処理
      element.addEventListener("click", () => {
        get("/emotion/"+color.Prefecture+"/comments").then((res) => {
          console.log(res)
          //コメント一覧を表示するコンポーネント呼び出し
          //データ渡す
        });
      }, false)
    });
  }
}

export default Map;
