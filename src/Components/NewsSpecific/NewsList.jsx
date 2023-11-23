import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(45, 64, 89, 0.1);
  border-radius: 15px;
  padding: 50px 50px;
  margin: 20px auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  a {
    text-decoration: none;
    border: 1px solid;
    padding: 5px 15px;
    border-radius: 5px;
    transition: all 0.25s ease;
    background-color: transparent;
    color: #ea5454;
    &:hover {
      background-color: #ea5454;
      color: #decdc3;
    }
  }
`;

const NewsList = () => {
  return (
    <Container>
      <h1>Latest Space News</h1>
    </Container>
  );
};

export default NewsList;
