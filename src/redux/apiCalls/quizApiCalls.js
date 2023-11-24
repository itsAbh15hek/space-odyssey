import { publicRequest, userRequest } from "../../requestMethods";
import {
  getQuizSuccess,
  quizFailure,
  quizStart,
  submitQuizSuccess,
} from "../quizSlice";

export const getQuizes = async (dispatch, currentUser) => {
  dispatch(quizStart());
  try {
    const { data } = currentUser
      ? await userRequest("/quiz/getQuizes/0")
      : await publicRequest("/quiz/getQuizes/0");
    dispatch(getQuizSuccess(data?.data?.quizes));
  } catch (error) {
    dispatch(quizFailure());
  }
};
