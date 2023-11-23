import { publicRequest, userRequest } from "../../requestMethods";
import {
  deleteUserSuccess,
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

export const updateUser = async (dispatch, userData) => {
  dispatch(userStart());
  try {
    const res = await userRequest.patch("/users/updateMe", {
      ...userData,
    });
    console.log("updateUser ran", res.data);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.message));
  }
};

export const updatePassword = async (dispatch, passwords) => {
  dispatch(userStart());
  try {
    const res = await userRequest.patch("/users/updateMyPassword", {
      ...passwords,
    });
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.message));
  }
};

export const deleteUser = async (dispatch, password) => {
  console.log("pass", { password: password });
  dispatch(userStart());
  try {
    const res = await userRequest.post("/users/deleteMe", {
      password: password,
    });
    console.log("delete", res);
    dispatch(deleteUserSuccess());
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.message));
  }
};
