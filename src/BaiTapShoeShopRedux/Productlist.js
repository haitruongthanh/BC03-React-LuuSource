import React, { Component } from "react";
import { connect } from "react-redux";
import Productitem from "./Productitem";

class Productlist extends Component {
  render() {
    return (
      <div className="py-5 row">
        {/* optional chaining */}
        {this.props.productList?.map((item, i) => {
          // console.log("du lieu", item);
          return (
            <Productitem
              // handleThemSanPham={this.props.handleThemSanPham}
              key={i}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { productList: state.shoeShopReducer.productList };
};

export default connect(mapStateToProps)(Productlist);
