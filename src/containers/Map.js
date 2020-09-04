import React from "react";
import { ReactComponent as MapContent } from "../map.svg";
import styled from "styled-components";
import { get } from "../api/Request";
import "./postListViewPopup.css";
import PostListView from "./postListView";
import { Link } from "react-router-dom";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
      colors: [],
      comments: [],
      prefecture: "",
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
      top: 110px;
      left: 0%;
    `;
    return (
      <div>
        <MapArea>
          <MapContent id="MapStyle" width="600px" height="600px" />
        </MapArea>
        {this.state.showPopup ? (
          <Popup
            closePopup={this.togglePopup.bind(this)}
            comments={this.state.comments}
            prefecture={this.state.prefecture}
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
      if (color.Color != "#ffffff") {
        element.setAttribute("opacity", 0.4);
      }
      //イベント処理
      element.addEventListener(
        "click",
        async () => {
          await get("/emotion/" + color.Prefecture + "/comments/1/10").then(
            (res) => {
              this.setState({
                comments: res,
                prefecture: color.Prefecture
              });
            }
          );
          if(this.state.comments.length != 0) this.togglePopup();
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
    this.state = {
      comments: [],
      prefecture: "",
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      prefecture: this.props.prefecture,
      page_num: 1
    });
  }

  render() {
    return (
      <div className="popup_from_map">
        <div className="popup_inner_from_map">
          <div className="prefecture_area">
            <span className="prefecture_name">{this.props.prefecture}</span>
          </div>
          <div className="post_list_container">
            <PostListView comments={this.state.comments} />
          </div>
          <div className="popup_buttons">
            <Link to="/home">
              <img
                src={`${process.env.PUBLIC_URL}/Button/戻るボタン.png`}
                className="back_button_left"
                alt="戻る"
              ></img>
            </Link>
            {this.state.comments.length !== 0 ? (
            <div className="popup_buttonContainer">
              <button
                className="scroll_button"
                onClick={this.previousPage.bind(this)}
              >
                ＜
              </button>
              <button
                className="scroll_button"
                onClick={this.nextPage.bind(this)}
              >
                ＞
              </button>
            </div>
          ) : 
          <div className="popup_buttonContainer">
            <button
              className="scroll_button"
              onClick={this.previousPage.bind(this)}
            >
              ＜
            </button>
          </div>
            }
          </div>
        </div>
      </div>
    );
  }

  async getComments(pageNum) {
    await get("/emotion/" + this.state.prefecture + "/comments/"+pageNum+"/10").then(
      (res) => {
        this.setState({
          comments: res,
        });
      }
    );
  }

  previousPage() {
    let pageNum = this.state.page_num - 1;
    if (pageNum < 1) pageNum = 1;
    this.setState({
      page_num: pageNum,
    });
    this.getComments(pageNum).then(() => {
    });
  }

  nextPage() {
    let pageNum = this.state.page_num + 1;
    if (this.state.comments.length != 0) {
      this.setState({
        page_num: pageNum,
      });
    }
    this.getComments(pageNum).then(() => {
    });
  }
}

export default Map;
