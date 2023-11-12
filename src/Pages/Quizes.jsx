import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";

const Quizes = () => {
  const Main = styled.div`
    background-color: #e00000;
    height: 100vh;
    width: 100vw;
  `;
  return (
    <Main>
      <h1>Quizes</h1>

      <NavBar />
    </Main>
  );
};

export default Quizes;
