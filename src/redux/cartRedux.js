import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
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
  },
});

export const { addProduct, clearCart, updateProductQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
