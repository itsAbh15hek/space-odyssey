import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import MainContainer from "../../Components/MainContainer";
import ScrollableComponent from "../../Components/ScrollableComponent";
import staryBG from "../../assets/staryBG.mp4";
import styled from "styled-components";
import NavBar from "../../Components/NavBar";
import { userRequest } from "../../requestMethods";

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
    font-family: "Expletus Sans", sans-serif;
    font-size: 30px;
    color: #ea5455;
    margin: 30px auto;
    text-align: center;
    text-transform: capitalize;
  }
  .details {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }
`;
const QuestionContiner = styled.div`
  width: 100%;
  height: max-content;
`;

const ViewQuiz = () => {
  const pathname = useLocation().pathname;
  const id = pathname.split("/")[3];
  const [quizDetails, setQuizDetails] = useState({});
  const [status, setStatus] = useState(1);

  const getQuizDetails = async () => {
    setStatus(1);
    try {
      const { data } = await userRequest(`/quiz/getSubmittedQuiz/${id}`);
      setQuizDetails(data.data);
      console.log("first", data.data);
      setStatus(0);
    } catch (error) {
      console.log("error", error);
      setStatus(-1);
    }
  };
  useEffect(() => {
    getQuizDetails();
  }, []);

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <ScrollableComponent>
          <h1>{quizDetails?.topic}</h1>
          <div className="details">
            <p>{`Date: ${quizDetails?.quizDate?.split("T")[0]}`}</p>
            <p>{`Score: ${quizDetails?.marksObtained}`}</p>
          </div>
          <h2>Questions</h2>
          <QuestionContiner>
            {quizDetails?.questionAndCorrectAnswers?.map((qna, index) => (
              <div>
                <h3>{qna?.questionString}</h3>
                <h4>Options</h4>
                {qna?.options?.map((opt) => (
                  <p>{opt}</p>
                ))}
                <div className="option-div">
                  <p>{`Correct Option: ${qna?.correctOption}`}</p>
                  <p>{`Choosen Option: ${quizDetails?.choosenOptions[index]}`}</p>
                </div>
              </div>
            ))}
          </QuestionContiner>
        </ScrollableComponent>
      </MainContainer>
      <NavBar />
    </Main>
  );
};

export default ViewQuiz;
