import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import staryBG from "../assets/staryBG.mp4";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import ScrollableComponent from "../Components/ScrollableComponent";
import NPOTD from "../Components/NewsSpecific/NPOTD";
import FollowedAgencies from "../Components/NewsSpecific/FollowedAgencies";
import NewsList from "../Components/NewsSpecific/NewsList";
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

const Heading = styled.h1`
  color: #ea5454;
  width: 100%;
  font-size: 50px;
  font-family: "Expletus Sans", sans-serif;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 750px) {
    font-size: 30px;
  }
`;
const News = () => {
  const currentUser = useSelector(
    (state) => state?.user?.currentUser?.data?.user
  );
  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <ScrollableComponent>
          <Heading>News Section</Heading>
          <NPOTD />
          {currentUser && <FollowedAgencies />}
          <NewsList />
        </ScrollableComponent>
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default News;
