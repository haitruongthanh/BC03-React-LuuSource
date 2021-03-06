/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Productitem extends Component {
  render() {
    // console.log(this.props.data);
    let { name, price, image, shortDescription } = this.props.data; //destructering - es6

    return (
      <div className="card col-3 m-4">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">$ {price}</h5>
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{shortDescription}</p>
          <a
            className="btn btn-warning"
            onClick={() => {
              this.props.handleThemSanPham(this.props.data);
            }}
          >
            Add to Cart
          </a>
        </div>
      </div>
    );
  }
}
