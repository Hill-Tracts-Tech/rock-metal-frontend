import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    registrationStart: (state) => {
      state.isLoading = true;
    },
    registrationSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registrationFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clear: (state) => {
      state.error = "";
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registrationFailure,
  registrationStart,
  registrationSuccess,
  clear,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
