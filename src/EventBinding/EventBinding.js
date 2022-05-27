import React, { Component } from "react";

export default class EventBinding extends Component {
  handleSayHello = (username) => {
    console.log("Hello " + username);
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.handleSayHello("alice");
          }} /* Hàm có tham số, truyền vào một anfn có tham số */
          /* onClick = {this.sayHello} - hàm không có tham số */
          className="btn btn-warning"
        >
          Click Me
        </button>
      </>
    );
  }
}
