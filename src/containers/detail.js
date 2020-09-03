import React from "react";
import "./detail.css";
import Response from "./responseView.js";

const detail = (props) => {
  return (
    <div className="popup">
      <div className="detail_area">
        <div
          className="detail_post_frame"
          style={{
            background:
              "rgba(" + props.R + "," + props.G + "," + props.B + ", 0.3)",
            border:
              "1px solid rgba(" +
              props.R +
              "," +
              props.G +
              "," +
              props.B +
              ", 1)",
          }}
          onClick={() => {
            props.togglePopup_detail();
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/face/` + props.emotion + `.png`}
            className="detail_post_emotion"
            alt="emotion"
          ></img>
          <div className="detail_post_name">{props.name}</div>
          <div className="detail_post_time">
            {props.hour}:{props.minute}
          </div>
          <div className="detail_post_line"></div>
          <div className="detail_post_comment">{props.comment}</div>
        </div>
        <textarea
          name="res"
          type="text"
          className="detail_response_area"
          maxLength="100"
          placeholder="response…"
        ></textarea>
        <img
          src={`${process.env.PUBLIC_URL}/Button/返信送信ボタン.png`}
          onClick={props.closePopup}
          className="detail_send_button"
          alt="返信送信"
        ></img>
        <div className="responses_area">
          <Response
            name={"taro"}
            response={"分かる…つら…"}
            hour={"9"}
            minute={"40"}
          />
          <br />
          <br />
          <br />
          <br />
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/Button/戻るボタン.png`}
          onClick={props.closePopup}
          className="detail_back_button"
          alt="戻る"
        ></img>
      </div>
    </div>
  );
};

export default detail;
