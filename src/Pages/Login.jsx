import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import staryBG from "../assets/staryBG.mp4";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls/apiCalls";
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
    font-size: 80px;
    color: #ea5455;
    margin-bottom: 40px;
  }
  span {
    margin: 10px;
  }

  @media (max-width: 1030px) {
    transform: scale(0.9);
  }
`;
const Input = styled.input`
  width: 600px;
  padding: 20px 30px;
  border-radius: 30px;
  font-size: 20px;
  margin: 15px;
  background-color: #decdc3;
  color: rgba(45, 64, 89, 1);
  outline: none;
`;
const Button = styled.button`
  margin: 20px;
  padding: 20px 40px;
  background-color: #ea5455;
  border-radius: 40px;
  font-size: 20px;

  font-family: "Expletus Sans", sans-serif;
`;

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, userData);
  };

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <Form action="" className="login">
          <h1>Login</h1>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="username"
            placeholder="Username"
          />
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="password"
            placeholder="Password"
          />
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Login
          </Button>
          <span>
            <Link to={"/resetpassword"}>Forgot Password?</Link>
          </span>
          <span>
            <Link to={"/register"}>Create a new Account</Link>
          </span>
        </Form>
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default Login;
