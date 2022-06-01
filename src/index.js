import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducerDemo } from "./DemoMiniRedux/redux/rootReducer.demo";
import { storeShoeShop } from "./BaiTapShoeShopRedux/redux/store";

/* //Demominiredux
//Bước 5: redux
let store = createStore(
  rootReducerDemo,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //extention xem log trên redux
); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Bước 1: redux
  <Provider store={storeShoeShop}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
set up redux:

  index.js --> bọc component bởi thẻ Provider
  tạo file numberReducer.js (reducer con)
  tạo file rootReducer.demo.js (tổng reducer để kết nối các reducer con)



*/
