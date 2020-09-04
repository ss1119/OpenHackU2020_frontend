import React from "react";
import "./edit.css";
import { patch } from "../api/Request";
import { Link } from "react-router-dom";
import Loading from "./loading";

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: localStorage.getItem("userName"),
      isLoading: false,
    };
  }
  render() {
    return (
      <>
        <Loading isLoading={this.state.idLoading} />
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
              value={this.state.userName}
              type="text"
              onChange={this.onChangeUserName.bind(this)}
              placeholder={this.state.userName}
              className="edit_form"
            ></input>
            <button className="OK_button" onClick={this.onEdit.bind(this)}>
              OK
            </button>
          </div>
          <input
            value={this.state.userName}
            type="text"
            onChange={this.onChangeUserName.bind(this)}
            placeholder={this.state.userName}
            className="edit_form"
          ></input>
          <Link to="/profile">
            <button className="OK_button" onClick={this.onEdit.bind(this)}>
              OK
            </button>
          </Link>
        </div>
      </>
    );
  }

  onChangeUserName(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  async onEdit() {
    if (this.state.userName === "") {
      alert("名前を入力してください");
    } else {
      this.setState({
        isLoading: true,
      });
      patch("/user/edit", {
        id: parseInt(localStorage.getItem("userId")),
        newName: this.state.userName,
      }).then((res) => {
        if (res.ID !== 0) {
          this.setState({
            isLoading: false,
          });
          localStorage.setItem("userName", this.state.userName);
          this.props.closePopup();
        } else {
          this.setState({
            isLoading: false,
          });
          alert("この名前は使用できません");
          this.props.closePopup();
        }
      });
    }
  }
}

export default Edit;
