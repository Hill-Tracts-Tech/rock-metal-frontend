import { createSlice } from "@reduxjs/toolkit";

// Load guest cart from localStorage
const storedCart = JSON.parse(localStorage.getItem("guestCart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: storedCart, // Load from localStorage
    favorite: [],
    favQuantity: 0,
    quantity: storedCart.reduce((total, item) => total + item.quantity, 0),
    deliveryCharge: 120,
    total: storedCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ),
    email: null,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex !== -1) {
        // ✅ If product exists, update quantity instead of adding duplicate
        state.products[existingIndex].quantity += action.payload.quantity;
      } else {
        // ✅ Otherwise, add the new product
        state.products.push(action.payload);
      }

      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },

    clearCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;

      localStorage.removeItem("guestCart");
    },

    updateProductQuantity: (state, action) => {
      const product = state.products.find(
        (item) => item._id === action.payload.productId
      );

      if (product) {
        product.quantity = action.payload.quantity;
      }
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload._id
      );
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
      state.favQuantity = 0; // Fix null issue
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
      state.favQuantity = 0; // Fix null issue
      state.quantity = 0; // Fix null issue
      state.total = 0; // Fix null issue
      state.email = null;

      // Clear localStorage for guest users
      localStorage.removeItem("guestCart");
    },

    setDeliveryCharge: (state, action) => {
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
