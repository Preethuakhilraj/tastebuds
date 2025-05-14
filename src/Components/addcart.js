// import { useState } from "react";
// import { addCart as addCartAction } from "./slices/CustomerSlice";
// import { useDispatch } from "react-redux";

// export default function CartAdd() {
//   const [input, setInput] = useState();

//   const dispatch = useDispatch();

//   const addCart = () => {
//     if (input) {
//         dispatch(addCartAction(input));

//       setInput(" ");
//     }
//   };
//   return (
//     <>
//       <h3>Add New customer</h3>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={addCart}>Add new</button>
//       {/* <CustomerView customer={customer}></CustomerView> */}
//     </>
//   );
// }
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCart, updateQuantity, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;

