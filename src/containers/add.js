import React from "react";
import "./add.css";
import BackButton from "./Button/戻るボタン.png";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="item_emotion">emotion</div>
          <div className="line_emotion"></div>
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
