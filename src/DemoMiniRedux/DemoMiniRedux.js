import React, { Component } from "react";
import { connect } from "react-redux";
// import { TANG_SO_LUONG } from "./redux/constants";
import { giamSoLuongAction, tangSoLuongAction } from "./redux/actions";

class DemoMiniRedux extends Component {
  render() {
    return (
      <div className="text-center display-4">
        <button
          type="button"
          className="btn btn-outline-success mr-5"
          onClick={this.props.handleTangNumber}
        >
          +
        </button>
        {this.props.giaTri}
        <button
          type="button"
          className="btn btn-outline-warning ml-5"
          onClick={this.props.handleGiamNumber}
        >
          -
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleTangNumber: () => {
      dispatch(tangSoLuongAction(10));
    },
    handleGiamNumber: () => {
      dispatch(giamSoLuongAction(10));
    },
  };
};

let mapStateToProps = (state) => {
  //LẤY STATE TRÊN REDUX REDUCER ĐỂ LƯU VỀ BIẾN giaTri
  return { giaTri: state.numberReducer.number };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoMiniRedux);
