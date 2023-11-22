import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import staryBG from "../assets/staryBG.mp4";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";
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

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ status: 1, message: "" });
  const url = window.location.href.split("/")[2];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await publicRequest.post("/users/forgotPassword", {
        email: email,
        link: url,
      });
      console.log("first", data);
      setMessage({ status: 0, message: data?.message });
      setEmail("");
    } catch (error) {
      setMessage({ status: -1, message: error?.response?.data?.message });
    }
  };

  useEffect(() => {
    setMessage({ status: 1, message: "" });
  }, []);

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <Form action="" onSubmit={(e) => handleSubmit(e)} className="register">
          <h1>Reset Password</h1>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <span>{message?.message}</span>
          <Button type="submit">Submit</Button>
          <span>
            <Link to={"/login"}>Login</Link>
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

export default ResetPassword;
