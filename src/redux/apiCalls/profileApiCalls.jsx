import axios from "axios";
import { profileFailure, profileStart, profileSuccess } from "../profileSlice";
import { userRequest } from "../../requestMethods";

export const getProfile = async (dispatch) => {
  dispatch(profileStart());
  try {
    const res = await userRequest.get("/users/profile");
    const quizData = await userRequest.get("/quiz/getSubmittedQuizes/0");
    dispatch(
      profileSuccess({
        user: res.data.data.user,
        quizList: quizData.data.data.quizesSubmitted,
      })
    );
  } catch (error) {
    dispatch(profileFailure());
  }
};
