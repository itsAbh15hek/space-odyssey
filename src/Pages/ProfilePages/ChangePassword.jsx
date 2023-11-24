import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";
import staryBG from "../../assets/staryBG.mp4";
import MainContainer from "../../Components/MainContainer";
import NavBar from "../../Components/NavBar";
import { userRequest } from "../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../redux/apiCalls/apiCalls";
import Loader from "../../Components/Loader";

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
    color: red;
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

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.user.isFetching);
  const errorMsg = useSelector((state) => state.user.errorMsg);
  const error = useSelector((state) => state.user.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        {isFetching && <Loader />}
        {!isFetching && (
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

            {error && <span>{errorMsg}</span>}
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default ChangePassword;
