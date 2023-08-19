import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    favorite: [],
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
    addFavorite: (state, action) => {
      const existingProductIndex = state.favorite.findIndex(
        (favorite) => favorite._id === action.payload._id
      );
      if (existingProductIndex !== -1) {
        state.favorite[existingProductIndex].favQuantity += 1;
      } else {
        state.favorite.push({ ...action.payload, favQuantity: 1 });
      }
      state.favQuantity += 1;
    },
    clearFavorite: (state) => {
      state.favQuantity = null;
      state.favQuantity = [];
      state.favorite = [];
    },
    updateFavQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.favorite.find(
        (product) => product._id === productId
      );
      if (!product) return;

      const updatedQuantity = product.quantity + quantity;
      if (updatedQuantity >= 1) {
        product.quantity = updatedQuantity;
        state.favQuantity += quantity;
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === productId
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.quantity -= product.quantity;
        state.total -= product.quantity * product.price;
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const {
  addProduct,
  clearCart,
  updateProductQuantity,
  addFavorite,
  clearFavorite,
  updateFavQuantity,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
