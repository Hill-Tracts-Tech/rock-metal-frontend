import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    favorite: [],
    favQuantity: 0,
    quantity: 0,
    deliveryCharge: 100,
    total: 0,
    email: null,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity +=
          action.payload.quantity;
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }

      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
      state.email = action.payload.email;
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
      if (!state.favorite) {
        state.favorite = [];
      }
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
      state.favorite = [];
    },
    updateFavQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.favorite.find(
        (product) => product._id === productId
      );
      if (!product) return;

      const updatedQuantity = product.favQuantity + quantity;
      if (updatedQuantity >= 1) {
        product.favQuantity = updatedQuantity;
        state.favQuantity += quantity;
      }
    },
    removeFromCart: (state, action) => {
      const removedProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (removedProduct) {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
        state.quantity -= removedProduct.quantity;
        state.total -= removedProduct.price * removedProduct.quantity;
      }
    },
    removeFromWishList: (state, action) => {
      const removedProduct = state.favorite.find(
        (product) => product._id === action.payload._id
      );
      if (removedProduct) {
        state.favorite = state.favorite.filter(
          (product) => product._id !== action.payload._id
        );
        state.favQuantity -= removedProduct.favQuantity;
      }
    },
    clear: (state) => {
      state.products = [];
      state.favorite = [];
      state.favQuantity = null;
      state.quantity = null;
      state.total = null;
      state.email = null;
    },
    deliveryCharge: (state, action) => {
      state.deliveryCharge = action.payload;
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
  removeFromCart,
  removeFromWishList,
  clear,
  deliveryCharge,
} = cartSlice.actions;
export default cartSlice.reducer;
