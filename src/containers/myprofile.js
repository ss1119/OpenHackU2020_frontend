import React from "react";
import Post from "./postView.js";
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
          <Post
            R={"255"}
            G={"51"}
            B={"51"}
            emotion={"A1"}
            num={"1"}
            mine={true}
          />
          <br />
          <br />
          <br />
          <Post
            R={"153"}
            G={"153"}
            B={"255"}
            emotion={"S3"}
            num={"0"}
            mine={true}
          />
        </div>
      </div>
    );
  }
}

export default MyProfile;
