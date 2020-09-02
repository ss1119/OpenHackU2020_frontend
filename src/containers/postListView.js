import React from "react";
import Post from "./postView.js";
import Delete from "./delete.js";
import "./postListView.css";

class postListView extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup_edit: false,
      showPopup_delete: false,
    };
  }

  togglePopup_delete() {
    this.setState({
      showPopup_delete: !this.state.showPopup_delete,
    });
  }

  render() {
    return (
      <div className="postList_area">
        {
          this.props.comments.map((comment) => {
            return <Post
                      key={comment.ID}
                      //感情
                      emotion_id={comment.EmotionID}
                      //投稿者の名前
                      user_name={comment.UserName}
                      //自分の投稿か否か(削除ボタンの表示判断)
                      mine={comment.UserName === localStorage.getItem("userName")}
                      //POPUPのON/OFFを切り替える関数を渡す
                      togglePopup={() => {
                        this.togglePopup_delete();
                      }}
                    />;
          })
        }
        {this.state.showPopup_delete ? (
        <Delete closePopup={this.togglePopup_delete.bind(this)} />
      ) : null}
      </div>
    );
  }
}

export default postListView;
