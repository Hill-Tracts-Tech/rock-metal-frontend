import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    favourite: [],
    favQuantity: 0,
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.quantity += 1;
      state.total += action.payload.price;
    },
    clearCart: (state) => {
      state.quantity = null;
      state.products = [];
      state.total = null;
    },
    updateProductQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.products.find(
        (product) => product._id === productId
      );
      if (!product) return;

      const updatedQuantity = product.quantity + quantity;
      if (updatedQuantity >= 1) {
        product.quantity = updatedQuantity;
        state.total += quantity * product.price;
        state.quantity += quantity;
      }
    },
    addFavourite: (state, action) => {
      const existingProductIndex = state.favourite.findIndex(
        (favourite) => favourite._id === action.payload._id
      );
      if (existingProductIndex !== -1) {
        state.favourite[existingProductIndex].favQuantity += 1;
      } else {
        state.favourite.push({ ...action.payload, favQuantity: 1 });
      }
      state.favQuantity += 1;
    },
    clearFavourite: (state) => {
      state.favQuantity = null;
      state.favQuantity = [];
    },
  },
});

export const {
  addProduct,
  clearCart,
  updateProductQuantity,
  addFavourite,
  clearFavourite,
} = cartSlice.actions;
export default cartSlice.reducer;
