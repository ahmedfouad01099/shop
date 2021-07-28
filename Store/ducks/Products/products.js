import PRODUCTS from "../../../data/dummy-data";

// Actions
const LOAD = "my-app/products/LOAD";
export const DELETE_PRODUCT = "my-app/products/DELETE_PRODUCT";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    pid: PRODUCTS.filter((prod) => prod.id === productId)[0].id,
  };
};

/////////////////////////////////////////////////////////
const onDeleteProduct = (state, action) => {
  console.log("26", action.pid);
  return {
    ...state,
    userProducts: state.userProducts.filter(
      (product) => product.id !== action.pid
    ),
    availableProducts: state.availableProducts.filter(
      (product) => product.id !== action.pid
    ),
  };
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DELETE_PRODUCT:
      return onDeleteProduct(state, action);
    default:
      return state;
  }
}
