import React, { Component } from "react";
import { Button, Modal } from "antd";

export default class ModalConfirm extends Component {
  render() {
    return (
      <Modal
        title="Bạn có muốn xóa sản phẩm???"
        visible={this.props.isOpenModal}
        onOk={this.props.handleCloseModal}
        onCancel={this.props.handleOpenModal}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}
