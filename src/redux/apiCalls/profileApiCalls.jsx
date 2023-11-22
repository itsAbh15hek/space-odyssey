import { userRequest } from "../../requestMethods";
import { profileFailure, profileStart, profileSuccess } from "../profileSlice";

export const getProfile = async (dispatch) => {
  dispatch(profileStart());
  try {
    const res = await userRequest.get("/users/profile");
    const quizData = await userRequest.get("/quiz/getSubmittedQuizes/0");
    console.log("res.data", res.data.data.user);
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
