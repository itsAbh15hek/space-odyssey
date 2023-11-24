import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../Components/NavBar";
import staryBG from "../../assets/staryBG.mp4";
import MainContainer from "../../Components/MainContainer";
import Header from "../../Components/Header";
import ScrollableComponent from "../../Components/ScrollableComponent";
import { userRequest } from "../../requestMethods";
import Loader from "../../Components/Loader";

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
const Container = styled.form`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 5px;
  margin: 0 auto;
  padding: 20px 20px 40px;

  @media (max-width: 800px) {
    padding: 20px 10px;
    margin: 0;

    label {
      transform: scale(0.9);
    }
  }

  .add-ques {
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid;
    padding: 10px 25px;
    margin: 10px 30px;
    border-radius: 5px;
    transition: all 0.25s ease;
    background-color: transparent;
    color: #ea5454;
    height: min-content;
    width: 150px;

    &:hover {
      background-color: #ea5454;
      color: #decdc3;
    }
  }

  .crt {
    display: block;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid;
    padding: 10px 40px;
    margin: 30px auto;
    border-radius: 5px;
    transition: all 0.25s ease;
    background-color: transparent;
    color: #ea5454;
    height: min-content;
    max-width: 600px;
    width: 100%;

    &:hover {
      background-color: #ea5454;
      color: #decdc3;
    }
  }

  .topic {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin: 10px auto 40px;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    span {
      font-size: 40px;
      color: #ea5454;
    }

    input {
      margin-left: 20px;
      padding: 10px 30px;
      outline: none;
      border: none;
      border-bottom: 1px solid;
      border-radius: 10px;
      background-color: transparent;
      font-size: 15px;
      width: 100%;
      @media (max-width: 800px) {
        margin-left: 0;
      }
    }
  }
`;
const QuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin: 10px auto;

  .ques {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin: 10px auto;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    span {
      font-size: 30px;
      color: #ea5454;
    }
    input {
      margin-left: 20px;
      padding: 10px 30px;
      outline: none;
      border: none;
      border-bottom: 1px solid;
      border-radius: 10px;
      background-color: transparent;
      font-size: 15px;
      width: 100%;
      @media (max-width: 800px) {
        margin-left: 0;
      }
    }
  }

  ul {
    list-style: none;
    padding-left: 20px;
    font-size: 15px;
    margin: 10px;
    width: 100%;

    @media (max-width: 800px) {
      margin-left: 0;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
      }

      .opt {
        display: flex;
        align-items: center;
        justify-content: start;
        width: calc(100% - 170px);
        @media (max-width: 800px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        span {
          width: 80px;
        }
        input {
          margin-left: 20px;
          padding: 10px 30px;
          outline: none;
          border: none;
          border-bottom: 1px solid;
          border-radius: 10px;
          background-color: transparent;
          font-size: 15px;
          width: calc(100% - 80px);

          @media (max-width: 800px) {
            width: 82vw;
            margin-left: 0;
          }
        }
      }
      button {
        text-decoration: none;
        border: 1px solid;
        padding: 5px 15px;
        border-radius: 5px;
        transition: all 0.25s ease;
        background-color: transparent;
        color: #a8a8a8;
        height: min-content;
        width: 150px;
        &:hover {
          background-color: #ea5454;
          color: #decdc3;
        }

        @media (max-width: 800px) {
          align-self: flex-end;
          margin: 10px;
        }
      }
    }
  }
  .add-option {
    text-decoration: none;
    border: 1px solid;
    padding: 5px 15px;
    margin: 10px 30px;
    border-radius: 5px;
    transition: all 0.25s ease;
    background-color: transparent;
    color: #ea5454;
    height: min-content;
    width: 150px;
    &:hover {
      background-color: #ea5454;
      color: #decdc3;
    }
  }
  .correctOpt {
    margin: 10px 30px;
    span {
      font-weight: 600;
      font-size: 15px;
    }
    select {
      margin-left: 20px;
      background-color: transparent;
      padding: 3px 10px;
      color: #ea5454;
      border: 1px solid #decdc3;
      option {
        color: #decdc3;
        background-color: black;
      }
    }
  }
  .rem-ques {
    text-decoration: none;
    border: 1px solid;
    padding: 5px 15px;
    margin: 20px 30px;
    border-radius: 5px;
    transition: all 0.25s ease;
    background-color: transparent;
    color: #a8a8a8;
    height: min-content;
    width: 150px;
    &:hover {
      background-color: #ea5454;
      color: #decdc3;
    }
  }
