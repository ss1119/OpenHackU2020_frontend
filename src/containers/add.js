import React from "react";
import "./add.css";
import BackButton from "./Button/戻るボタン.png";
import J1 from "./face/joy/J1.png";
import J2 from "./face/joy/J2.png";
import J3 from "./face/joy/J3.png";
import A1 from "./face/angry/A1.png";
import A2 from "./face/angry/A2.png";
import A3 from "./face/angry/A3.png";
import S1 from "./face/sad/S1.png";
import S2 from "./face/sad/S2.png";
import S3 from "./face/sad/S3.png";
import H1 from "./face/happy/H1.png";
import H2 from "./face/happy/H2.png";
import H3 from "./face/happy/H3.png";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="item_emotion">emotion</div>
          <div className="line_emotion"></div>
          <div className="emotions_button">
            <div className="joy_back"></div>
            <img src={J1} className="j1_button"></img>
            <img src={J2} className="j2_button"></img>
            <img src={J3} className="j3_button"></img>
            <div className="angry_back"></div>
            <img src={A1} className="a1_button"></img>
            <img src={A2} className="a2_button"></img>
            <img src={A3} className="a3_button"></img>
            <div className="sad_back"></div>
            <img src={S1} className="s1_button"></img>
            <img src={S2} className="s2_button"></img>
            <img src={S3} className="s3_button"></img>
            <div className="happy_back"></div>
            <img src={H1} className="h1_button"></img>
            <img src={H2} className="h2_button"></img>
            <img src={H3} className="h3_button"></img>
          </div>
          <div className="item_youremotion">your emotion</div>
          <div className="line_youremotion"></div>
          <div className="item_comment">comment</div>
          <div className="line_comment"></div>
          <input name="comment" type="text" className="comment_area" />
          <img
            src={BackButton}
            onClick={this.props.closePopup}
            className="back_button"
          ></img>
          <div className="add_button" onClick={this.props.closePopup}></div>
          <div className="add_button_text" onClick={this.props.closePopup}>
            add
          </div>
        </div>
      </div>
    );
  }
}

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div>
        <a
          onClick={this.togglePopup.bind(this)}
          className="plus_button_area"
        ></a>
        <a onClick={this.togglePopup.bind(this)} className="plus_button_text">
          +
        </a>
        {this.state.showPopup ? (
          <Popup text="" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default Add;
