import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";
//Bước 4: redux
export const rootReducerDemo = combineReducers({ numberReducer });

//key quản lý reducer con -> dùng key để quản lý giá trị từ các key trong reducerState
