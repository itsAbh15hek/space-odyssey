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
                "https://firebasestorage.googleapis.com/v0/b/space-odyssey-28b84.appspot.com/o/background%2Flow-angle-shot-mesmerizing-starry-sky.jpg?alt=media&token=aafa69db-bc6b-45b6-9393-8a01acb37227"
              }
              key={lesson.id}
              name={lesson.DisplayName}
              path={`/lessons/${lesson.id}`}
            />
          ))}
        {status === -1 && <p>Something went wrong</p>}
      </MainContainer>
      <NavBar />
    </Main>
  );
};

export default Lessons;
