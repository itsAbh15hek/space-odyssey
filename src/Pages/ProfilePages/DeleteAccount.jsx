import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";
import staryBG from "../../assets/staryBG.mp4";
import MainContainer from "../../Components/MainContainer";
import NavBar from "../../Components/NavBar";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/apiCalls/apiCalls";
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
      font-size: 38px;
      font-weight: lighter;
      margin: 0;
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
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 430px) {
    padding: 10px 40px;
    margin-top: -0px;
  }
`;
const DeleteAccount = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteUser(dispatch, password);
      navigate("/login");
    } catch (error) {}
  };
  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <Form action="" onSubmit={(e) => handleSubmit(e)}>
          <h1>Delete Account</h1>

          <Input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <Button type="submit">Delete Account</Button>
        </Form>
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default DeleteAccount;
