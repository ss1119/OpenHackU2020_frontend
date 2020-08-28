import React from "react";
import Post from "./postView.js";
import Edit from "./edit.js";
import "./myprofile.css";

class MyProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
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
            <div className="name">hanako</div>
            <img
              src={`${process.env.PUBLIC_URL}/Button/editボタン.png`}
              onClick={this.togglePopup.bind(this)}
              className="edit_icon"
              alt="edit"
            ></img>
          </div>
        </div>
        <div className="post_area">
          <div className="post_title">post</div>
          <Post
            //背景色(感情から求めるようにできる？)
            R={"255"}
            G={"51"}
            B={"51"}
            //感情
            emotion={"A1"}
            //返信の件数
            num={"1"}
            //自分の投稿か否か(削除ボタンの表示判断)
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
        {this.state.showPopup ? (
          <Edit closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default MyProfile;
