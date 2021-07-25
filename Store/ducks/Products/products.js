import PRODUCTS from "../../../data/dummy-data";

// Actions
const LOAD = "my-app/widgets/LOAD";
const CREATE = "my-app/widgets/CREATE";
const UPDATE = "my-app/widgets/UPDATE";
const REMOVE = "my-app/widgets/REMOVE";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}
