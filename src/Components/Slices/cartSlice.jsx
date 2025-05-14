// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   updateQuantity: (state, action) => {
  const { id, quantity } = action.payload;
  const existingItem = state.cartItems.find((i) => i.id === id);

  if (existingItem) {
    existingItem.quantity = quantity;
  }else {
        state.cartItems.push(action.payload);
      }
    },
    deleteCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { updateQuantity, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
