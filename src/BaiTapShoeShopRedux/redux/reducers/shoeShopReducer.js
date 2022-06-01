import { dataShoeShop } from "../../dataShoeShop";

let initialState = {
  productList: dataShoeShop,
};

export const shoeShopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case value:

    //     break;

    default:
      return state;
  }
};
