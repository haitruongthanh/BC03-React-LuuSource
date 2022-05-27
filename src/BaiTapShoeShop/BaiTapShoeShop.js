import React, { Component } from "react";
import Cart from "./Cart";
import { dataShoeShop } from "./dataShoeShop";
import Productlist from "./Productlist";

export default class BaiTapShoeShop extends Component {
  state = {
    productList: dataShoeShop,
    gioHang: [],
  };

  handleAddToCart = (sanPham) => {
    //clone giỏ hàng mới, push item vào giỏ hàng mới, sau đó set ngược lại cho giỏ hàng ban đầu. Không thay đổi trực tiếp vào dữ liệu ban đầu. (đối với array)

    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((item) => {
      return item.id === sanPham.id;
    });
    if (index === -1) {
      // San pham duoc them chua co trong gio hang
      let newsSanPham = { ...sanPham, soLuong: 1 }; //es6 clone new object
      cloneGioHang.push(newsSanPham);
    } else {
      // San pham trong gio hang da co
      cloneGioHang[index].soLuong++;
    }

    // cloneGioHang.push(sanPham);
    this.setState({ gioHang: cloneGioHang });
  };

  handleXoaSanPham = (idSanPham) => {
    let cloneGioHang = [...this.state.gioHang];

    let index = cloneGioHang.findIndex((item) => {
      return item.id === idSanPham;
    });

    if (index !== -1) {
      cloneGioHang.splice(index, 1);
      this.setState({ gioHang: cloneGioHang });
    }
  };

  render() {
    return (
      <div>
        <Productlist
          handleThemSanPham={this.handleAddToCart}
          productList={this.state.productList}
        />
        <h4>Số lượng sản phẩm trong giỏ hàng: {this.state.gioHang.length} </h4>
        {this.state.gioHang.length > 0 && (
          <Cart
            gioHang={this.state.gioHang}
            handleXoaSanPham={this.handleXoaSanPham}
          />
        )}

        {/*         {this.state.gioHang.length ? (
          <Cart gioHang={this.state.gioHang} />
        ) : (
          " "
        )}//cách 2 */}
      </div>
    );
  }
}
