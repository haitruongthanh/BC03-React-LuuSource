import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

export const storeShoeShop = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //extention xem log trên redux
);
