import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import staryBG from "../assets/staryBG.mp4";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { Link, useNavigate } from "react-router-dom";
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
  @media (max-width: 726px) {
    transform: scale(0.8);
    width: 95%;
  }
  @media (max-width: 726px) {
    transform: scale(0.8);

  }
  @media (max-width: 660px) {
    transform: scale(0.7);
    
  }
  @media (max-width: 450px) {
    transform: scale(0.6);
    span {
      font-size: 30px;
      width: max-content;
    }
  }
  @media (max-width: 380px) {
    transform: scale(0.5);
    h1 {
      font-size: 120px;
    }
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

  @media (max-width: 380px) {
    font-size: 30px;
  }
`;
const Button = styled.button`
  margin: 20px;
  padding: 20px 50px;
  background-color: #ea5455;
  border-radius: 40px;
  font-size: 20px;

  font-family: "Expletus Sans", sans-serif;

  @media (max-width: 730px) {
  }

  @media (max-width: 660px) {
    width: 600px;
  }

  @media (max-width: 380px) {
    font-size: 25px;
  }


`;

const Login = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(
    (state) => state?.user?.currentUser?.data?.user
  );
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, userData);
  };
  useEffect(() => {
    if (currentUser) navigate("/user");
  }, [currentUser]);

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
            type="password"
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
