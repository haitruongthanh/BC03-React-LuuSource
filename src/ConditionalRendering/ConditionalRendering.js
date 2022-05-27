import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  render() {
    let isLogin = true;
    let handleLogin = () => {
      isLogin = true;
      console.log("isLogin", isLogin);
    };

    let handleLogout = () => {
      isLogin = false;
      console.log("isLogout", isLogin);
    };

    let renderContent = () => {
      if (isLogin) {
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
