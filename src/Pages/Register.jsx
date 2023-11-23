import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import staryBG from "../assets/staryBG.mp4";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/apiCalls/apiCalls";

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
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  overflow: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  h1 {
    font-family: "Expletus Sans", sans-serif;
    font-size: 60px;
    color: #ea5455;
    margin-bottom: 40px;

    @media (max-width: 800px) {
      font-size: 45px;
    }
    @media (max-width: 430px) {
      font-size: 30px;
    }

  }

  span {
    margin: 10px;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 20px 30px;
  border-radius: 30px;
  font-size: 20px;
  margin: 15px;
  background-color: #decdc3;
  color: rgba(45, 64, 89, 1);
  outline: none;

  @media (max-width: 800px) {
    padding: 10px 20px;
  }
`;
const Button = styled.button`
  margin: 20px;
  padding: 20px 40px;
  background-color: #ea5455;
  border-radius: 40px;
  font-size: 20px;

  font-family: "Expletus Sans", sans-serif;

  @media (max-width: 430px) {
    padding: 10px 40px;
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});
  const currentUser = useSelector(
    (state) => state?.user?.currentUser?.data?.user
  );

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(dispatch, userData);
  };

  useEffect(() => {
    if (currentUser) navigate("/user");
  }, []);
  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
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
            type="text"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <Input
            required
            type="text"
            placeholder="Confirm Password"
            name="passwordConfirm"
            onChange={(e) => handleChange(e)}
          />
          <Button type="submit">Register</Button>
          <span>
            <Link to={"/login"}>Already have an Account</Link>
          </span>
        </Form>
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default Register;
