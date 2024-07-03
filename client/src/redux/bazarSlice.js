import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: 'bazar',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter((item) => item.id !== action.payload.id);
    },
    resetCart: (state) => {
      state.productData = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    addUser: (state, action)=>{
      state.userInfo= action.payload;
    },
    removeUser: (state, action)=>{
      state.userInfo= null;
      },
  },
});

export const { addUser, removeUser, addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity } = bazarSlice.actions;
export default bazarSlice.reducer;
