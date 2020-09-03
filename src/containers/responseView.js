import React from "react";
import "./responseView.css";

const responseView = (props) => {
  return (
    <div className="response_frame">
      <div className="response_name">{props.name}</div>
      <div className="response_response">{props.response}</div>
      <div className="response_time">
        {props.hour}:{props.minute}
      </div>
    </div>
  );
};

export default responseView;
