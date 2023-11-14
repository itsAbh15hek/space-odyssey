import React from "react";
import styled from "styled-components";
const Main = styled.div`
  height: calc(95vh - 200px);
  width: 98vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  z-index: 2;
  background-color: rgba(45, 64, 89, 0.1);
  border-radius: 20px;
  margin: 20px auto;
  padding: 40px 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  color: #e5e5e5;
  overflow: hidden;

  .text {
    min-height: calc(100% - 80px);
    width: 100%;
    overflow-y: auto;
  }

  @media (max-width: 950px) {
    height: 150px;
    height: calc(95vh - 250px);
    width: 100%;
    margin: 0;
  }
`;
const MainContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainContainer;