`;

const CreateQuiz = () => {
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState(0);
  const [quizData, setQuizData] = useState([
    {
      questionString: "",
      options: [],
      correctOption: "a",
    },
  ]);

  const handleQuestionChange = (quesInd, value) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[quesInd].questionString = value;
    setQuizData(updatedQuizData);
  };

  const handleOptionChange = (quesInd, optInd, value) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[quesInd].options[optInd] = value;
    setQuizData(updatedQuizData);
  };

  const handleCorrectOptionChange = (quesInd, value) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[quesInd].correctOption = value;
    setQuizData(updatedQuizData);
  };

  const addQuestion = () => {
    setQuizData([
      ...quizData,
      { questionString: "", options: [], correctOption: "a" },
    ]);
  };

  const removeQuestion = (quesInd) => {
    const updatedQuizData = [...quizData];
    updatedQuizData.splice(quesInd, 1);
    setQuizData(updatedQuizData);
  };

  const addOption = (quesInd) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[quesInd].options.push("");
    setQuizData(updatedQuizData);
  };

  const removeOption = (quesInd, optInd) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[quesInd].options.splice(optInd, 1);
    setQuizData(updatedQuizData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      topic: topic,
      questions: [...quizData],
    };
    setStatus(1);
    try {
      const { data } = await userRequest.post("/quiz/createQuiz", finalData);
      setStatus(0);
    } catch (error) {
      console.log(error);
      alert(`Error: ${error?.response?.data?.error?.message}`);
      setStatus(0);
    }
  };

  return (
    <Main>
      <video src={staryBG} autoPlay loop muted></video>
      <Header />
      <MainContainer>
        {status === 1 && <Loader />}
        {status === 0 && (
          <ScrollableComponent>
            <h1>Create Quiz</h1>

            <Container onSubmit={(e) => handleSubmit(e)}>
              <label className="topic">
                <span>Topic:</span>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </label>
              {quizData.map((question, quesInd) => (
                <QuesContainer key={quesInd}>
                  <label className="ques">
                    <span>Question:</span>
                    <input
                      type="text"
                      value={question.questionString}
                      onChange={(e) =>
                        handleQuestionChange(quesInd, e.target.value)
                      }
                    />
                  </label>
                  <ul>
                    {question.options.map((option, optInd) => (
                      <li key={optInd}>
                        <label className="opt">
                          <span>
                            {" "}
                            Option {String.fromCharCode(97 + optInd)}:
                          </span>
                          <input
                            type="text"
                            value={option}
                            onChange={(e) =>
                              handleOptionChange(
                                quesInd,
                                optInd,
                                e.target.value
                              )
                            }
                          />
                        </label>
                        {question.options.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeOption(quesInd, optInd)}
                          >
                            Remove Option
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="add-option"
                    onClick={() => addOption(quesInd)}
                  >
                    Add Option
                  </button>
                  <label className="correctOpt">
                    <span>Correct Option:</span>
                    <select
                      value={question.correctOption}
                      onChange={(e) =>
                        handleCorrectOptionChange(quesInd, e.target.value)
                      }
                    >
                      {question.options.map((_, optInd) => (
                        <option
                          key={optInd}
                          value={String.fromCharCode(97 + optInd)}
                        >
                          {String.fromCharCode(97 + optInd)}
                        </option>
                      ))}
                    </select>
                  </label>

                  {quizData.length > 1 && (
                    <button
                      type="button"
                      className="rem-ques"
                      onClick={() => removeQuestion(quesInd)}
                    >
                      Remove Question
                    </button>
                  )}
                </QuesContainer>
              ))}
              <button type="button" className="add-ques" onClick={addQuestion}>
                Add Question
              </button>
              <button type="submit" className="crt">
                Create Quiz
              </button>
            </Container>
          </ScrollableComponent>
        )}
      </MainContainer>
      <NavBar />
    </Main>
  );
};

export default CreateQuiz;
