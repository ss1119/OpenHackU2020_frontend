import React from "react";
import "./delete.css";

class Delete extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="delete_area">
          <div className="delete_message">
            <div className="delete_message_text">
              Are you sure
              <br />
              you want to delete
              <br />
              this post?
            </div>
          </div>
          <div className="cancel_button" onClick={this.props.closePopup}>
            <div className="cancel_button_text">CANCEL</div>
          </div>
          <div className="delete_button" onClick={this.props.closePopup}>
            <div className="delete_button_text">DELETE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Delete;
