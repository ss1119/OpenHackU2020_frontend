import React from "react";
import "./myprofile.css";

class MyProfile extends React.Component {
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
            <div className="name">hanako</div>
            <img
              src={`${process.env.PUBLIC_URL}/Button/editボタン.png`}
              className="edit_icon"
              alt="edit"
            ></img>
          </div>
        </div>
        <div className="post_area">
          <div className="post_title">post</div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
