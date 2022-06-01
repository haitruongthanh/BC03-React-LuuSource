import React, { Component } from "react";
import ModalConfirm from "./ModalConfirm";

export default class Cart extends Component {
  render() {
    return (
      <div className="container">
        <ModalConfirm
          isOpenModal={this.props.isOpenModal}
          handleOpenModal={this.props.handleOpenModal}
          handleCloseModal={this.props.handleCloseModal}
        />
        <div className="card mt-5 bg-light text-info">
          <div className="card-body">
            <h3>Tổng hợp giỏ hàng</h3>
          </div>
        </div>

        <table className="table my-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((item, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => {
                        this.props.handleTangGiamSoLuong(item.id, 1);
                      }}
                    >
                      +
                    </button>
                    <span className="mx-4">{item?.soLuong}</span>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => {
                        this.props.handleTangGiamSoLuong(item.id, -1);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => {
                          this.props.handleXoaSanPham(item.id);
                        }}
                      >
                        X
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
