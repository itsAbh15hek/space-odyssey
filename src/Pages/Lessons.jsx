import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";

const Main = styled.div`
  background-color: #e00000;
  height: 100vh;
  width: 100vw;
`;

const Lessons = () => {
  return (
    <Main>
      <h1>Lessons</h1>

      <NavBar />
    </Main>
  );
};

export default Lessons;
