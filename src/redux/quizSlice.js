import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizList: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    quizStart: (state) => {
      state.isFetching = true;
    },
    submitQuizSuccess: (state, action) => {
      state.quizList.push(action.payload);
      state.isFetching = false;
    },
    getQuizSuccess: (state, action) => {
      state.quizList = [...action.payload];
      state.isFetching = false;
    },
    quizFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getQuizSuccess, quizFailure, quizStart, submitQuizSuccess } =
  quizSlice.actions;

export default quizSlice.reducer;
