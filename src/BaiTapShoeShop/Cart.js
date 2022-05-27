import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div className="container">
        <div className="card mt-5 bg-light text-info">
          <div className="card-body">
            <h3>Tổng hợp giỏ hàng</h3>
          </div>
        </div>

        <table class="table my-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((item) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <div>
                      <button type="button" className="btn btn-danger">
                        Xóa
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
