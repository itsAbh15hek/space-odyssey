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
  console.log("first", Location.pathname);
  const getData = async () => {
    setStatus(1);
    try {
      const { data } = await publicRequest.get(`/lessons/${pathname}`);

      setLessonCategory(data.data);
      console.log("ma******d", data.data);
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
            {pathname === "events" || pathname === "missions"
              ? lessonCategory.map((lesson) => (
                  <ListItemImages
                    path={lesson.id}
                    heading={lesson.DisplayName}
                    text={lesson.subHeading}
                    image={lesson.image}
                  />
                ))
              : lessonCategory.map((lesson) => (
                  <ListItem
                    image={
                      "https://img.freepik.com/free-photo/glowing-star-field-dark-night-sky-generated-by-ai_24640-130990.jpg?t=st=1700327978~exp=1700331578~hmac=67c8c86b4741c792545627caebdf3a257a247f1ce764e9b0d875863bea8f2e8e&w=1380"
                    }
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
