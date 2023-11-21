import { userRequest } from "../../requestMethods";
import {
  getQuizSuccess,
  quizFailure,
  quizStart,
  submitQuizSuccess,
} from "../quizSlice";

export const getQuizList = async (dispatch) => {
  try {
    dispatch(quizStart);
    const { data } = await userRequest.get("/quiz/getSubmittedQuizes/0");
    console.log("quiz-data", data.data.quizesSubmitted);
    dispatch(getQuizSuccess(data.data.quizesSubmitted));
  } catch (error) {
    console.log("quiz-data-err", error);
    dispatch(quizFailure());
  }
};
