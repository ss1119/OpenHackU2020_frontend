import React from "react";
import Post from "./postView.js";
import Edit from "./edit.js";
import Delete from "./delete.js";
import Detail from "./detail.js";
import "./myprofile.css";

class MyProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup_edit: false,
      showPopup_delete: false,
      showPopup_detail: false,
    };
  }

  togglePopup_edit() {
    this.setState({
      showPopup_edit: !this.state.showPopup_edit,
    });
  }
  togglePopup_delete() {
    this.setState({
      showPopup_delete: !this.state.showPopup_delete,
    });
  }
  togglePopup_detail() {
    this.setState({
      showPopup_detail: !this.state.showPopup_detail,
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
        <div className="post_area">
          <div className="post_title">post</div>
          <Post
            //背景色(感情から求めるようにできる？)
            R={"255"}
            G={"51"}
            B={"51"}
            //感情
            emotion={"4"}
            //返信の件数
            num={"1"}
            //自分の投稿か否か(削除ボタンの表示判断)
            mine={true}
            //POPUPのON/OFFを切り替える関数を渡す
            togglePopup_delete={() => {
              this.togglePopup_delete();
            }}
            togglePopup_detail={() => {
              this.togglePopup_detail();
            }}
          />
          <br />
          <br />
          <br />
          <br />
          <Post
            R={"153"}
            G={"153"}
            B={"255"}
            emotion={"9"}
            num={"0"}
            mine={true}
            togglePopup_delete={() => {
              this.togglePopup_delete();
            }}
            togglePopup_detail={() => {
              this.togglePopup_detail();
            }}
          />
        </div>
        {this.state.showPopup_edit ? (
          <Edit closePopup={this.togglePopup_edit.bind(this)} />
        ) : null}
        {this.state.showPopup_delete ? (
          <Delete closePopup={this.togglePopup_delete.bind(this)} />
        ) : null}
        {this.state.showPopup_detail ? (
          <Detail
            R={"153"}
            G={"153"}
            B={"255"}
            emotion={"9"}
            name={"hanako"}
            hour={"9"}
            minute={"38"}
            comment={"電車混みすぎ…"}
            closePopup={this.togglePopup_detail.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default MyProfile;
