import { publicRequest, userRequest } from "../../requestMethods";
import {
  loginSuccess,
  updateSuccess,
  userFailure,
  userStart,
} from "../userSlice";

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

export const updateUser = async (dispatch, currentUser, userData) => {
  dispatch(userStart());
  try {
    const { data } = await userRequest.patch("/users/updateMe", {
      ...userData,
    });
    console.log("updateUser ran", { ...data, ...currentUser });
    dispatch(updateSuccess({ ...data, ...currentUser }));
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.message));
  }
};
