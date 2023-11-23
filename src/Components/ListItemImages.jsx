import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  //height: 300px;
  width: 95%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  color: #ea5454;
  background-color: rgba(45, 64, 89, 0.2);
  border-radius: 15px;
  border-top: 1px solid #decdc3;
  border-left: 1px solid #decdc3;
  margin: 20px auto;
  font-size: 30px;
  letter-spacing: 2px;
  user-select: none;
  a {
    width: 100%;
    padding: 5px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
  }
  img {
    height: 200px;
    width: 250px;
    //background-color: #ffffff1f;
    border-radius: 5px;
    object-fit: contain;
  }
`;
const Text = styled.div`
  width: calc(95vh - 300px);
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 15px;
  }
`;
const ListItemImages = ({ path, heading, text, image }) => {
  const Location = useLocation();
  const pathname = Location.pathname;
  return (
    <Container>
      <Link to={`${pathname}/${path}`}>
        <Text>
          <h2>{heading}</h2>
          <p>{text}</p>
        </Text>
        <img src={image} loading="lazy" />
      </Link>
    </Container>
  );
};

export default ListItemImages;
