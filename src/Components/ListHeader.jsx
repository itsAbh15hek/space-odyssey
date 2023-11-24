import React from "react";
import styled from "styled-components";
const Heading = styled.h1`
  font-family: "Expletus Sans", sans-serif;
  color: #decdc3;
  margin: 20px auto;
  font-size: 50px;
  text-transform: capitalize;
  text-align: center;
  
  @media (max-width: 800px) {
    font-size: 35px;
    margin: 10px;
  }
  @media (max-width: 350px) {
    font-size: 30px;
  }

`;

const ListHeader = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default ListHeader;
