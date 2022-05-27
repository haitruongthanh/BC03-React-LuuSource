import React, { Component } from "react";

export default class Childcomponent extends Component {
  render() {
    return (
      <div className="container py-5">
        Hello {this.props.helloTitle} <br />
        <button
          className="btn btn-success"
          //   onClick={this.props.handleOnClick} //Không có tham số
          onClick={() => {
            this.props.handleOnClick("Bảy Đen");
          }}
        >
          Change name
        </button>
      </div>
    );
  }
}
