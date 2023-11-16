import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    quizList: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    profileStart: (state) => {
      state.isFetching = true;
    },
    profileSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.user = action.payload;
    },
    quizFetchSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.quizList = action.payload;
    },

    profileFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  profileStart,
  profileFailure,
  profileSuccess,
  quizFetchSuccess,
} = profileSlice.actions;
export default profileSlice.reducer;
