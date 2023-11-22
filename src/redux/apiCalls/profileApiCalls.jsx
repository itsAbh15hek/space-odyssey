import axios from "axios";
import { profileFailure, profileStart, profileSuccess } from "../profileSlice";

export const getProfile = async (dispatch, TOKEN) => {
  dispatch(profileStart());
  try {
    const res = await axios.get(
      "https://space-odyssey.onrender.com/users/profile",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    const quizData = await axios.get(
      "https://space-odyssey.onrender.com/quiz/getSubmittedQuizes/0",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
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
