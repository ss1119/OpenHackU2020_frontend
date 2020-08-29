import React from "react";
import "./add.css";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      choice: false,
      your_emotion: "NONE",
    };
  }

  choice(emotion) {
    this.setState({ choice: true, your_emotion: emotion });
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="item_emotion">emotion</div>
          <div className="line_emotion"></div>
          <div className="emotions_button">
            <div className="joy_back"></div>
            <img
              src={`${process.env.PUBLIC_URL}/face/J1.png`}
              className="j1_button"
              onClick={this.choice.bind(this, "J1")}
              alt="喜"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/face/J2.png`}
              className="j2_button"
              onClick={this.choice.bind(this, "J2")}
              alt="喜"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/face/J3.png`}
              className="j3_button"
              onClick={this.choice.bind(this, "J3")}
              alt="喜"
            ></img>
            <div className="angry_back"></div>
            <img
              src={`${process.env.PUBLIC_URL}/face/A1.png`}
              className="a1_button"
              onClick={this.choice.bind(this, "A1")}
              alt="怒"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/face/A2.png`}
              className="a2_button"
              onClick={this.choice.bind(this, "A2")}
              alt="怒"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/face/A3.png`}
              className="a3_button"
              onClick={this.choice.bind(this, "A3")}
              alt="怒"
            ></img>
            <div className="sad_back"></div>
            <img
              src={`${process.env.PUBLIC_URL}/face/S1.png`}
              className="s1_button"
              onClick={this.choice.bind(this, "S1")}
              alt="哀"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/face/S2.png`}
              className="s2_button"
              onClick={this.choice.bind(this, "S2")}
              alt="哀"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/face/S3.png`}
              className="s3_button"
              onClick={this.choice.bind(this, "S3")}
              alt="哀"
            ></img>
            <div className="happy_back"></div>
            <img
              src={`${process.env.PUBLIC_URL}/face/H1.png`}
              className="h1_button"
              onClick={this.choice.bind(this, "H1")}
              alt="楽"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/face/H2.png`}
              className="h2_button"
              onClick={this.choice.bind(this, "H2")}
              alt="楽"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/face/H3.png`}
              className="h3_button"
              onClick={this.choice.bind(this, "H3")}
              alt="楽"
            ></img>
          </div>
          <div className="item_youremotion">your emotion</div>
          <div className="line_youremotion"></div>
          {this.state.choice ? (
            <img
              src={
                `${process.env.PUBLIC_URL}/face/` +
                this.state.your_emotion +
                `.png`
              }
              className="choice_emotion"
              alt="your emotion"
            ></img>
          ) : null}
          <div className="item_comment">comment</div>
          <div className="line_comment"></div>
          <input name="comment" type="text" className="comment_area" />
          <img
            src={`${process.env.PUBLIC_URL}/Button/戻るボタン.png`}
            onClick={this.props.closePopup}
            className="back_button"
            alt="戻る"
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
        <a onClick={this.togglePopup.bind(this)} className="plus_button_area">
          <a className="plus_button_text">+</a>
        </a>
        {this.state.showPopup ? (
          <Popup text="" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default Add;
