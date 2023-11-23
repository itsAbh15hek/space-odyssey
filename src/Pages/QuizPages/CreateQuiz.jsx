import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  input {
    background-color: transparent;
  }
  button {
    background-color: transparent;
  }
`;

const CreateQuiz = () => {
  const [quizData, setQuizData] = useState([
    {
      questionString: "",
      options: [],
      correctOption: "",
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
      { questionString: "", options: [], correctOption: "" },
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

  return (
    <Container>
      {quizData.map((question, quesInd) => (
        <div key={quesInd}>
          <label>
            Question:
            <input
              type="text"
              value={question.questionString}
              onChange={(e) => handleQuestionChange(quesInd, e.target.value)}
            />
          </label>
          <ul>
            {question.options.map((option, optInd) => (
              <li key={optInd}>
                <label>
                  Option {String.fromCharCode(97 + optInd)}:
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(quesInd, optInd, e.target.value)
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
          <label>
            Correct Option:
            <select
              value={question.correctOption}
              onChange={(e) =>
                handleCorrectOptionChange(quesInd, e.target.value)
              }
            >
              {question.options.map((_, optInd) => (
                <option key={optInd} value={String.fromCharCode(97 + optInd)}>
                  {String.fromCharCode(97 + optInd)}
                </option>
              ))}
            </select>
          </label>
          <button type="button" onClick={() => addOption(quesInd)}>
            Add Option
          </button>
          {quizData.length > 1 && (
            <button type="button" onClick={() => removeQuestion(quesInd)}>
              Remove Question
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addQuestion}>
        Add Question
      </button>
      <button
        type="button"
        onClick={() => console.log("Jigyasu Gandu", quizData)}
      >
        Create Quiz
      </button>
    </Container>
  );
};

export default CreateQuiz;
