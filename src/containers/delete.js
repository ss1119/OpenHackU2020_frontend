import React from "react";
import "./delete.css";
import { deleteRequest } from "../api/Request";
import { Link } from "react-router-dom";
import Loading from "./loading";


class Delete extends React.Component {
  constructor() {
    super();
    this.state = {
      idLoading: false,
    };
  }
  render() {
    return (
      <>
        <Loading isLoading={this.state.idLoading} />
        <div className="popup">
          <div className="delete_area">
            <div className="delete_message">
              <div className="delete_message_text">
                Are you sure
                <br />
                you want to delete
                <br />
                this post?
              </div>
            </div>
            <button className="cancel_button" onClick={this.props.closePopup}>
              <span className="cancel_button_text">CANCEL</span>
            </button>
            <Link to="/profile">
              <button
                className="delete_button"
                onClick={this.deletePost.bind(
                  this,
                  this.props.comment_id,
                  this.props.response_id
                )}
              >
                <span className="delete_button_text">DELETE</span>
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  deletePost(comment_id, response_id) {
    console.log(comment_id);
    console.log(response_id);
    if (comment_id) this.deleteComment(comment_id);
    else this.deleteRespons(response_id);
  }

  deleteComment(id) {
    this.setState({
      isLoading: true,
    });
    deleteRequest("/comment/delete", { comment_id: id }).then(() => {
      this.setState({
        isLoading: false,
      });
      this.props.closePopup();
    });
  }

  deleteResponse(id) {
    this.setState({
      isLoading: true,
    });
    deleteRequest("/comment/response/delete", { response_id: id }).then(() => {
      this.setState({
        isLoading: false,
      });
      this.props.closePopup();
    });
  }
}

export default Delete;
