import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import staryBG from "../assets/staryBG.mp4";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/apiCalls/apiCalls";
import Loader from "../Components/Loader";
import { errorReset } from "../redux/userSlice";

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Form = styled.form`
  height: 80%;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  h1 {
    font-family: "Expletus Sans", sans-serif;
    font-size: 60px;
    color: #ea5455;
    margin-bottom: 30px;
  }
  @media (max-width: 1030px) {
    transform: scale(0.75);
  }
`;
const Input = styled.input`
  width: 600px;
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 20px;
  margin: 15px;
  background-color: #decdc3;
  color: rgba(45, 64, 89, 1);
  outline: none;
`;
const Button = styled.button`
  margin: 20px;
  padding: 15px 40px;
  background-color: #ea5455;
  border-radius: 40px;
  font-size: 20px;
  cursor: pointer;
  font-family: "Expletus Sans", sans-serif;
`;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});
  const currentUser = useSelector(
    (state) => state?.user?.currentUser?.data?.user
  );
  const isFetching = useSelector((state) => state.user.isFetching);
  const errorMsg = useSelector((state) => state.user.errorMsg);
  const error = useSelector((state) => state.user.error);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(dispatch, userData);
  };

  useEffect(() => {
    if (currentUser) navigate("/user");
    dispatch(errorReset());
  }, [currentUser]);
  useEffect(() => {
    dispatch(errorReset());
  }, []);
  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        {isFetching && <Loader />}
        {!isFetching && (
          <Form onSubmit={(e) => handleSubmit(e)} className="register">
            <h1>Create an Account</h1>

            <Input
              required
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => handleChange(e)}
            />
            <Input
              required
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <Input
              required
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            <Input
              required
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <Input
              required
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirm"
              onChange={(e) => handleChange(e)}
            />
            {error && <span>{errorMsg}</span>}
            <Button type="submit">Register</Button>
            <span>
              <Link to={"/login"}>Already have an Account? Login</Link>
            </span>
          </Form>
        )}
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default Register;
