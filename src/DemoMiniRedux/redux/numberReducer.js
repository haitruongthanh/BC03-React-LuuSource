import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./constants";

//Bước 2: redux
let initialState = {
  number: 0,
};

//Bước 3: redux
// export const numberReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "Tăng số lượng":
//       console.log("yes");
//       state.number += action.payload;
//       return { ...state };
//     case "Giảm số lượng":
//       console.log("no");
//       state.number -= action.payload;
//       //Shalow copy
//       return { ...state };
//     default:
//       return state;
//   }
// };

export const numberReducer = (state = initialState, { type, payload }) => {
  //destructuring es6
  switch (type) {
    case TANG_SO_LUONG:
      console.log("yes");
      state.number += payload;
      return { ...state };
    case GIAM_SO_LUONG:
      console.log("no");
      state.number -= payload;
      //Shalow copy
      return { ...state };
    default:
      return state;
  }
};

/* 
tạo biến initialState mặc định là object với key là number
*/
