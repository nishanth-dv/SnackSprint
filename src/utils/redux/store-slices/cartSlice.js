import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload
      );
      if (itemIndex === -1)
        state.items.push({ name: action.payload, quantity: 1 });
      else state.items[itemIndex].quantity += 1;
    },

    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload
      );
      if (itemIndex === -1) return;
      if (state.items[itemIndex].quantity === 1)
        state.items.splice(itemIndex, 1);
      else state.items[itemIndex].quantity -= 1;
    },

    deleteItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload
      );
      if (itemIndex === -1) return;;
      state.items.splice(itemIndex, 1);
    },
  
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
