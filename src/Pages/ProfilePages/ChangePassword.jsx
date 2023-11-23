import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";
import staryBG from "../../assets/staryBG.mp4";
import MainContainer from "../../Components/MainContainer";
import NavBar from "../../Components/NavBar";
import { userRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../redux/apiCalls/apiCalls";
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

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        updatePassword(dispatch, {
          password: oldPassword,
          newPassword: password,
          passwordConfirm: confirmPassword,
        });

        setOldPassword("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setOldPassword("");
      }
    } catch (error) {
      setMessage({ status: -1, message: error?.response?.data?.message });
    }
  };

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <Form action="" onSubmit={(e) => handleSubmit(e)}>
          <h1>Change Password</h1>
          <Input
            type="password"
            value={oldPassword}
            required
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old Password"
          />
          <Input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
          />
          <Input
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default ChangePassword;
