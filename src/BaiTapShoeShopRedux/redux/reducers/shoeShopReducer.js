import { dataShoeShop } from "../../dataShoeShop";
import { ADD_TO_CART } from "./../constants/constants";

let initialState = {
  productList: dataShoeShop,
  gioHang: [],
};

export const shoeShopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      console.log("yes");
      break;

    default:
      return state;
  }
};
