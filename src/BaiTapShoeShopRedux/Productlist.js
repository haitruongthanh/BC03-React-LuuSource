import React, { Component } from "react";
import Productitem from "./Productitem";

export default class Productlist extends Component {
  render() {
    return (
      <div className="py-5 row">
        {this.props.productList.map((item, i) => {
          // console.log("du lieu", item);
          return (
            <Productitem
              handleThemSanPham={this.props.handleThemSanPham}
              key={i}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}
