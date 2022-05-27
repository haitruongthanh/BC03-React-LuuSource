import React, { Component } from "react";
import Childcomponent from "./Child.component";
import PropsChildren from "./PropsChildren";
//Giao tiếp giữa các component (chia sẻ dữ liệu, con lấy dữ liệu từ cha, cha chứa function để con thực hiện), DemoProps là cha, ChildComponent là con

export default class DemoProps extends Component {
  state = {
    userName: "Alice",
  };

  handleChangeName = (name) => {
    this.setState({
      userName: name,
    });
  };

  render() {
    return (
      <div>
        <Childcomponent
          helloTitle={this.state.userName} //helloTitle tự đặt, đây là props
          handleOnClick={this.handleChangeName} //handleOnClick tự đặt, đây là props
        />
        <PropsChildren />
        <PropsChildren>Toi Yeu VietNamEse</PropsChildren>
      </div>
    );
  }
}

//HOC high order component - tái sử dụng code --> dùng props Children
