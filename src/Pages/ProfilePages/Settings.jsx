import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";
import staryBG from "../../assets/staryBG.mp4";
import MainContainer from "../../Components/MainContainer";
import NavBar from "../../Components/NavBar";
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
const Container = styled.div`
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
  a {
    margin: 20px;
    padding: 14px 20px;
    border: 1px solid #ea5455;
    border-radius: 5px;
    width: 600px;
    text-align: center;
    text-decoration: none;
    transition: all 0.25s ease;
    &:hover {
      letter-spacing: 1.2px;
      color: #ea5455;
      border: 1px solid #decdc3;
    }
  }
`;
const Settings = () => {
  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <Container>
          <h1>Settings</h1>
          <Link to={"/user/settings/editprofile"}> Edit Profile </Link>
          <Link to={"/user/settings/changepassword"}>Change Password</Link>
          <Link to={"/user/settings/deleteaccount"}>Delete Account</Link>
        </Container>
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default Settings;
