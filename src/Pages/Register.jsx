import React, { useEffect } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import staryBG from "../assets/staryBG.mp4";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

  font-family: "Expletus Sans", sans-serif;
`;

const Register = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(
    (state) => state?.user?.currentUser?.data?.user
  );

  useEffect(() => {
    if (currentUser) navigate("/user");
  }, []);
  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <Form action="" className="register">
          <h1>Create an Account</h1>

          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Confirm Password" />
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
