import { publicRequest } from "../../requestMethods";
import { loginSuccess, userFailure, userStart } from "../userSlice";

export const login = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/users/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.message));
  }
};

export const signup = async (dispatch, user) => {
  dispatch(userStart());
  console.log("first", user);
  try {
    const res = await publicRequest.post("/users/signup", user);
    // console.log("signUpRes", res.data);
    login(dispatch, { username: user.username, password: user.password });
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.message));
  }
};
