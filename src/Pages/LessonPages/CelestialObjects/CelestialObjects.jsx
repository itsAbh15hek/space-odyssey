import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../../Components/Header";
import MainContainer from "../../../Components/MainContainer";
import ListHeader from "../../../Components/ListHeader";
import Loader from "../../../Components/Loader";
import ScrollableComponent from "../../../Components/ScrollableComponent";
import NavBar from "../../../Components/NavBar";
import staryBG from "../../../assets/staryBG.mp4";
import { publicRequest } from "../../../requestMethods";
import ListItem from "../../../Components/ListItem";

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

const CelestialObjects = () => {
  const [lessonCategory, setLessonCategory] = useState([]);
  const [status, setStatus] = useState(1);
  const Location = useLocation();
  const pathname = Location.pathname.split("/")[2];
  const title =
    pathname === "celestialobjects" ? "celestial objects" : pathname;
  console.log("first", Location.pathname);
  const getData = async () => {
    setStatus(1);
    try {
      const { data } = await publicRequest.get(`/lessons/${pathname}`);
      const properData = data.data;
      // if (pathname === "celestialobjects") {
      //   properData.shift();
      //   properData.shift();
      //   properData.shift();
      //   properData.unshift({ DisplayName: "Solar System", id: "solarsystem" });
      // }
      setLessonCategory(properData);
      console.log("ma******d", properData);
      setStatus(0);
    } catch (error) {
      console.log("error", error);
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
        <ListHeader title={title} />
        {status === 1 && <Loader />}
        {status === 0 && (
          <ScrollableComponent>
            {lessonCategory.map((lesson) => (
              <ListItem
                key={lesson.id}
                image={
                  "https://img.freepik.com/free-photo/glowing-satellite-orbits-planet-star-filled-galaxy-generated-by-ai_188544-9664.jpg?w=1380&t=st=1700489717~exp=1700490317~hmac=e9a8a7994ea279411e77c275350a29bd3dd5e17d430adb0ca71118a3f5ff278d"
                }
                name={lesson.DisplayName}
                path={`/lessons/${pathname}/${lesson.id}`}
              />
            ))}
          </ScrollableComponent>
        )}
        {status === -1 && <p>Something went wrong</p>}
      </MainContainer>
      <NavBar />
    </Main>
  );
};

export default CelestialObjects;
