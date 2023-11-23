import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScrollableComponent from "../../Components/ScrollableComponent";
import MainContainer from "../../Components/MainContainer";
import Header from "../../Components/Header";
import staryBG from "../../assets/staryBG.mp4";
import NavBar from "../../Components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest, userRequest } from "../../requestMethods";

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
    margin: 20px auto 30px;
    align-self: baseline;
    text-transform: capitalize;
  }
`;
const Form = styled.form`
  height: auto;
  width: 98%;
  h2 {
    margin: 20px 0 10px;
  }
  .inputs {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    label {
      margin: 5px 0;
      display: flex;
      align-items: center;
      justify-content: start;
      input {
        appearance: none;
        background-color: transparent;
        margin: 0;
        width: 15px;
        height: 15px;
        border: 2px solid;
        border-radius: 3px;
        display: grid;
        place-content: center;
        &::before {
          content: "";
          width: 5px;
          height: 5px;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 5px 5px white;
        }
        &:checked::before {
          transform: scale(1);
        }
      }
      span {
        margin-left: 10px;
      }
    }
  }
  button {
    font-size: 20px;
    border: 1px solid;
    padding: 5px 15px;
    margin: 20px auto;
    border-radius: 5px;
    transition: all 0.25s ease;
    background-color: transparent;
    color: #ea5454;
    display: block;
    &:hover {
      background-color: #ea5454;
      color: #decdc3;
    }
  }
`;
const TakeQuiz = () => {
  const navigate = useNavigate();
  const id = useLocation().pathname.split("/")[3];
  const [quiz, setQuiz] = useState({});
  const [answers, setAnswers] = useState([]);
  const getQuiz = async () => {
    const { data } = await publicRequest(`/quiz/giveQuiz/${id}`);
    console.log("getauiz", data?.data?.quiz);
    setQuiz(data?.data?.quiz);
  };

  const handleChange = (quesInd, optInd) => {
    const data = [...answers];
    if (String.fromCharCode(97 + optInd) === data[quesInd])
      data[quesInd] = null;
    else data[quesInd] = String.fromCharCode(97 + optInd);
    console.log("first", String.fromCharCode(97 + optInd), data[quesInd], data);
    setAnswers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.post(`/quiz/submitQuiz/${id}`, {
        choosenOptions: [...answers],
      });
      navigate(`/quizes/view-quiz/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);
  useEffect(() => {
    const data = [];
    quiz?.questions?.forEach(() => {
      data.push(null);
    });
    setAnswers(data);
  }, [quiz]);
  useEffect(() => {
    console.log("answers", answers);
  }, [answers]);

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        <ScrollableComponent>
          <h1>{quiz?.topic}</h1>
          <Form onSubmit={(e) => handleSubmit(e)}>
            {quiz?.questions?.map((ques, quesInd) => (
              <div className="ques-container" key={quesInd}>
                <h2>{`${quesInd + 1}. ${ques.questionString}`}</h2>
                <div className="inputs">
                  {ques?.options?.map((opt, optInd) => (
                    <label key={optInd} htmlFor={`${ques._id}.${optInd}`}>
                      <input
                        type="checkbox"
                        name={opt}
                        id={`${ques._id}.${optInd}`}
                        value={String.fromCharCode(97 + optInd)}
                        checked={
                          answers[quesInd] === String.fromCharCode(97 + optInd)
                        }
                        onChange={() => handleChange(quesInd, optInd)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit">Submit</button>
          </Form>
        </ScrollableComponent>
      </MainContainer>
      <NavBar />
    </Main>
  );
};

export default TakeQuiz;
