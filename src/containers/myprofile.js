import React from "react";
import PostListView from "./postListView.js";
import Edit from "./edit.js";
import "./myprofile.css";
import { get } from "../api/Request.js";
import Loading from "./loading";

class MyProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup_edit: false,
      showPopup_delete: false,
      my_comments: [],
      page_num: 1,
      page_size: 3,
      selected_comment_id: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getComments(1).then(() => {
      console.log("passed");
    });
  }

  togglePopup_edit() {
    this.setState({
      showPopup_edit: !this.state.showPopup_edit,
    });
  }

  render() {
    return (
      <>
        <Loading isLoading={this.state.idLoading} />
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
          <div className="paginateContainer">
            <div className="post_title">post</div>
            {this.state.my_comments.length !== 0 ? (
              <PostListView
                className="postList"
                comments={this.state.my_comments}
              />
            ) : null}
            {this.state.my_comments.length !== 0 ? (
              <div className="buttonContainer">
                <button
                  className="scroll_button"
                  onClick={this.previousPage.bind(this)}
                >
                  ＜
                </button>
                <button
                  className="scroll_button"
                  onClick={this.nextPage.bind(this)}
                >
                  ＞
                </button>
              </div>
              ) : 
              <div className="buttonContainer">
                <button
                  className="scroll_button"
                  onClick={this.previousPage.bind(this)}
                >
                  ＜
                </button>
              </div>
               }
          </div>
          {this.state.showPopup_edit ? (
            <Edit closePopup={this.togglePopup_edit.bind(this)} />
          ) : null}
        </div>
      </>
    );
  }

  async getComments(pageNum) {
    this.setState({
      isLoading: true,
    });
    const myComments = await get(
      "emotion/mycomments/" +
        localStorage.getItem("userId") +
        "/" +
        pageNum +
        "/" +
        this.state.page_size
    );
    this.setState({
        my_comments: myComments,
        isLoading: false,
    });
  }

  previousPage() {
    let pageNum = this.state.page_num - 1;
    if (pageNum < 1) pageNum = 1;
    this.setState({
      page_num: pageNum,
    });
    this.getComments(pageNum).then(() => {
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
    });
  }
}

export default MyProfile;
