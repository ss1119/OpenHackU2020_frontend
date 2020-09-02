import React from "react";
import "./postView.css";
import {convertIDtoContentColor, convertIDtoBorderColor} from "./color.js";
const postView = (props) => {
  return (
    <div
      className="post_frame"
      style={{
        background: convertIDtoContentColor(props.emotion_id),
        border: "2px solid "+convertIDtoBorderColor(props.emotion_id),
        borderRadius: "20px"
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/face/` + props.emotion_id + `.png`}
        className="post_emotion"
        alt="emotion"
      ></img>
      {
        props.userName != "" ? (
          <span className="user_ame">{props.user_name}</span>
        ) : <span className="post_num">{props.num}件の返信</span> 
      }
      {
        props.mine ? (
          <img
            src={`${process.env.PUBLIC_URL}/Button/削除ボタン.png`}
            onClick={() => {
              props.togglePopup();
            }}
            className="post_garbage"
            alt="delete"
          ></img>
        ) : null
      }
    </div>
  );
};



export default postView;
