import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";

const History = () => {
  const Main = styled.div`
    background-color: #e00000;
    height: 100vh;
    width: 100vw;
  `;
  return (
    <Main>
      <h1>History</h1>

      <NavBar />
    </Main>
  );
};

export default History;
