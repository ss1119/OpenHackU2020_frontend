import React from "react";
import postListView from "./postListView.js";
import Edit from "./edit.js";
import "./myprofile.css";

class MyProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup_edit: false,
      comments: [],
    };
  }

  togglePopup_edit() {
    this.setState({
      showPopup_edit: !this.state.showPopup_edit,
    });
  }

  render() {
    return (
      <div>
        <div className="profile_area">
          <div className="profile_titlearea">
            <img
              src={`${process.env.PUBLIC_URL}/Button/人物アイコン.png`}
              className="profile_icon"
              alt="profile"
            ></img>
            <div className="profile_title">profile</div>
          </div>
        </div>
        <div className="name_area">
          <div className="name_title">name</div>
          <div className="name_flame">
            <div className="name">{localStorage.getItem("userName")}</div>
            <img
              src={`${process.env.PUBLIC_URL}/Button/editボタン.png`}
              onClick={this.togglePopup_edit.bind(this)}
              className="edit_icon"
              alt="edit"
            ></img>
          </div>
        </div>
        {/* TODO処理 */}
        {/* <postListView /> */}
        {this.state.showPopup_edit ? (
          <Edit closePopup={this.togglePopup_edit.bind(this)} />
        ) : null}
      </div>
    );
  }

  async getComments() {
    //TODO処理
  }
}

export default MyProfile;
