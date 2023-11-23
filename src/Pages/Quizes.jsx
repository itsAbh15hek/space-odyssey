import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import staryBG from "../assets/staryBG.mp4";
import MainContainer from "../Components/MainContainer";

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

const Quizes = () => {
  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer></MainContainer>

      <NavBar />
    </Main>
  );
};

export default Quizes;
