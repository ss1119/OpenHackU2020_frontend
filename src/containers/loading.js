import Modal from "react-modal";
import React from "react";
import styled from "styled-components";
import "./loading.css";

const ModalStyle = {
  overlay: {
    zIndex: 100,
  },
  content: {
    top: "50%",
    left: "50%",
    bottom: "auto",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    boder: "none",
    background: "rgba(0,0,0,0)",
  },
};

const LoadingLabel = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

class Loading extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isLoading} style={ModalStyle}>
        <div className="loading" />
        <LoadingLabel>Loading...</LoadingLabel>
      </Modal>
    );
  }
}

export default Loading;
