import React, { useEffect } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import staryBG from "../assets/staryBG.mp4";
import MainContainer from "../Components/MainContainer";
import ScrollableComponent from "../Components/ScrollableComponent";
import { getQuizes } from "../redux/apiCalls/quizApiCalls";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../Components/ListItem";

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    color: #ea5454;
    width: 100%;
    font-size: 50px;
    font-family: "Expletus Sans", sans-serif;
    text-align: center;
    margin: 30px auto;
  }
`;

const Quizes = () => {
  const dispatch = useDispatch();
  const quizList = useSelector((state) => state?.quizes?.quizList);
  useEffect(() => {
    getQuizes(dispatch);
  }, []);

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <ScrollableComponent>
          <h1>Take a Quiz Now!</h1>
          {quizList?.map((quiz) => (
            <ListItem
              name={quiz.topic}
              path={`/quizes/take-quiz/${quiz._id}`}
              image={
                "https://thumbs.dreamstime.com/z/question-mark-seamless-pattern-trivia-poster-design-template-quiz-loading-page-random-punctuation-marks-background-vector-182361333.jpg?w=768"
              }
            />
          ))}
        </ScrollableComponent>
      </MainContainer>

      <NavBar />
    </Main>
  );
};

export default Quizes;
