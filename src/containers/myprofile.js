import React from "react";
import PostListView from "./postListView.js";
import Edit from "./edit.js";
import Delete from "./delete.js";
import Detail from "./detail.js";
import "./myprofile.css";
import { get } from "../api/Request.js";

class MyProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup_edit: false,
      showPopup_delete: false,
      showPopup_detail: false,
      my_comments: [],
      page_num: 1,
      page_size: 3,
    };
  }

  componentDidMount() {
    this.getComments(1).then(() => {
      console.log(this.state.my_comments);
    });
  }

  togglePopup_edit() {
    this.setState({
      showPopup_edit: !this.state.showPopup_edit,
    });
  }
  togglePopup_detail() {
    this.setState({
      showPopup_detail: !this.state.showPopup_detail,
    });
  }

  render() {
    return (
      <div className="profile_area">
        <div className="profile_titlearea">
          <img
            src={`${process.env.PUBLIC_URL}/Button/人物アイコン.png`}
            className="profile_icon"
            alt="profile"
          ></img>
          <div className="profile_title">profile</div>
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
        <div className="paginateContainer">
          {this.state.my_comments != [] ? (
            <PostListView
              className="postList"
              comments={this.state.my_comments}
            />
          ) : null}
          {this.state.showPopup_edit ? (
            <Edit closePopup={this.togglePopup_edit.bind(this)} />
          ) : null}
          {this.state.my_comments != [] ? (
            <div className="buttonContainer">
              <button onClick={this.previousPage.bind(this)}>＜前へ</button>
              <button onClick={this.nextPage.bind(this)}>次へ＞</button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }

  async getComments(pageNum) {
    const myComments = await get(
      "emotion/mycomments/" +
        localStorage.getItem("userId") +
        "/" +
        pageNum +
        "/" +
        this.state.page_size
    );
    if (myComments.length !== 0) {
      this.setState({
        my_comments: myComments,
      });
    }
  }

  previousPage() {
    let pageNum = this.state.page_num - 1;
    if (pageNum < 1) pageNum = 1;
    this.setState({
      page_num: pageNum,
    });
    this.getComments(pageNum).then(() => {
      console.log(this.state.my_comments);
    });
  }

  nextPage() {
    let pageNum = this.state.page_num + 1;
    if (this.state.my_comments.length != 0) {
      this.setState({
        page_num: pageNum,
      });
    }
    this.getComments(pageNum).then(() => {
      console.log(this.state.my_comments);
    });
  }
}

export default MyProfile;
