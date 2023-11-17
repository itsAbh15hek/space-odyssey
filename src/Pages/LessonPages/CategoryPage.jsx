import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import staryBG from "../../assets/staryBG.mp4";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import MainContainer from "../../Components/MainContainer";
import ListHeader from "../../Components/ListHeader";
import ListItem from "../../Components/ListItem";
import { publicRequest } from "../../requestMethods";
import ScrollableComponent from "../../Components/ScrollableComponent";
import Loader from "../../Components/Loader";
import ListItemImages from "../../Components/ListItemImages";

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

const CategoryPage = () => {
  const [lessonCategory, setLessonCategory] = useState([]);
  const [status, setStatus] = useState(1);
  const Location = useLocation();
  const pathname = Location.pathname.split("/")[2];
  const title =
    pathname === "celestialobjects" ? "celestial objects" : pathname;

  const getData = async () => {
    setStatus(1);
    try {
      const { data } = await publicRequest.get(`/lessons/${pathname}`);
      const properData = data.data;
      if (pathname === "celestialobjects") {
        properData.shift();
        properData.shift();
        properData.shift();
        properData.unshift({ DisplayName: "Solar System", id: "solarsystem" });
      }
      setLessonCategory(properData);
      console.log("madarchod", properData);
      setStatus(0);
      console.log("data", data);
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
            {pathname === "events"
              ? lessonCategory.map((lesson) => (
                  <ListItemImages
                    heading={lesson.DisplayName}
                    text={lesson.subHeading}
                    image={lesson.image}
                  />
                ))
              : lessonCategory.map((lesson) => (
                  <ListItem
                    name={lesson.DisplayName}
                    path={`${pathname}/${lesson.id}`}
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

export default CategoryPage;
