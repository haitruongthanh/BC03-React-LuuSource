import React, { Component } from "react";
// import "./demoStyle.css";

import styles from "./demoStyle.module.css";

export default class DemoClass extends Component {
  render() {
    return <div className={styles.titleClass}>DemoClass</div>;
  }
}
