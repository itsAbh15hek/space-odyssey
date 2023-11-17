import React from "react";
import styled from "styled-components";
const Heading = styled.h1`
  font-family: "Expletus Sans", sans-serif;
  color: #decdc3;
  margin: 20px auto;
  font-size: 50px;
  text-transform: capitalize;
`;

const ListHeader = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default ListHeader;
