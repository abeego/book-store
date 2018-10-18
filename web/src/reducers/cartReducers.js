export function cartReducers(state = {cart: []}, action) {
  switch (action.type) {
    case 'GET_CART':
      return {
        ...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).totalQty,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).totalQty,
      };
    case 'UPDATE_CARD_ITEM':
      return {
        ...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).totalQty,
      };
    case 'DELETE_CART_ITEM':
      return {
        ...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).totalQty,
      };
  }
  return state;
}

export function totals(payload) {
  const total = payload
    .map(cart => {
      return cart.price * cart.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0); // start summing from index '0'

  const totalQty = payload
    .map(cart => {
      return cart.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return {amount: total.toFixed(2), totalQty: totalQty};
}
