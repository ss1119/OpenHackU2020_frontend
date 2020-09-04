import React from "react";
import { ReactComponent as MapContent } from "../map.svg";
import styled from "styled-components";
import { get } from "../api/Request";
import "./postListViewPopup.css";
import PostListView from "./postListView";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      colors: [],
      comments: [],
      showPopup: false,
    };
  }
  componentDidMount() {
    get("/emotion/prefectures").then((res) => {
      this.setState({
        colors: res,
      });
      this.setColorsAndEvent();
    });
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
      <div>
        <MapArea>
          <MapContent id="MapStyle" />
        </MapArea>
        {this.state.showPopup ? (
          <Popup
            closePopup={this.togglePopup.bind(this)}
            comments={this.state.comments}
          />
        ) : null}
      </div>
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
      element.addEventListener(
        "click",
        async () => {
          await get("/emotion/" + color.Prefecture + "/comments").then(
            (res) => {
              this.setState({
                comments: res,
              });
              console.log(this.state.comments);
            }
          );
          this.togglePopup();
        },
        false
      );
    });
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
}

class Popup extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="popup_from_map">
        <div className="popup_inner_from_map">
          <PostListView comments={this.props.comments} />
        </div>
      </div>
    );
  }
}

export default Map;
