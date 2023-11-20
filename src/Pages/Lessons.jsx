import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import staryBG from "../assets/staryBG.mp4";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import ListItem from "../Components/ListItem";
import ListHeader from "../Components/ListHeader";
import { publicRequest } from "../requestMethods";
import Loader from "../Components/Loader";

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

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [status, setStatus] = useState(1);

  const getData = async () => {
    setStatus(1);
    try {
      const { data } = await publicRequest.get("/lessons/");
      setLessons(data.data);
      setStatus(0);
    } catch (err) {
      console.log("error", err);
      setStatus(-1);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <ListHeader title={"Lessons"} />
        {status === 1 && <Loader />}
        {status === 0 &&
          lessons.map((lesson) => (
            <ListItem
              image={
                "https://img.freepik.com/free-photo/low-angle-shot-mesmerizing-starry-sky_181624-27925.jpg?w=1380&t=st=1700488570~exp=1700489170~hmac=8ba5ad7121161d05b573607efc41458719265e2bf73bdd565d83726f8440af06"
              }
              key={lesson.id}
              name={lesson.DisplayName}
              path={lesson.id}
            />
          ))}
        {status === -1 && <p>Something went wrong</p>}
      </MainContainer>
      <NavBar />
    </Main>
  );
};

export default Lessons;
