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
      state.user = action.payload.user;
      state.quizList = action.payload.quizList;
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
    clearProfile: (state) => {
      state.isFetching = false;
      state.error = false;
      state.user = null;
      state.quizList = [];
    },
  },
});

export const {
  profileStart,
  profileFailure,
  profileSuccess,
  quizFetchSuccess,
  clearProfile,
} = profileSlice.actions;
export default profileSlice.reducer;
