import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ProductsReducer from "./Store/ducks/products";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({ products: ProductsReducer });

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
