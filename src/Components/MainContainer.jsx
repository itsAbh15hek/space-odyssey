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
  margin: 20px auto;
  padding: 20px 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px 5px 0 0;
  color: #e5e5e5;
  overflow: hidden;
  //max-width: 768px;

  .text {
    min-height: calc(100% - 80px);
    width: 100%;
    overflow-y: auto;
  }

  @media (max-width: 1030px) {
    height: calc(95vh - 150px);
    width: 98vw;
    margin: 0;
    bottom: 10px;
  }

  @media (max-width: 500px) {
    padding: 20px;
  }
`;
const MainContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainContainer;
