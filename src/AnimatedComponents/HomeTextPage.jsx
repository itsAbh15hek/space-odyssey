import React from "react";
import styled from "styled-components";
const Page = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignment};
  justify-content: center;
`;
const HomeTextPage = ({ children, alignment }) => {
  return <Page alignment={alignment}>{children}</Page>;
};

export default HomeTextPage;
