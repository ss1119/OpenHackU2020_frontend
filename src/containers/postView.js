import React from "react";
import "./postView.css";
import Delete from "./delete.js";
import { convertIDtoContentColor, convertIDtoBorderColor } from "./color.js";

class postView extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup_delete: false,
    };
  }

  render() {
    return (
      <div
        className="post_frame"
        style={{
          background: convertIDtoContentColor(this.props.emotion_id),
          border: "2px solid " + convertIDtoBorderColor(this.props.emotion_id),
          borderRadius: "20px",
        }}
      >
        <img
          src={
            `${process.env.PUBLIC_URL}/face/` + this.props.emotion_id + `.png`
          }
          className="post_emotion"
          alt="emotion"
        ></img>
        {this.props.userName != "" ? (
          <span className="user_ame">{this.props.user_name}</span>
        ) : (
          <span className="post_num">{this.props.num}件の返信</span>
        )}
        {this.props.mine ? (
          <img
            src={`${process.env.PUBLIC_URL}/Button/削除ボタン.png`}
            onClick={() => {
              this.togglePopup_delete();
            }}
            className="post_garbage"
            alt="delete"
          ></img>
        ) : null}
        {this.state.showPopup_delete ? (
          <Delete
            closePopup={this.togglePopup_delete.bind(this)}
            comment_id={this.props.comment_id}
          />
        ) : null}
      </div>
    );
  }

  togglePopup_delete() {
    this.setState({
      showPopup_delete: !this.state.showPopup_delete,
    });
  }
}

export default postView;
