import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex > -1) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    increment: (state, action) => {
      const updatedItem = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cart: updatedItem };
    },

    decrement: (state, action) => {
      const updatedItem = state.cart
        .map((item) =>
          item.id === action.payload && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return { ...state, cart: updatedItem };
    },
  },
});

export const { increment, decrement, addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
