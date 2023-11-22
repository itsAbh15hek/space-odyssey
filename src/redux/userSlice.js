import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    errorMsg: null,
  },
  reducers: {
    userStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    refreshSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
    deleteUserSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
    userFailure: (state, action) => {
      state.isFetching = false;
      state.errorMsg = action.payload;
      state.error = true;
    },
    logOut: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
  },
});

export const {
  userStart,
  loginSuccess,
  deleteUserSuccess,
  logoutSuccess,
  refreshSuccess,
  userFailure,
  logOut,
} = userSlice.actions;
export default userSlice.reducer;
