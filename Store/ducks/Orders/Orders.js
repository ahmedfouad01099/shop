import Order from "../../../models/Order";
// Actions
export const ADD_ORDER = "my-app/Orders/ADD_ORDER";

const initialState = {
  orders: [],
};

// Action Creators
export const addOrder = (cartItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItems, amount: totalAmount },
  };
};

///////////////////////////////////////////////////////////

const onAddOrder = (state, action) => {
  const newOrder = new Order(
    new Date().toString(),
    action.orderData.items,
    action.orderData.amount,
    new Date()
  );
  return { ...state, orders: state.orders.concat(newOrder) };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ORDER:
      return onAddOrder(state, action);
    default:
      return state;
  }
}
