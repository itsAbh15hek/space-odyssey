import React from "react";
import styled from "styled-components";
const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-bottom: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .scrollable {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    z-index: 1;
    height: auto;
    background: transparent;
  }
`;
const ScrollableComponent = ({ children }) => {
  return (
    <Container>
      <div className="scrollable">{children}</div>
    </Container>
  );
};

export default ScrollableComponent;
