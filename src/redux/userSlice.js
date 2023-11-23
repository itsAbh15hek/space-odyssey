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
      state.errorMsg = null;
      state.currentUser = action.payload;
    },
    updateSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.errorMsg = null;
      state.currentUser = action.payload;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
      state.errorMsg = null;
    },
    deleteUserSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
      state.errorMsg = null;
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
      state.errorMsg = null;
    },
  },
});

export const {
  userStart,
  loginSuccess,
  deleteUserSuccess,
  logoutSuccess,
  updateSuccess,
  userFailure,
  logOut,
} = userSlice.actions;
export default userSlice.reducer;
