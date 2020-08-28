import React from "react";
import "./edit.css";

class Edit extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="edit_area">
          <div className="edit_flame">
            <img
              src={`${process.env.PUBLIC_URL}/Button/人物アイコン.png`}
              className="editman_icon"
              alt="profile"
            ></img>
            <div className="edit_title">edit</div>
          </div>
          <input
            name="newName"
            type="text"
            placeholder="new name"
            className="edit_form"
          ></input>
          <div className="OK_button" onClick={this.props.closePopup}>
            <div className="OK_button_text">OK</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
