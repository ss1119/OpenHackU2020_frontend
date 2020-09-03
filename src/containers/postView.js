import React from "react";
import "./postView.css";

const postView = (props) => {
  return (
    <div
      className="post_frame"
      style={{
        background:
          "rgba(" + props.R + "," + props.G + "," + props.B + ", 0.3)",
        border:
          "1px solid rgba(" + props.R + "," + props.G + "," + props.B + ", 1)",
      }}
    >
      <div
        className="post_fill"
        onClick={() => {
          props.togglePopup_detail();
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/face/` + props.emotion + `.png`}
          className="post_emotion"
          alt="emotion"
        ></img>
        <div className="post_num">{props.num}件の返信</div>
      </div>
      {props.mine ? (
        <img
          src={`${process.env.PUBLIC_URL}/Button/削除ボタン.png`}
          onClick={() => {
            props.togglePopup_delete();
          }}
          className="post_garbage"
          alt="delete"
        ></img>
      ) : null}
    </div>
  );
};

export default postView;
