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
    margin-bottom: 30px;

    @media (max-width: 750px) {
      font-size: 40px;
    }

    @media (max-width: 375px) {
      font-size: 40px;
    }
  }
`;

const style = {
  borderRadius: "5px",
  padding: "3px",
  color: "white",
  flexWrap: "wrap",
};

const Quizes = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.user?.currentUser);
  const quizList = useSelector((state) => state?.quizes?.quizList);
  useEffect(() => {
    getQuizes(dispatch, currentUser);
  }, [currentUser]);

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <ScrollableComponent>
          <h1>Take a Quiz Now!</h1>
          {quizList?.map((quiz) => (
            <ListItem
              style={style}
              name={quiz.topic}
              right={quiz.questions?.length}
              path={`/quizes/take-quiz/${quiz._id}`}
              image={
                "https://firebasestorage.googleapis.com/v0/b/space-odyssey-28b84.appspot.com/o/background%2Fquiz1.jpg?alt=media&token=cd0075ab-394a-4631-bf93-f83e38f01e49"
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
