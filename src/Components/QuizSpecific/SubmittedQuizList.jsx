import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const QuizContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 40px;
  padding-top: 30px;
  h1 {
    align-self: baseline;
    font-family: "Expletus Sans", sans-serif;
    //font-size: 50px;
    //font-weight: lighter;
    color: #ea5455;
    margin-bottom: 5px;
    text-align: center;
  }
`;
const Quiz = styled(motion.div)`
  height: 110px;
  //width: 95%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  color: #ea5454f9;
  background-color: rgba(45, 64, 89, 0.15);
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  margin: 30px auto;
  letter-spacing: 2px;
  user-select: none;
  a {
    height: 100%;
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    color: #ea5454f9;
    text-shadow: 3px 3px 5px black;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.5);
  }
  h3 {
    color: #ea5454f9;
    text-transform: capitalize;
  }
  p {
    margin-top: 5px;
  }


  @media (max-width: 580px) {
    a{
      padding: 10px;
    }
    h3,h4,p{
      transform: scale(0.9);
    }
  }
`;
const SubmittedQuizList = ({ quizList }) => {
  return (
    <QuizContainer>
      <h1>Quizes Submitted</h1>
      <div className="quizList">
        {quizList.map((quiz) => (
          <Quiz
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 1.03 }}
          >
            <Link to={`/quizes/view-quiz/${quiz._id}`}>
              <div className="details">
                <h3>{quiz.topic}</h3>
                <p>{quiz.date.split("T")[0]}</p>
              </div>
              <div className="scores">
                <h4>{`Questions: ${quiz.totalQuestions}`}</h4>
                <p>{`Correct: ${quiz.marksObtained}`}</p>
              </div>
            </Link>
          </Quiz>
        ))}
      </div>
    </QuizContainer>
  );
};

export default SubmittedQuizList;
