import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const Main = styled(motion.div)`
  height: calc(95vh - 200px);
  max-width: 1560px;
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
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  //max-width: 768px;

  .text {
    min-height: calc(100% - 80px);
    width: 100%;
    overflow-y: auto;
  }

  @media (max-width: 1030px) {
    width: 100%;
    margin: 0;
    bottom: 10px;
  }

  @media (max-width: 790px) {
    height: calc(95vh - 150px);
    padding: 20px;
  }
`;
const MainContainer = ({ children }) => {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1.2, delay: 0.6 }}
    >
      {children}
    </Main>
  );
};

export default MainContainer;
