// Actions
const ADD_TO_CART = "my-app/Cart/ADD_TO-CART";
const REMOVE_FROM_CART = "my-app/Cart/REMOVE_FROM_CART";
import { ADD_ORDER } from "../Orders/Orders";
import { DELETE_PRODUCT } from "../Products/products";

import CartItem from "../../../models/cart-items";

const initialState = {
  items: {},
  totalAmount: 0,
};

// Action Creators
export function addToCart(product) {
  return { type: ADD_TO_CART, product: product };
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    productId: id,
  };
};

////////////////////////////////////////////////////////
const onAddToCart = (state, action) => {
  const addedProduct = action.product;
  const prodPrice = addedProduct.price;
  const prodTitle = addedProduct.title;

  let updatedOrNewCardItem;
  if (state.items[addedProduct.id]) {
    // already have the item in the cart
    updatedOrNewCardItem = new CartItem(
      state.items[addedProduct.id].quantity + 1,
      prodPrice,
      prodTitle,
      state.items[addedProduct.id].sum + prodPrice
    );
  } else {
    updatedOrNewCardItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
  }
  return {
    ...state,
    items: { ...state.items, [addedProduct.id]: updatedOrNewCardItem },
    totalAmount: state.totalAmount + prodPrice,
  };
};

const onRemoveFromCart = (state, action) => {
  const currentQuantity = state.items[action.productId].quantity;

  const selectedCartItem = state.items[action.productId];
  let updatedCartItems;
  if (currentQuantity > 1) {
    console.log("55===", selectedCartItem);
    const updatedCartItem = new CartItem(
      selectedCartItem.quantity - 1,
      selectedCartItem.productPrice,
      selectedCartItem.productTitle,
      selectedCartItem.sum - selectedCartItem.productPrice
    );
    console.log("61====", updatedCartItem);
    updatedCartItems = { ...state.items, [action.productId]: updatedCartItem };
  } else {
    updatedCartItems = { ...state.items };
    delete updatedCartItems[action.productId];
  }
  return {
    ...state,
    items: updatedCartItems,
    totalAmount: state.totalAmount - selectedCartItem.productPrice,
  };
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return onAddToCart(state, action);
    case REMOVE_FROM_CART:
      return onRemoveFromCart(state, action);
    case ADD_ORDER:
      return initialState;
    case DELETE_PRODUCT:
      if (!state.items[action.pid]) {
        return state;
      }
      const updateItems = { ...state.items };
      const itemTotal = state.items[action.pid].sum;
      delete updateItems[action.pid];
      return {
        ...state,
        items: updateItems,
        totalAmount: state.totalAmount - itemTotal,
      };
    default:
      return state;
  }
}
