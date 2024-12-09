// Slice to handle the cart.

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    // To handle the cart items.
    addtoCart: (state, action) => {
      // to check if the item selected is already in the cart or not
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      // If yes, then increase the quantity
      if (itemIndex > -1) {
        state.cart[itemIndex].quantity += 1;
      // If no, then add the item to the cart.
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    // Increase the item quantity as soon as the add item is clicked.
    increment: (state, action) => {
      const updatedItem = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cart: updatedItem };
    },
    // Decreasing the item as soon as the remove button is clicked.
    decrement: (state, action) => {
      // Decrease the item 1 by 1
      const updatedItem = state.cart
        .map((item) =>
          item.id === action.payload && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        // And if the item has reduced to 0 then remove it from the cart.
        .filter((item) => item.quantity > 0);
      return { ...state, cart: updatedItem };
    },
  },
});

export const { increment, decrement, addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
