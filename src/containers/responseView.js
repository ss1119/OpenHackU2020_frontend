import React from "react";
import "./responseView.css";

class responseView extends React.Component {
  render() {
    return (
      <div className="response_frame">
        <div className="response_name">{this.props.user_name}</div>
        <div className="response_response">{this.props.response}</div>
      </div>
    );
  }
}

export default responseView;
