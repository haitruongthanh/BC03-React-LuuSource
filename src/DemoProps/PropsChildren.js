import React, { Component } from "react";

export default class PropsChildren extends Component {
  render() {
    return <div>PropsChildren {this.props.children}</div>;
  }
}
