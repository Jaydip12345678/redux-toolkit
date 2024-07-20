import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginLoading: false,
    loginSucces: [],
    loginError: '',
    username: ''
  },
  reducers: {
    loginRequest: (state) => {
      state.loginLoading = true;
      state.loginSucces = "";
    },
    loginSuccess: (state, action) => {
      state.loginLoading = false;
      state.loginSucces = action.payload;
    },
    loginError: (state, action) => {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
    userDetails: (state, action) => {
      state.username = action.payload;
    }
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginError,
  userDetails
} = authSlice.actions;

export default authSlice.reducer;
