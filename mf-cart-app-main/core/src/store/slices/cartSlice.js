import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.value = [ ...state.value, action.payload ]
    },
    emptyCart: (state) => {
      state.value = [];
    }
  },
})

export const { addItemToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;