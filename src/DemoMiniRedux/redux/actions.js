//Action creator
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./constants";

export const tangSoLuongAction = (soLuong) => {
  return {
    type: TANG_SO_LUONG,
    payload: soLuong,
  };
};

export const giamSoLuongAction = (soLuong) => {
  return {
    type: GIAM_SO_LUONG,
    payload: soLuong,
  };
};
