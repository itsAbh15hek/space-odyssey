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

const CelestialCategoryPage = () => {
  const [lessonCategory, setLessonCategory] = useState([]);
  const [status, setStatus] = useState(1);
  const Location = useLocation();
  const pathname = Location.pathname.split("/")[3];

  console.log("first", Location.pathname, pathname);
  const getData = async () => {
    setStatus(1);
    try {
      const { data } = await publicRequest.get(
        `/lessons/celestialobjects/${pathname}`
      );
      const properData = data.data;

      setLessonCategory(properData);
      console.log("check id name", data);
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
        <ListHeader
          title={
            pathname === "galaxies"
              ? pathname
              : `${pathname.replace("%20", " ")}s`
          }
        />
        {status === 1 && <Loader />}
        {status === 0 && (
          <ScrollableComponent>
            {lessonCategory.map((lesson) => (
              <ListItem
                key={lesson.id}
                image={
                  "https://img.freepik.com/free-photo/spaceship-orbits-dark-galaxy-glowing-blue-comet-generated-by-ai_188544-9662.jpg?w=1380&t=st=1700488278~exp=1700488878~hmac=90afcd8c877cfcf35d9b358b9d1c7ce035b6b91093b2a683c1d4c0d9ca0e5490"
                }
                name={lesson.englishName}
                path={`/lessons/celestialobjects/${pathname}/${lesson.id}`}
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

export default CelestialCategoryPage;
