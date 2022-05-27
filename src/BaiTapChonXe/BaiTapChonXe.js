import React, { Component } from "react";
// import DemoState from "./../DemoState/DemoState";

export default class BaiTapChonXe extends Component {
  state = {
    urlImg: "./img/car/red-car.jpg",
    imgArr: [
      "./img/car/red-car.jpg",
      "./img/car/black-car.jpg",
      "./img/car/silver-car.jpg",
    ],
  };

  handleChangeCar = (url) => {
    this.setState({ urlImg: url });
  };

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.urlImg} alt="" />
          </div>
          <div className="col-6 d-flex flex-column py-3">
            <button
              onClick={() => {
                this.handleChangeCar("./img/car/red-car.jpg");
              }}
              className="btn btn-danger py-3 m-3"
            >
              Red Car
            </button>
            <button
              onClick={() => {
                this.handleChangeCar("./img/car/black-car.jpg");
              }}
              className="btn btn-dark py-3 m-3"
            >
              Black Car
            </button>
            <button
              onClick={() => {
                this.handleChangeCar("./img/car/silver-car.jpg");
              }}
              className="btn btn-secondary py-3 m-3"
            >
              Silver Car
            </button>
          </div>
        </div>
        {this.state.imgArr.map((url, index) => {
          return (
            <img
              key={index}
              style={{ width: "250px", margin: "10px" }}
              src={url}
              alt=""
            />
          );
          // return <DemoState />;
        })}
      </div>
    );
  }
}
