import { userRequest } from "../../requestMethods";
import {
  getQuizSuccess,
  quizFailure,
  quizStart,
  submitQuizSuccess,
} from "../quizSlice";

export const getQuizes = async (dispatch) => {
  dispatch(quizStart());
  try {
    const { data } = await userRequest("/quiz/getQuizes/0");
    console.log("quizes", data?.data?.quizes);
    dispatch(getQuizSuccess(data?.data?.quizes));
  } catch (error) {
    dispatch(quizFailure());
  }
};
