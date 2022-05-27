import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    isLogin: true,
  };

  render() {
    let handleLogin = () => {
      // this.state.isLogin = true; //Không gán trực tiếp, muốn thay đổi dùng setState()
      this.setState({ isLogin: true });
      console.log("isLogin", this.state.isLogin);
    };

    let handleLogout = () => {
      // this.state.isLogin = false; //Không gán trực tiếp, muốn thay đổi dùng setState()
      this.setState({ isLogin: false });
      console.log("isLogout", this.state.isLogin);
    };

    let renderContent = () => {
      if (this.state.isLogin) {
        return (
          <div>
            <h3 className="text-success">Hello Alice</h3>
            <button className="btn btn-success" onClick={handleLogout}>
              Logout
            </button>
          </div>
        );
      } else {
        return (
          <div>
            <h3 className="text-warning">Please enter name</h3>
            <button className="btn btn-warning" onClick={handleLogin}>
              Login
            </button>
          </div>
        );
      }
    };
    return <div className="container py-5">{renderContent()}</div>;

    // return <div className="container">Hello</div>;
    /*     return (
      <div>
        {" "}
        {isLogin ? (
          <h3 className="text-success">Hello ssAlice</h3>
        ) : (
          <h3 className="text-warning">Please enter name</h3>
        )}
      </div>
    ); */
  }
}
